import { test, expect } from '@playwright/test';

test.describe('Homepage Integration Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/ContentForge/);
  });

  test('should display navbar with all navigation links', async ({ page }) => {
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();

    // Check logo
    await expect(page.locator('nav').getByText('CONTENTFORGE')).toBeVisible();

    // Check main nav links
    await expect(page.getByRole('link', { name: /concept/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /use cases/i })).toBeVisible();
  });

  test('should display hero section with headline and CTA', async ({ page }) => {
    // Check main headline
    await expect(page.getByText('+1,000 Digital Products')).toBeVisible();
    await expect(page.getByText('Ready to Use')).toBeVisible();

    // Check CTA button
    await expect(page.getByRole('link', { name: /get -50% now/i })).toBeVisible();

    // Check trust indicators
    await expect(page.getByText(/30-Day/i).first()).toBeVisible();
  });

  test('should display value proposition section with two columns', async ({ page }) => {
    const conceptSection = page.locator('#concept');
    await conceptSection.scrollIntoViewIfNeeded();

    // Check headline
    await expect(page.getByText(/time is your most/i)).toBeVisible();
    await expect(page.getByText(/valuable/i).first()).toBeVisible();

    // Check quote card
    await expect(page.getByText(/stop spending your life creating/i)).toBeVisible();

    // Check CTA
    await expect(page.getByRole('link', { name: /explore the collection/i })).toBeVisible();
  });

  test('should display use cases section with 5 cards', async ({ page }) => {
    const useCasesSection = page.locator('#use-cases');
    await useCasesSection.scrollIntoViewIfNeeded();

    // Check headline
    await expect(page.getByText(/dominate your market/i)).toBeVisible();

    // Check use case cards (3 top + 2 bottom)
    await expect(page.getByText(/viral strategy/i)).toBeVisible();
    await expect(page.getByText(/passive shopify empire/i)).toBeVisible();
    await expect(page.getByText(/lead magnets/i)).toBeVisible();
    await expect(page.getByText(/high-ticket coaching/i)).toBeVisible();
    await expect(page.getByText(/social content scale/i)).toBeVisible();
  });

  test('should display comparison section with before/after layout', async ({ page }) => {
    // Scroll to comparison section
    const comparisonHeadline = page.getByText(/the inevitable comparison/i);
    await comparisonHeadline.scrollIntoViewIfNeeded();

    // Check classic approach
    await expect(page.getByText(/the classic approach/i)).toBeVisible();
    await expect(page.getByText(/\+60 hours/i)).toBeVisible();

    // Check ContentForge advantage
    await expect(page.getByText(/the contentforge advantage/i)).toBeVisible();
    await expect(page.getByText(/5 minutes/i).first()).toBeVisible();
    await expect(page.getByText(/fixed payment/i)).toBeVisible();
  });

  test('should display resources section with 3 product cards', async ({ page }) => {
    const resourcesSection = page.locator('#resources');
    await resourcesSection.scrollIntoViewIfNeeded();

    // Check headline
    await expect(page.getByText(/your digital/i)).toBeVisible();
    await expect(page.getByText(/arsenal/i).first()).toBeVisible();

    // Check product cards
    await expect(page.getByText('EBOOKS PLR')).toBeVisible();
    await expect(page.getByText('MASTERCLASS')).toBeVisible();
    await expect(page.getByText('TEMPLATES PRO')).toBeVisible();

    // Check titles
    await expect(page.getByText('Expert Guides')).toBeVisible();
    await expect(page.getByText('Strategic Vision')).toBeVisible();
    await expect(page.getByText('Design Pack')).toBeVisible();
  });

  test('should display pricing section with Lite and Pro plans', async ({ page }) => {
    const pricingSection = page.locator('#pricing');
    await pricingSection.scrollIntoViewIfNeeded();

    // Check headline
    await expect(page.getByText(/one single investment/i)).toBeVisible();
    await expect(page.getByText(/unlimited revenue/i)).toBeVisible();

    // Check Lite plan
    await expect(page.getByText('Pack Lite')).toBeVisible();
    await expect(page.getByText('$47')).toBeVisible();

    // Check Pro plan
    await expect(page.getByText('Pack Pro')).toBeVisible();
    await expect(page.getByText('$197')).toBeVisible();
    await expect(page.getByText(/recommended by the elite/i)).toBeVisible();

    // Check trust badges
    await expect(page.getByText(/30-day guarantee/i)).toBeVisible();
    await expect(page.getByText(/ssl secured/i)).toBeVisible();
  });

  test('should display footer with all sections', async ({ page }) => {
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();

    // Check footer sections
    await expect(page.getByText('Platform').last()).toBeVisible();
    await expect(page.getByText('Legal').last()).toBeVisible();
    await expect(page.getByText('Contact').last()).toBeVisible();

    // Check payment methods
    await expect(page.getByText('stripe')).toBeVisible();
  });
});

test.describe('French Locale Tests', () => {
  test('should load French homepage with correct translations', async ({ page }) => {
    await page.goto('/fr');

    // Check French headline
    await expect(page.getByText('+1 000 Produits Digitaux')).toBeVisible();
    await expect(page.getByText('Prêts à Utiliser')).toBeVisible();

    // Check French CTA
    await expect(page.getByRole('link', { name: /profiter des -50%/i })).toBeVisible();
  });

  test('should display French pricing section', async ({ page }) => {
    await page.goto('/fr');

    const pricingSection = page.locator('#pricing');
    await pricingSection.scrollIntoViewIfNeeded();

    // Check French pricing headlines
    await expect(page.getByText(/un seul investissement/i)).toBeVisible();
    await expect(page.getByText(/revenus illimités/i)).toBeVisible();

    // Check French plan names
    await expect(page.getByText('Pack Lite')).toBeVisible();
    await expect(page.getByText('Pack Pro')).toBeVisible();
    await expect(page.getByText(/recommandé par l'élite/i)).toBeVisible();
  });
});

test.describe('Navigation Tests', () => {
  test('should navigate to pricing section when clicking CTA', async ({ page }) => {
    await page.goto('/en');

    await page.getByRole('link', { name: /get -50% now/i }).click();

    // Should scroll to pricing section
    await expect(page.locator('#pricing')).toBeInViewport();
  });

  test('should navigate to concept section', async ({ page }) => {
    await page.goto('/en');

    await page.getByRole('link', { name: /concept/i }).first().click();

    await expect(page.locator('#concept')).toBeInViewport();
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/en');

    await page.getByRole('link', { name: /contact/i }).first().click();

    await expect(page).toHaveURL(/\/en\/contact/);
  });
});

test.describe('Responsive Design Tests', () => {
  test('should display correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/en');

    // Hero should still be visible
    await expect(page.getByText('+1,000 Digital Products')).toBeVisible();

    // Pricing should adapt
    const pricingSection = page.locator('#pricing');
    await pricingSection.scrollIntoViewIfNeeded();
    await expect(page.getByText('Pack Lite')).toBeVisible();
    await expect(page.getByText('Pack Pro')).toBeVisible();
  });

  test('should display correctly on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/en');

    await expect(page.getByText('+1,000 Digital Products')).toBeVisible();

    // Use cases should show cards
    const useCasesSection = page.locator('#use-cases');
    await useCasesSection.scrollIntoViewIfNeeded();
    await expect(page.getByText(/viral strategy/i)).toBeVisible();
  });
});
