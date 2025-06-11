import { createContext, type ReactNode, useState } from "react";

export const CartContext = createContext<{
  cart: any[];
  setCart: (cart: any[]) => void;
}>({
  cart: [],
  setCart: () => {},
});

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<any[]>([]);

  console.log("Cart:", cart);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
