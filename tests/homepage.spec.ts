import { test, expect } from '@playwright/test';

test.describe('Homepage Integration Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/ContentForge/);
  });

  test('should display navbar with logo and navigation', async ({ page }) => {
    // Check logo
    await expect(page.getByText('CONTENTFORGE').first()).toBeVisible();

    // Check navigation exists
    await expect(page.locator('header')).toBeVisible();
  });

  test('should display hero section with headline and CTA', async ({ page }) => {
    // Check main headline
    await expect(page.getByText('+1,000 Digital Products')).toBeVisible();
    await expect(page.getByText('Ready to Use')).toBeVisible();

    // Check CTA button exists
    const ctaButton = page.locator('a[href*="pricing"]').first();
    await expect(ctaButton).toBeVisible();

    // Check trust indicators
    await expect(page.getByText(/30-Day/i).first()).toBeVisible();
  });

  test('should display value proposition section with two columns', async ({ page }) => {
    const conceptSection = page.locator('#concept');
    await conceptSection.scrollIntoViewIfNeeded();

    // Check headline contains key words
    await expect(page.getByText(/valuable/i).first()).toBeVisible();

    // Check quote card exists
    await expect(page.getByText(/stop spending your life creating/i)).toBeVisible();
  });

  test('should display use cases section with cards', async ({ page }) => {
    const useCasesSection = page.locator('#use-cases');
    await useCasesSection.scrollIntoViewIfNeeded();

    // Check headline
    await expect(page.getByText(/dominate your market/i)).toBeVisible();

    // Check some use case cards exist
    await expect(page.getByText(/viral strategy/i)).toBeVisible();
    await expect(page.getByText(/shopify/i).first()).toBeVisible();
  });

  test('should display comparison section with before/after layout', async ({ page }) => {
    // Scroll to comparison section
    const comparisonHeadline = page.getByText(/the inevitable comparison/i);
    await comparisonHeadline.scrollIntoViewIfNeeded();

    // Check classic approach
    await expect(page.getByText(/classic approach/i)).toBeVisible();
    await expect(page.getByText(/\+60 hours/i)).toBeVisible();

    // Check ContentForge advantage
    await expect(page.getByText(/contentforge advantage/i)).toBeVisible();
  });

  test('should display resources section with product cards', async ({ page }) => {
    const resourcesSection = page.locator('#resources');
    await resourcesSection.scrollIntoViewIfNeeded();

    // Check product cards exist
    await expect(page.getByText('EBOOKS PLR')).toBeVisible();
    await expect(page.getByText('MASTERCLASS')).toBeVisible();
    await expect(page.getByText('TEMPLATES PRO')).toBeVisible();
  });

  test('should display pricing section with plans', async ({ page }) => {
    const pricingSection = page.locator('#pricing');
    await pricingSection.scrollIntoViewIfNeeded();

    // Check headline
    await expect(page.getByText(/one single investment/i)).toBeVisible();

    // Check plans exist using headings
    await expect(page.getByRole('heading', { name: 'Pack Lite' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pack Pro' })).toBeVisible();

    // Check prices
    await expect(page.getByText('$47')).toBeVisible();
    await expect(page.getByText('$197')).toBeVisible();
  });

  test('should display footer with sections', async ({ page }) => {
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();

    // Check footer is visible
    await expect(footer).toBeVisible();

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
  });

  test('should display French pricing section', async ({ page }) => {
    await page.goto('/fr');

    const pricingSection = page.locator('#pricing');
    await pricingSection.scrollIntoViewIfNeeded();

    // Check French pricing headlines
    await expect(page.getByText(/un seul investissement/i)).toBeVisible();

    // Check French plan names
    await expect(page.getByRole('heading', { name: 'Pack Lite' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pack Pro' })).toBeVisible();
  });
});

test.describe('Navigation Tests', () => {
  test('should have working navigation links', async ({ page }) => {
    await page.goto('/en');

    // Check pricing link exists and is clickable
    const pricingLink = page.locator('a[href*="pricing"]').first();
    await expect(pricingLink).toBeVisible();
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/en');

    // Find and click contact link
    await page.locator('a[href*="contact"]').first().click();

    // Should navigate to contact page
    await expect(page).toHaveURL(/\/en\/contact/);
  });
});

test.describe('Responsive Design Tests', () => {
  test('should display correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/en');

    // Hero should still be visible
    await expect(page.getByText('+1,000 Digital Products')).toBeVisible();

    // Pricing section should work on mobile
    const pricingSection = page.locator('#pricing');
    await pricingSection.scrollIntoViewIfNeeded();
    await expect(page.getByRole('heading', { name: 'Pack Lite' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pack Pro' })).toBeVisible();
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
