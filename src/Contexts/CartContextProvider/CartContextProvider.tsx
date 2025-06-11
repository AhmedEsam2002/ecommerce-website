import axios from "axios";
import React, { createContext } from "react";
import useAuth from "../../Hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface CartContextType {
  cartData: any;
  isLoadingCart: boolean;
  isErrorCart: boolean;
  errorCart: unknown;
  cartCount: number;
  handleAddToCart: (productId: number) => void;
  handleUpdateProduct: (params: { productId: string; count: number }) => void;
  handleRemoveFromCart: (productId: string) => void;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token } = useAuth();
  console.log("From context", token);
  const queryClient = useQueryClient();

  // --------- 1. Add to Cart ---------
  const addToCart = (productId: number) => {
    return axios.post(
      "https://ecommerce.routemisr.com/api/v1/cart",
      { productId },
      {
        headers: {
          token,
        },
      }
    );
  };

  const cartMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: (response) => {
      console.log("✅ Product added to cart:", response.data);
      queryClient.invalidateQueries({ queryKey: ["Cart"] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.error(
          "❌ Error adding product:",
          error.response?.data?.message || error.message
        );
      } else {
        console.error("❌ Unknown error:", error);
      }
    },
  });

  function handleAddToCart(productId: number) {
    cartMutation.mutate(productId);
  }

  // --------- 2. Get Cart ---------
  const getCart = () =>
    axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
      headers: { token },
    });

  const {
    data: cartData,
    isLoading: isLoadingCart,
    isError: isErrorCart,
    error: errorCart,
  } = useQuery({
    queryKey: ["Cart"],
    queryFn: getCart,
    refetchInterval: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 3,
    retryDelay: 1000,
    select: (res) => res.data.data,
  });

  // --------- 3. Update Quantity ---------
  const updateProductQuantity = ({
    productId,
    count,
  }: {
    productId: string;
    count: number;
  }) => {
    return axios.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { count },
      {
        headers: { token },
      }
    );
  };

  const updateCartMutation = useMutation({
    mutationFn: updateProductQuantity,
    onSuccess: (response) => {
      console.log("✅ Product updated:", response.data);
      queryClient.invalidateQueries({ queryKey: ["Cart"] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.error(
          "❌ Error updating product:",
          error.response?.data?.message || error.message
        );
      } else {
        console.error("❌ Unknown error:", error);
      }
    },
  });

  function handleUpdateProduct({
    productId,
    count,
  }: {
    productId: string;
    count: number;
  }) {
    updateCartMutation.mutate({ productId, count });
  }

  // --------- 4. Remove from Cart ---------
  const removeFromCart = (productId: string) =>
    axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      headers: { token },
    });

  const deleteCartMutation = useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      console.log("✅ Product removed from cart");
      queryClient.invalidateQueries({ queryKey: ["Cart"] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.error(
          "❌ Error removing product:",
          error.response?.data?.message || error.message
        );
      } else {
        console.error("❌ Unknown error:", error);
      }
    },
  });

  function handleRemoveFromCart(productId: string) {
    deleteCartMutation.mutate(productId);
  }

  return (
    <CartContext.Provider
      value={{
        cartData,
        isLoadingCart,
        isErrorCart,
        errorCart,
        cartCount: cartData?.products?.length || 0,
        handleAddToCart,
        handleUpdateProduct,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
