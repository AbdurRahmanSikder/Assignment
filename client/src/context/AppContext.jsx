import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { products as prod } from "../assets/assets";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState();
    const [showCheckout, setShowCheckout] = useState();

    const currency = '৳';

    //fetch all products

    const fetchProducts = async () => {
        try {
            setProducts(prod);
        }
        catch (error) {
            toast.error(data.message);
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




    useEffect(() => {
        fetchProducts();
    }, [])

    const value = { navigate, products, setProducts, currency, cartItems, addToCart, removeFromCart, getCartAmount, getCartCount,  fetchProducts, setCartItems, showCheckout, setShowCheckout };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
}
