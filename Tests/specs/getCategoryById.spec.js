import { matchers } from "jest-json-schema";
import { getToken } from "../helpers/getTokenHelper";
import { config } from "../helpers/config";
import { categoryByIdSchema } from "../helpers/schema";
import { getCategoryById } from "../helpers/getCategoryByIdHelper";

const supertest = require("supertest");

const apiRequest = supertest(config.api.url);

let token;
let category;
let categories;
let categoryId;

beforeAll(async () => {
  token = await getToken();
  categories = await apiRequest
    .get("/sale/categories")
    .auth(token, { type: "bearer" })
    .expect((res) => (res.status != 200 ? console.log(res.body) : 0))
    .expect(200);
  categoryId = await getRandomCategory();
});

describe("Get a category by ID endpoint", () => {
  it("returns the details of a specific category", async () => {
    category = await getCategoryById(categoryId);
    const receivedId = category.body.id;    
    const { parent } = category.body;
    expect(receivedId).toEqual(categoryId);
    expect(parent).toBe(null);
    expect.extend(matchers);
    expect(category.body).toMatchSchema(categoryByIdSchema);
  });
});

async function getRandomCategory() {
  const randomIdInRange =
    Math.floor(Math.random() * (categories.body.categories.length - 1 + 1)) + 1;
  return categories.body.categories[randomIdInRange].id;
}
