import { useContext } from "react";
import { CartContext } from "../Contexts/CartContextProvider/CartContextProvider";

export default function useCart() {
  const { cart, setCart } = useContext(CartContext);

  function addToCart(item: any) {
    setCart([...cart, item]);
  }

  // TODO: Implement these functions when cart functionality is fully developed
  // function removeFromCart(itemId: string) {
  //   setCart(cart.filter((item) => item.id !== itemId));
  // }
  // function clearCart() {
  //   setCart([]);
  // }

  return {
    cart,
    setCart,
    addToCart,
    cartCount: cart.length,
  };
}
