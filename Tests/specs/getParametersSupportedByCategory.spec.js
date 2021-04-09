import { matchers } from "jest-json-schema";
import { getCategoryPrarmsById } from "../helpers/getCategoryByIdHelper";
import { categoryPropertiesSchema } from "../helpers/schema";


let token;
let category;
let categoryId;

beforeAll(async () => {  
  categoryId = 121882;
  category = await getCategoryPrarmsById(categoryId);
});
describe('Get parameters supported by a category endpoint', () => {
    it("returns the list of parameters that are supported by the given category.", async () => {  
        const { parameters } = category.body;
        expect.extend(matchers);
        parameters.forEach((parameter) => {
          expect(parameter).toMatchSchema(categoryPropertiesSchema);
        });
      });
});
