import express from 'express';
import { upload } from '../configs/multer.js';
import { addProduct, productById, productList } from '../controller/productController.js';

const productRouter = express.Router();

productRouter.post('/add', upload.array('images'), addProduct);
productRouter.get('/list', productList);
productRouter.get('/:id', productById);

export default productRouter;
