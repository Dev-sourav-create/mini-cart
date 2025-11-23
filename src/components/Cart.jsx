// src/components/Cart.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/cartSlice";
const Cart = () => {
  const reduxcart = useSelector((state) => state.cart.item);
  const total = reduxcart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const dispatch = useDispatch();
  console.log(reduxcart);

  return (
    <div className="border p-4 rounded-xl min-w-xs shadow-md ">
      <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>

      {reduxcart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="space-y-2">
          {reduxcart.map((item, idx) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>{item.name}</span>
              <div className="flex items-center gap-2">
                <span>${item.price}</span> <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex justify-between font-semibold">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;
