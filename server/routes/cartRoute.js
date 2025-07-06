import express from 'express';
import { updateCart } from '../controller/cartController.js';
const cartRoute = express.Router();

cartRoute.post('/update', updateCart);

export default cartRoute;