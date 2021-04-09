export const categoryByIdSchema = {
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    parent: { type: ["null", "string"] },
    leaf: { type: "boolean" },
  },
};

export const categoryPropertiesSchema = {
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    type: { type: "string" },
    required: { type: "boolean" },
    requiredForProduct: { type: "boolean" },
    unit: { type: ["null", "string"] },
    options: { type: "object" },
  },
};
