import Cart from "./components/Cart";
import { ProductPage } from "./Page/ProductPage";

const App = () => {
  return (
    <div className="flex justify-center gap-10 p-10">
      <ProductPage />
      <Cart />
    </div>
  );
};

export default App;
