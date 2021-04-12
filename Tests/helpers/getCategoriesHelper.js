import { getToken } from "./getTokenHelper";
import { config } from "./config";

const supertest = require("supertest");

const apiRequest = supertest(config.api.url);

let token;

async function getCategories() {
  token = await getToken();
  const path = "/sale/categories"
  const res = await apiRequest
    .get(path)
    .auth(token, { type: "bearer" })
    .expect((res) => (res.status != 200 ? console.log(`Call to ${path} failed `+JSON.stringify(res.body, null, 2)) : 0))
    .expect(200);
  return res;
}

export { getCategories };
