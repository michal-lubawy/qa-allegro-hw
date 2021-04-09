import { getToken } from "../helpers/getTokenHelper";
import { config } from "../helpers/config";
import { getCategories } from "../helpers/getCategoriesHelper";

const supertest = require("supertest");

const apiRequest = supertest(config.api.url);

let token;

beforeAll(async () => {
  token = await getToken();
});

describe('The GET IDs of Allegro categories endpoint', () => {
  it("returns a list of the main Allegro categories", async () => {
    const res = await getCategories();    
    const firstCategory = res.body.categories[0];
    expect(firstCategory).toHaveProperty("id");
    expect(firstCategory).toHaveProperty("name", "Dom i Ogród");
    const secondCategory = res.body.categories[1];
    expect(secondCategory).toHaveProperty("id");
    expect(secondCategory).toHaveProperty("name", "Dziecko");
  });

})


