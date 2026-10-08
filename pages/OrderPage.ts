import { Page, Locator, expect } from '@playwright/test';
import { UserData } from '../utils/userHelper';
import { faker } from '@faker-js/faker';

export class OrderPage {
  readonly commentTextArea: Locator;
  readonly placeOrderBtn: Locator;
  
  readonly nameOnCardInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cvcInput: Locator;
  readonly expiryMonthInput: Locator;
  readonly expiryYearInput: Locator;
  readonly payButton: Locator;
  readonly orderPlacedHeading: Locator;

  constructor(public readonly page: Page) {
    this.commentTextArea = page.locator('textarea[name="message"]');
    this.placeOrderBtn = page.getByRole('link', { name: 'Place Order' });
    this.orderPlacedHeading = page.getByTestId('order-placed');

    this.nameOnCardInput = page.getByTestId('name-on-card');
    this.cardNumberInput = page.getByTestId('card-number');
    this.cvcInput = page.getByTestId('cvc');
    this.expiryMonthInput = page.getByTestId('expiry-month');
    this.expiryYearInput = page.getByTestId('expiry-year');
    this.payButton = page.getByTestId('pay-button');
  }

  async verifyAddressDetails(user: UserData) {
    const addressDelivery = this.page.locator('#address_delivery');
    await expect(addressDelivery).toContainText(user.firstName);
    await expect(addressDelivery).toContainText(user.lastName);
  }

  async enterCommentAndPlaceOrder() {
    await this.commentTextArea.fill(faker.lorem.sentence());
    await this.placeOrderBtn.click();
  }

  async fillPaymentDetailsAndPay(user: UserData) {
    await this.nameOnCardInput.fill(user.name);
    await this.cardNumberInput.fill(user.cardNumber);
    await this.cvcInput.fill(user.cardCvc);
    await this.expiryMonthInput.fill(user.cardExpiryMonth);
    await this.expiryYearInput.fill(user.cardExpiryYear);
    await this.payButton.click();
  }

  async verifySuccessMessageVisible() {
    await expect(this.orderPlacedHeading).toBeVisible();
  }
}