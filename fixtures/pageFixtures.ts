import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { OrderPage } from '../pages/OrderPage';
import { generateUser, UserData } from '../utils/userHelper';

type ProjectPageFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  cartPage: CartPage;
  orderPage: OrderPage;
  randomUser: UserData;
};

export const test = base.extend<ProjectPageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  orderPage: async ({ page }, use) => {
    await use(new OrderPage(page));
  },
  randomUser: async ({}, use) => {
    await use(generateUser());
  },
});

export { expect } from '@playwright/test';