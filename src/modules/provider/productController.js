import productModel from '../../../database/models/productModel.js';
import { ApiFeatures } from '../../../utils/ApiFeature.js';
import { AppErr } from '../../../utils/AppError.js';
import { catchAsync } from '../../../utils/catchAsync.js';
import * as factory from '../handlers/factoryhandler.js';
import slugify from 'slugify';

export const createProduct = catchAsync(async (req, res, next) => {
  req.body.slug = slugify(req.body.name);
  //req.body.slug = slugify(req.body.name);
  req.body.imageCover = req.files.imageCover[0].filename;
  req.body.images = req.files.images.map((el) => el.filename);
  const result = new productModel(req.body);
  await result.save();
  res.json({ status: 'success', data: { result } });
});

export const getAllProducts = catchAsync(async (req, res, next) => {
  const apiFeatures = new ApiFeatures(productModel.find(), req.query)
    .Find()
    .Paginate()
    .Sort()
    .Search()
    .Select();
  const result = await apiFeatures.query;
  !result.length && next(new AppErr('Product not found', 404));
  result.length &&
    res.json({ status: 'success', length: result.length, data: { result } });
});

export const getProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await productModel.findById(id);
  !result && next(new AppErr('Product not found', 404));
  result && res.json({ status: 'success', data: { result } });
});

export const updateProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  if (req.body.title) req.body.slug = slugify(req.body.title);
  const result = await productModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  !result && next(new AppErr('Product not found', 404));
  result && res.json({ status: 'success', data: { result } });
});

export const deleteProduct = factory.deleteOne(productModel);
