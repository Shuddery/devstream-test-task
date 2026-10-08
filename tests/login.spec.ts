import { test } from '../fixtures/pageFixtures';

test('Test Case 2: Login User with correct email and password', async ({ homePage, loginPage, randomUser }) => {

  await homePage.goto();
  await homePage.clickSignupLogin();
  await loginPage.fillInitialSignup(randomUser.name, randomUser.email);
  await loginPage.fillFullRegistrationForm(randomUser);
  await homePage.clickContinue();
  
  await homePage.logout();

  // 2. Navigate to url 'http://automationexercise.com'
  // 3. Verify that home page is visible successfully
  await homePage.goto();
  await homePage.verifyVisible();

  // 4. Click on 'Signup / Login' button
  await homePage.clickSignupLogin();

  // 5. Verify 'Login to your account' is visible
  await loginPage.verifyLoginSectionVisible();

  // 6. Enter correct email address and password
  // 7. Click 'login' button
  await loginPage.login(randomUser.email, randomUser.password);

  // 8. Verify that 'Logged in as username' is visible
  await homePage.verifyUserLoggedIn(randomUser.name);

  // 9. Click 'Delete Account' button
  await homePage.clickDeleteAccount();

  // 10. Verify that 'ACCOUNT DELETED!' is visible
  await homePage.verifyAccountDeletedVisible();
});