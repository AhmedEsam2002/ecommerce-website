import { useContext } from "react";
import { CartContext } from "../Contexts/CartContextProvider/CartContextProvider";

export default function useCart() {
  const { cart, setCart } = useContext(CartContext);

  function addToCart(item: any) {
    setCart([...cart, item]);
  }

  function removeFromCart(itemId: string) {
    setCart(cart.filter((item) => item.id !== itemId));
  }
  function clearCart() {
    setCart([]);
  }

  return {
    cart,
    setCart,
    addToCart,
    cartCount: cart.length,
  };
}
