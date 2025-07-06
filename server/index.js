import express from "express";
import connectDB from "./configs/connectDB.js";
import cors from 'cors';
import 'dotenv/config'
import cartRoute from "./routes/cartRoute.js";
import productRouter from "./routes/productRoute.js";
import connectCloudinary from "./configs/cloudinary.js";

const app = express();
const port = process.env.PORT || 5000;

//CORS FIRST — BEFORE ANY ROUTES
const allowedOrigins = ['http://localhost:5173'];
app.use(cors({ origin: allowedOrigins, credentials: true }));

//JSON parser
app.use(express.json());

//Connect DB and Cloudinary
await connectDB();
await connectCloudinary();

//Test route
app.get('/', (req, res) => res.send("Server is running"));

//Use routes
app.use('/cart', cartRoute);
app.use('/product', productRouter);

//Start server
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
