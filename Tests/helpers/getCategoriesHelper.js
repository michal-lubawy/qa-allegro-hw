import { getToken } from "./getTokenHelper";
import { config } from "./config";

const supertest = require("supertest");

const apiRequest = supertest(config.api.url);

let token;

async function getCategories() {
  token = await getToken();
  const res = await apiRequest
    .get("/sale/categories")
    .auth(token, { type: "bearer" })
    .expect(200);
  return res;
}

export { getCategories };
