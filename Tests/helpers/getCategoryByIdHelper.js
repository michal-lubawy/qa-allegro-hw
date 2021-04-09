import { getToken } from "./getTokenHelper";
import { config } from "./config";

const supertest = require("supertest");
const apiRequest = supertest(config.api.url);

let token;

async function getCategoryById(id) {
    token = await getToken();
    const res = await apiRequest
      .get(`/sale/categories/${id}`)
      .auth(token, { type: "bearer" })
      .expect(200);
    return res;
  }

  async function getCategoryPrarmsById(id) {
    token = await getToken();
    const res = await apiRequest
      .get(`/sale/categories/${id}/parameters`)
      .auth(token, { type: "bearer" })
      .expect(200);
    return res;
  }
  
  export { getCategoryById, getCategoryPrarmsById };