import Cart from "../model/cartModel.js";

export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body;

    const cart = new Cart({ cartItems });
    await cart.save();

    return res.json({ success: true, message: "Cart created", cart });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
