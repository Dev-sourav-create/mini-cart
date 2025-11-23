import ProductCard from "../components/ProductCard";

import { products } from "../data/product";
import { useSelector } from "react-redux";

export const ProductPage = () => {
  const reduxcart = useSelector((state) => state.cart.item);
  return (
    <div className="flex flex-col gap-6 justify-center ">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};
