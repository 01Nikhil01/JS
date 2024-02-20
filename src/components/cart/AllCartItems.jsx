import  ShoppingCartCard from "./ShoppingCartCard";
import { useShoppingContext } from "../../context/useShoppingContext";

const AllCartItems = () => {
  const { cartItems } = useShoppingContext();
  console.log(cartItems);

  return (
    <>
      {cartItems.map((item) => {
        const dish = item.dish;
        return dish && <ShoppingCartCard key={item.id} dish={dish} />;
      })}
    </>
  );
};

export default AllCartItems;
