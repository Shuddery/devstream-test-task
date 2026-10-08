import { test } from '../fixtures/pageFixtures';

test('Test Case 1: Register User', async ({ homePage, loginPage, randomUser }) => {

  // 2. Navigate to url 'http://automationexercise.com'
  // 3. Verify that home page is visible successfully
  await homePage.goto();
  await homePage.verifyVisible();

  // 4. Click on 'Signup / Login' button
  await homePage.clickSignupLogin();

  // 5. Verify 'New User Signup!' is visible
  await loginPage.verifySignupSectionVisible();

  // 6. Enter name and email address
  // 7. Click 'Signup' button
  await loginPage.fillInitialSignup(randomUser.name, randomUser.email);

  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await loginPage.verifyAccountInformationFormVisible();

  /* 
     9. Fill details: Title, Name, Email, Password, Date of birth
     10. Select checkbox 'Sign up for our newsletter!'
     11. Select checkbox 'Receive special offers from our partners!'
     12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
     13. Click 'Create Account button'
  */
  await loginPage.fillFullRegistrationForm(randomUser);

  // 14. Verify that 'ACCOUNT CREATED!' is visible
  await loginPage.verifyAccountCreatedVisible();

  // 15. Click 'Continue' button
  await homePage.clickContinue();

  // 16. Verify that 'Logged in as username' is visible
  await homePage.verifyUserLoggedIn(randomUser.name);

  // 17. Click 'Delete Account' button
  await homePage.clickDeleteAccount();

  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await homePage.verifyAccountDeletedVisible();
  await homePage.clickContinue();
});