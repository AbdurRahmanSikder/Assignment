import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  cartItems: {
    type: Object,
    required: true
  }
});
const Cart = mongoose.models.cart || mongoose.model("cart",cartSchema);

export default Cart;