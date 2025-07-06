import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast';
// import { products as prod } from "../assets/assets";
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [showCheckout, setShowCheckout] = useState();

    const currency = '৳';

    //fetch all products

    const fetchProducts = async () => {
        try {
            const { data } = await axios("/product/list");
            if (data.success)
                setProducts(data.products);
            else
                console.log(data.message);
        }
        catch (error) {
            toast.error(data.message);
        }
    }
    const fetchCartItems = async () => {
        const savedCart = localStorage.getItem('cartItems');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }

    //Add product to cart

    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId])
            cartData[itemId] += 1;
        else cartData[itemId] = 1;
        setCartItems(cartData);
        toast.success("Added to Cart");
    }

    //Get cart item count
    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    }

    // Get cart Total item
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);

            if (cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items]
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }

    // Remove product from cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0)
                delete cartData[itemId];
        }
        toast.success("Remove From Cart");
        setCartItems(cartData);

    }
    //update cart item
    useEffect(() => {
        const updateCart = async () => {
            try {
                console.log("Cart updated, syncing with backend", cartItems);
                const { data } = await axios.post('/cart/update', { cartItems });
                console.log(data);
                if (!data.success) {
                    toast.error(data.message);
                }
                else
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }
            catch (error) {
                toast.error(error.message);
            }
        }
        updateCart();
    }, [cartItems]);


    useEffect(() => {
        fetchProducts();
        fetchCartItems();
    }, [])

    const value = { navigate, products, setProducts, currency, cartItems, addToCart, removeFromCart, getCartAmount, getCartCount, fetchProducts, setCartItems, showCheckout, setShowCheckout, axios };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
}
