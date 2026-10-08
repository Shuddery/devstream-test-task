import { Page, Locator, expect } from '@playwright/test';
import { UserData } from '../utils/userHelper';

export class LoginPage {
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;
  readonly signupHeading: Locator;

  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;
  readonly loginHeading: Locator;
  readonly accountInfoHeading: Locator;

  readonly genderMrRadio: Locator;
  readonly passwordInput: Locator;
  readonly daysSelect: Locator;
  readonly monthsSelect: Locator;
  readonly yearsSelect: Locator;
  readonly newsletterCheckbox: Locator;
  readonly specialOffersCheckbox: Locator;
  
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly address1Input: Locator;
  readonly address2Input: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedHeading: Locator;

  constructor(public readonly page: Page) {
    this.signupNameInput = page.getByTestId('signup-name');
    this.signupEmailInput = page.getByTestId('signup-email');
    this.signupButton = page.getByTestId('signup-button');
    this.signupHeading = page.getByRole('heading', { name: 'New User Signup!' });


    this.loginEmailInput = page.getByTestId('login-email');
    this.loginPasswordInput = page.getByTestId('login-password');
    this.loginButton = page.getByTestId('login-button');
    this.loginHeading = page.getByRole('heading', { name: 'Login to your account' });
    this.accountInfoHeading = page.getByText('Enter Account Information');
    

    this.genderMrRadio = page.locator('#id_gender1');
    this.passwordInput = page.getByTestId('password');
    this.daysSelect = page.getByTestId('days');
    this.monthsSelect = page.getByTestId('months');
    this.yearsSelect = page.getByTestId('years');

    this.newsletterCheckbox = page.locator('#newsletter');
    this.specialOffersCheckbox = page.locator('#optin');

    this.firstNameInput = page.getByTestId('first_name');
    this.lastNameInput = page.getByTestId('last_name');
    this.companyInput = page.getByTestId('company');
    this.address1Input = page.getByTestId('address');
    this.address2Input = page.getByTestId('address2');
    this.countrySelect = page.getByTestId('country');
    this.stateInput = page.getByTestId('state');
    this.cityInput = page.getByTestId('city');
    this.zipcodeInput = page.getByTestId('zipcode');
    this.mobileNumberInput = page.getByTestId('mobile_number');
    this.createAccountButton = page.getByTestId('create-account');
    this.accountCreatedHeading = page.getByTestId('account-created');
  }

  async verifySignupSectionVisible() {
    await expect(this.signupHeading).toBeVisible();
  }


  async fillInitialSignup(name: string, email: string) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }

  async login(email: string, pass: string) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(pass);
    await this.loginButton.click();
  }

  async verifyLoginSectionVisible() {
    await expect(this.loginHeading).toBeVisible();
  }

  async verifyAccountInformationFormVisible() {
    await expect(this.accountInfoHeading).toBeVisible();
  }

  async fillFullRegistrationForm(user: UserData) {
    await this.genderMrRadio.check();
    await this.passwordInput.fill(user.password);
    await this.daysSelect.selectOption(user.day);
    await this.monthsSelect.selectOption(user.month);
    await this.yearsSelect.selectOption(user.year);

    await this.newsletterCheckbox.check();
    await this.specialOffersCheckbox.check();

    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.companyInput.fill(user.company);
    await this.address1Input.fill(user.address1);
    await this.address2Input.fill(user.address2);
    await this.countrySelect.selectOption(user.country);
    await this.stateInput.fill(user.state);
    await this.cityInput.fill(user.city);
    await this.zipcodeInput.fill(user.zipcode);
    await this.mobileNumberInput.fill(user.mobileNumber);

    await this.createAccountButton.click();
  }

  async verifyAccountCreatedVisible() {
    await expect(this.accountCreatedHeading).toBeVisible();
  }
}