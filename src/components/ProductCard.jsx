import { useDispatch, useSelector } from "react-redux";
import { addtoCart, removeItem } from "../features/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.item);
  const existingitem = cart.find((item) => item.id === product.id);

  return (
    <div className="border rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition flex gap-4 w-full max-w-lg">
      <div className="w-28 h-28 overflow-hidden rounded-lg border">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
        </div>

        <div className="flex justify-end ">
          {existingitem ? (
            <div className="flex   rounded-md justify-between border w-26 border-gray-300">
              <button
                onClick={() => dispatch(removeItem(product.id))}
                className="py-1 px-3"
              >
                -
              </button>
              <span className="py-1">{existingitem.quantity}</span>
              <button
                onClick={() => dispatch(addtoCart(product))}
                className="py-1 px-3"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => dispatch(addtoCart(product))}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
