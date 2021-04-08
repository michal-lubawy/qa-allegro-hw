import { getToken } from '../helpers/getToken';
import { config } from '../helpers/config';

const apiUrl = 'https://api.allegro.pl';
const supertest = require('supertest');

const apiRequest = supertest(config.api.url);

let token;
let category;

beforeAll(async () => {
  token = await getToken();
});

it('Gets the test endpoint', async () => {
  category = await getCategoryById(11763);
  console.log(category.body);
});

async function getCategoryById(id) {
  const res = await apiRequest.get(`/sale/categories/${id}`).auth(token, { type: 'bearer' }).expect(200);
  console.log(res.body);
  return res;
}
