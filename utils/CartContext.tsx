import { Item, items } from "data";
import { createContext, useState } from "react";

export type CartContextType = {
  cartProducts: Item[];
  getProductQuantity: (i: number) => number;
  addOneToCart: (i: number) => void;
  removeOneFromCart: (i: number) => void;
  deleteFromCart: (i: number) => void;
  getTotalCost: (i: number) => number;
  getTotalItemCount: () => number;
};

export const CartContext = createContext<CartContextType | null>(null);

export type CartProviderParams = {
  children: JSX.Element | null;
};

export const CartProvider = ({ children }: CartProviderParams) => {
  const [cartProducts, setCartProducts] = useState<Item[]>([]);

  const getProductQuantity = (id: number) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    return quantity ?? 0;
  };

  const addOneToCart = (id: number) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        items.find((i) => i.id === id) as Item,
      ]);
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id
              ? { ...product, quantity: (product.quantity ?? 0) + 1 }
              : product
        )
      );
    }
  };

  const removeOneFromCart = (id: number) => {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id
              ? { ...product, quantity: (product.quantity ?? 0) - 1 }
              : product
        )
      );
    }
  };

  const deleteFromCart = (id: number) => {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = items.find((i) => i.id === cartItem.id);
      totalCost += (productData?.price ?? 0) * (cartItem.quantity ?? 0);
    });
    return totalCost;
  };

  const getTotalItemCount = () => {
    return cartProducts.reduce((acc, cartItem) => {
      return acc + (cartItem.quantity ?? 0);
    }, 0);
  }

  const contextValue = {
    cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    getTotalItemCount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
