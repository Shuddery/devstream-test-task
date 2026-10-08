import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly proceedToCheckoutBtn: Locator;
  readonly cartInfoTable: Locator;

  constructor(public readonly page: Page) {
    this.proceedToCheckoutBtn = page.getByText('Proceed To Checkout');
    this.cartInfoTable = page.locator('#cart_info');
  }

  async verifyCartPageDisplayed() {
    await expect(this.page).toHaveURL(/\/view_cart/);
    await expect(this.cartInfoTable).toBeVisible();
  }

  async clickProceedToCheckout() {
    await this.proceedToCheckoutBtn.click();
  }
}