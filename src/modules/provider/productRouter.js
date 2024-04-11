import express from 'express';
import * as productController from './productController.js';
import { validate } from '../middlewares/joiValidationMiddlware.js';
import {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from './productValidation.js';
import { multiFileUpload } from '../middlewares/fileUpload.js';
const router = express.Router();
router
  .route('/')
  .get(productController.getAllProducts)
  .post(
    multiFileUpload(
      [
        { name: 'imageCover', maxCount: 1 },
        { name: 'images', maxCount: 10 },
      ],
      'product'
    ),
    validate(createProductSchema),
    productController.createProduct
  );
router
  .route('/:id')
  .delete(validate(deleteProductSchema), productController.deleteProduct)
  .patch(validate(updateProductSchema), productController.updateProduct)
  .get(validate(getProductSchema), productController.getProduct);

export default router;
