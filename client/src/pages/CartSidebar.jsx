import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets';


const CartSidebar = ({ isOpen, onClose }) => {
    const { products, currency, cartItems, removeFromCart, addToCart,  getCartAmount , showCheckout, setShowCheckout} = useAppContext();
    const [count, setCount] = useState(0);
    const [cartArray, setCartArray] = useState([]);
    const getCart = () => {
        let tempArray = [];
        for (const key in cartItems) {
            const product = products.find((item) => item._id === key);
            if (product) {
                product.quantity = cartItems[key];
                tempArray.push(product);
            }
        }
        setCartArray(tempArray);
    }

    useEffect(() => {
        if (products &&  products.length > 0 && cartItems) {
            getCart();
        }
    }, [products, cartItems])



    if (!products || !Array.isArray(products) || products.length === 0 || !cartItems) return null;

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-[90%] sm:w-[480px] bg-white shadow-lg z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between p-4 border-b">
                    <h1 className="text-2xl font-semibold">Your Cart</h1>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl hover:cursor-pointer">
                        <img className='' src={assets.remove_icon} alt="" />
                    </button>
                </div>

                <div className="overflow-y-auto h-[calc(100vh-64px)] p-4 flex flex-col justify-between">
                    <div>
                        {cartArray.length === 0 ? (
                            <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
                        ) : (
                            <>
                                {cartArray.map((product, index) => (
                                    <div key={index} className="grid grid-cols-[2fr_1fr] items-center text-sm md:text-base font-medium py-3 ">
                                        <div className="flex items-center md:gap-4 gap-2">
                                            <div
                                                onClick={() => {
                                                    navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
                                                    scrollTo(0, 0);
                                                }}
                                                className="cursor-pointer w-16 h-16 border border-gray-300 rounded overflow-hidden"
                                            >
                                                <img src={product.image[0]} alt={product.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-semibold">{product.name}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span>Qty:</span>
                                                    <div className="flex items-center border rounded px-2 py-1">
                                                        <button
                                                           onClick={() => setCount(() => removeFromCart(product._id))}
                                                            className="px-2 text-gray-600 hover:text-black text-lg"
                                                        >
                                                            −
                                                        </button>
                                                        <span className="px-2">{product.quantity}</span>
                                                        <button
                                                            onClick={() => setCount(addToCart(product._id))}
                                                            className="px-2 text-gray-600 hover:text-black text-lg"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <p className="text-center">{currency}{product.offerPrice * product.quantity}</p>

                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-100 p-4 mt-6 rounded">
                        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                        <div className="flex justify-between text-sm mb-1">
                            <span>Price</span>
                            <span>{currency}{getCartAmount()}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-1">
                            <span>Shipping</span>
                            <span className="text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Tax (2%)</span>
                            <span>{currency}{(getCartAmount() * 0.02).toFixed(2)}</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-semibold text-base">
                            <span>Total</span>
                            <span>{currency}{(getCartAmount() * 1.02).toFixed(2)}</span>
                        </div>

                        <select
                            onChange={e => setPaymentOption(e.target.value)}
                            className="w-full mt-4 border border-gray-300 bg-white px-2 py-2 text-sm"
                        >
                            <option value="COD">Cash On Delivery</option>
                            <option value="Online">Online Payment</option>
                        </select>

                        <button onClick={() => setShowCheckout(true)}
                            className="w-full mt-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartSidebar;
