import { test } from '../fixtures/authFixtures';

test('Test Case 16: Place Order: Login before Checkout', async ({ 
  homePage, 
  cartPage, 
  orderPage, 
  authUserPage 
}) => {
  // 3. Verify that home page is visible successfully
  await homePage.verifyVisible();

  // 6. Verify 'Logged in as username' at top
  await homePage.verifyUserLoggedIn(authUserPage.user.name);

  // 7. Add products to cart
  await homePage.addFirstProductToCart();

  // 8. Click 'Cart' button
  await homePage.clickCartButton();

  // 9. Verify that cart page is displayed
  await cartPage.verifyCartPageDisplayed();

  // 10. Click Proceed To Checkout
  await cartPage.clickProceedToCheckout();

  // 11. Verify Address Details and Review Your Order
  await orderPage.verifyAddressDetails(authUserPage.user);

  // 12. Enter description in comment text area and click 'Place Order'
  await orderPage.enterCommentAndPlaceOrder();

  // 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
  // 14. Click 'Pay and Confirm Order' button
  await orderPage.fillPaymentDetailsAndPay(authUserPage.user);

  // 15. Verify success message 'Your order has been placed successfully!'
  await orderPage.verifySuccessMessageVisible();
});