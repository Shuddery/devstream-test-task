import { test as basePageFixtures } from './pageFixtures';
import { UserData } from '../utils/userHelper';

type AuthFixtures = {
  authUserPage: { user: UserData };
};

export const test = basePageFixtures.extend<AuthFixtures>({
  authUserPage: async ({ homePage, loginPage, randomUser }, use) => {
    await homePage.goto();
    await homePage.clickSignupLogin();
    await loginPage.fillInitialSignup(randomUser.name, randomUser.email);
    await loginPage.fillFullRegistrationForm(randomUser);
    await homePage.clickContinue();

    await use({ user: randomUser });
  },
});

export { expect } from '@playwright/test';