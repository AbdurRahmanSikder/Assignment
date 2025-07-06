import { v2 as cloudinary } from "cloudinary"
import Product from "../model/productModel.js";
//add product
export const addProduct = async (req, res) => {
    try {
        let productData = JSON.parse(req.body.productData);
        // console.log(productData);
        const images = req.files;
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' })
                return result.secure_url;
            })
        )
        const newProduct = await Product.create({ ...productData, image: imagesUrl });
        return res.json({ success: true, message: "Product Added", product: newProduct });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

//product list
export const productList = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.json({ success: true, products });
    }
    catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

//find product by id
export const productById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        return res.json({ success: true, product });
    }
    catch (error) {
        res.json({ success: false, message: error.message });
    }
}

