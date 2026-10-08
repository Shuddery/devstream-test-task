import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly signupLoginBtn: Locator;
  readonly deleteAccountBtn: Locator;
  readonly continueBtn: Locator;
  readonly logoutBtn: Locator;
  readonly logoImg: Locator;
  readonly accountDeletedHeading: Locator;

  readonly firstProductAddToCartBtn: Locator;
  readonly continueShoppingBtn: Locator;
  readonly cartHeaderBtn: Locator;

  constructor(public readonly page: Page) {
    this.signupLoginBtn = page.getByRole('link', { name: 'Signup / Login' });
    this.deleteAccountBtn = page.getByRole('link', { name: 'Delete Account' });
    this.continueBtn = page.getByTestId('continue-button');
    this.logoutBtn = page.getByRole('link', { name: 'Logout' });
    this.logoImg = page.getByRole('img', { name: 'Website For Automation Practice' });
    this.accountDeletedHeading = page.getByTestId('account-deleted');

    this.firstProductAddToCartBtn = page.locator('.add-to-cart').first();
    this.continueShoppingBtn = page.getByRole('button', { name: 'Continue Shopping' });
    this.cartHeaderBtn = page.getByRole('link', { name: 'Cart' }).first();
  }

  async goto() {
    await this.page.goto('/');
  }

  async verifyVisible() {
    await expect(this.logoImg).toBeVisible();
  }

  async clickSignupLogin() {
    await this.signupLoginBtn.click();
  }

  async clickDeleteAccount() {
    await this.deleteAccountBtn.click();
  }

  async clickContinue() {
    await this.continueBtn.click();
  }

  async verifyUserLoggedIn(username: string) {
    await expect(this.page.getByText(`Logged in as ${username}`)).toBeVisible();
  }

  async verifyAccountDeletedVisible() {
    await expect(this.accountDeletedHeading).toBeVisible();
  }

  async logout() {
    await this.logoutBtn.click();
  }

  async addFirstProductToCart() {
    await this.firstProductAddToCartBtn.click();
    
    await this.continueShoppingBtn.waitFor({ state: 'visible' });
    await this.continueShoppingBtn.click();
  }

  async clickCartButton() {
    await this.cartHeaderBtn.click();
  }
}