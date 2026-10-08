import { faker } from '@faker-js/faker';

export interface UserData {
  name: string;
  email: string;
  password: string;
  day: string;
  month: string;
  year: string;
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;

  cardNumber: string;
  cardCvc: string;
  cardExpiryMonth: string;
  cardExpiryYear: string;
}

export const generateUser = (): UserData => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
    password: faker.internet.password({ length: 10 }) + '1!',
    
    day: String(faker.number.int({ min: 1, max: 28 })),
    month: faker.date.month(),
    year: String(faker.number.int({ min: 1980, max: 2000 })),
    
    firstName,
    lastName,
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: 'United States',
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode('#####'),
    mobileNumber: faker.string.numeric(10),

    cardNumber: faker.finance.creditCardNumber(),
    cardCvc: faker.finance.creditCardCVV(),
    cardExpiryMonth: String(faker.number.int({ min: 1, max: 12 })).padStart(2, '0'), 
    cardExpiryYear: String(faker.date.future({ years: 5 }).getFullYear()),
  };
}