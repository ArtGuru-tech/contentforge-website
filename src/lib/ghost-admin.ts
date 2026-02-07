import jwt from 'jsonwebtoken';

const GHOST_ADMIN_API_URL = process.env.GHOST_ADMIN_API_URL || 'https://app.contentforge.cc';
const GHOST_ADMIN_API_KEY = process.env.GHOST_ADMIN_API_KEY || '';

interface GhostMemberCreateResponse {
  members: Array<{
    id: string;
    email: string;
    name: string;
    labels: Array<{ name: string }>;
  }>;
}

interface GhostMemberSearchResponse {
  members: Array<{
    id: string;
    email: string;
    labels: Array<{ id: string; name: string }>;
  }>;
}

function generateGhostAdminToken(): string {
  if (!GHOST_ADMIN_API_KEY) {
    throw new Error('Ghost Admin API key not configured');
  }

  const [id, secret] = GHOST_ADMIN_API_KEY.split(':');

  if (!id || !secret) {
    throw new Error('Invalid Ghost Admin API key format');
  }

  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 5 * 60; // Token valid for 5 minutes

  return jwt.sign(
    { iat, exp, aud: '/admin/' },
    Buffer.from(secret, 'hex'),
    { algorithm: 'HS256', keyid: id }
  );
}

export async function findMemberByEmail(email: string): Promise<{ id: string; labels: Array<{ id: string; name: string }> } | null> {
  const token = generateGhostAdminToken();

  // Escape single quotes in email to prevent query injection
  const safeEmail = email.replace(/'/g, "\\'");

  // Use URL API for proper query parameter encoding
  const url = new URL('/ghost/api/admin/members/', GHOST_ADMIN_API_URL);
  url.searchParams.set('filter', `email:'${safeEmail}'`);

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Ghost ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    console.error('Failed to search Ghost member:', await response.text());
    return null;
  }

  const data: GhostMemberSearchResponse = await response.json();

  if (data.members && data.members.length > 0) {
    return {
      id: data.members[0].id,
      labels: data.members[0].labels,
    };
  }

  return null;
}

export async function createGhostMember(
  email: string,
  tier: 'lite' | 'pro',
  name?: string
): Promise<{ success: boolean; memberId?: string; error?: string }> {
  const token = generateGhostAdminToken();

  // First check if member already exists
  const existingMember = await findMemberByEmail(email);

  if (existingMember) {
    // Update existing member's labels to include the new tier
    return await updateMemberTier(existingMember.id, tier, existingMember.labels);
  }

  // Create new member
  const memberData = {
    members: [
      {
        email,
        name: name || email.split('@')[0],
        labels: [{ name: tier === 'pro' ? 'Pro' : 'Lite' }],
        send_email: true, // Send magic link email
      },
    ],
  };

  const response = await fetch(`${GHOST_ADMIN_API_URL}/ghost/api/admin/members/`, {
    method: 'POST',
    headers: {
      Authorization: `Ghost ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(memberData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Failed to create Ghost member:', errorText);
    return { success: false, error: errorText };
  }

  const data: GhostMemberCreateResponse = await response.json();

  return {
    success: true,
    memberId: data.members[0]?.id,
  };
}

async function updateMemberTier(
  memberId: string,
  tier: 'lite' | 'pro',
  existingLabels: Array<{ id: string; name: string }>
): Promise<{ success: boolean; memberId?: string; error?: string }> {
  const token = generateGhostAdminToken();

  // Check if user is upgrading from Lite to Pro
  const hasLite = existingLabels.some(l => l.name.toLowerCase() === 'lite');
  const hasPro = existingLabels.some(l => l.name.toLowerCase() === 'pro');

  // If already has Pro, no need to update
  if (hasPro) {
    return { success: true, memberId };
  }

  // Build new labels array
  const newLabels = [...existingLabels];

  // Add the new tier label (omit id to let Ghost generate it)
  const tierLabel = tier === 'pro' ? 'Pro' : 'Lite';
  if (!newLabels.some(l => l.name.toLowerCase() === tierLabel.toLowerCase())) {
    newLabels.push({ name: tierLabel } as { id: string; name: string });
  }

  // If upgrading to Pro, remove Lite label
  if (tier === 'pro' && hasLite) {
    const liteIndex = newLabels.findIndex(l => l.name.toLowerCase() === 'lite');
    if (liteIndex > -1) {
      newLabels.splice(liteIndex, 1);
    }
  }

  const response = await fetch(`${GHOST_ADMIN_API_URL}/ghost/api/admin/members/${memberId}/`, {
    method: 'PUT',
    headers: {
      Authorization: `Ghost ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      members: [{ labels: newLabels }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Failed to update Ghost member:', errorText);
    return { success: false, error: errorText };
  }

  return { success: true, memberId };
}

export async function sendMagicLink(email: string): Promise<{ success: boolean; error?: string }> {
  const token = generateGhostAdminToken();

  // Escape single quotes in email to prevent query injection
  const safeEmail = email.replace(/'/g, "\\'");

  // Use URL API for proper query parameter encoding
  const url = new URL('/ghost/api/admin/members/', GHOST_ADMIN_API_URL);
  url.searchParams.set('filter', `email:'${safeEmail}'`);

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Ghost ${token}`,
    },
  });

  if (!response.ok) {
    return { success: false, error: 'Member not found' };
  }

  // Ghost automatically sends magic link on member creation with send_email: true
  // For existing members, they can use the portal to request a new link
  return { success: true };
}
