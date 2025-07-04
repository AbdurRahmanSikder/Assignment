import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Link, useParams } from 'react-router-dom';
import { assets } from '../assets/assets.js';
const ProductDetails = () => {

    const {  products, currency, addToCart } = useAppContext();
    const { id } = useParams();
    const product = products.find((item) => item._id === id);
    const [thumbnail, setThumbnail] = useState(null);

    useEffect(() => {
        setThumbnail(product.image[0] ? product.image[0] : null);
    }, [product]);

    return product && (
        <div className="mt-12">
            <p>
                <Link to='/'>Home</Link> /
                <Link to='/products'> Products</Link> /
                <Link > {product.category}</Link> /
                <Link className="text-primary"> {product.name}</Link>
            </p>

            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    {/* Thumbnails */}
                    <div className="flex flex-col gap-3">
                        {product.image.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => setThumbnail(image)}
                                className={`border border-gray-300 rounded-md cursor-pointer p-1 transition hover:ring-2 hover:ring-primary ${thumbnail === image ? 'ring-2 ring-primary' : ''
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Main image */}
                    <div className="border border-gray-300 rounded-md overflow-hidden max-w-[400px] max-h-[400px] flex items-center justify-center p-4">
                        <img
                            src={thumbnail}
                            alt="Selected product"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>


                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{product.name}</h1>
                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: {currency}{product.price}</p>
                        <p className="text-2xl font-medium">MRP: {currency}{product.offerPrice}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    <div className="flex items-center mt-10 gap-4 text-base max-w-md">
                        <button onClick={() => addToCart(product._id)} className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductDetails