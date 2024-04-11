import joi from 'joi';

// Define common schemas for shared attributes
const stringSchema = joi.string().min(2).max(255);
const floatSchema = joi.number().min(0);
const booleanSchema = joi.boolean();

// Validation schema for Product creation
export const createProductSchema = joi.object({
  name: stringSchema.required(),
  price: floatSchema.required(),
  UOM: stringSchema.required(),
  Mesc: stringSchema.required(),
  isTemp: booleanSchema.required(),
  gallonPrice: floatSchema.required(),
  usageFunction: stringSchema.required(),
  supplierId: joi.number().required(),
  agreementId: joi.number().required(),
});

// Validation schema for Product update
export const updateProductSchema = joi.object({
  productId :  joi.number().required(),
  name: stringSchema,
  price: floatSchema,
  UOM: stringSchema,
  Mesc: stringSchema,
  isTemp: booleanSchema,
  gallonPrice: floatSchema,
  usageFunction: stringSchema,
  supplierId: joi.number(),
  agreementId: joi.number(),
});

// Validation schema for getting Product details
export const getProductSchema = joi.object({
  productId :  joi.number().required(),
});

// Validation schema for deleting Product
export const deleteProductSchema = joi.object({
  productId :  joi.number().required(),
});
