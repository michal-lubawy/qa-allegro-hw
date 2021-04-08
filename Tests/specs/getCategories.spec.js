import { getToken } from '../helpers/getToken';
import { config } from '../helpers/config';

const supertest = require('supertest');

const apiRequest = supertest(config.api.url);

let token;

beforeAll(async () => {
  token = await getToken();
});

it('Gets the test endpoint', async () => {
  const res = await apiRequest.get('/sale/categories').auth(token, { type: 'bearer' }).expect(200);
  const firstCategory = res.body.categories[0];
  expect(firstCategory).toHaveProperty('id');
  expect(firstCategory).toHaveProperty('name', 'Dom i Ogród');
  const secondCategory = res.body.categories[1];
  expect(secondCategory).toHaveProperty('id');
  expect(secondCategory).toHaveProperty('name', 'Dziecko');
});
