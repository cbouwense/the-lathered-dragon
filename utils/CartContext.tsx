import { Item } from "@/components/Card/Card";
import { createContext, useState } from "react";

const items: Item[] = [
  {
    id: 1,
    name: "Coffee",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "Rich, dark, and with a hint of vanilla. This scented bar is made with real, fresh brewed coffee.",
    quantity: 1,
  },
  {
    id: 2,
    name: "Lavender",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "A calming scent that is perfect for unwinding after a long day. This scent relaxes the mind and body.",
    quantity: 1,
  },
  {
    id: 3,
    name: "Spruce",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "Spruce up your shower with this fresh, woodsy scent. This scent is perfect for the outdoorsy type or the holidays.",
    quantity: 1,
  },
  {
    id: 4,
    name: "Lemon Poppyseed",
    image:
      "https://as1.ftcdn.net/v2/jpg/00/84/18/64/1000_F_84186401_fglD8eOBC8xShCT20U0Y8lRtzc7v6ZLc.jpg",
    price: 5,
    description:
      "A fresh splash of citrus and some real poppyseeds for exfoliation.",
    quantity: 1,
  },
];

export type CartContextType = {
  cartProducts: Item[];
  getProductQuantity: (i: number) => number;
  addOneToCart: (i: number) => void;
  removeOneFromCart: (i: number) => void;
  deleteFromCart: (i: number) => void;
  getTotalCost: (i: number) => number;
  getItemCount: () => number;
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

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  };

  const addOneToCart = (id: number) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        items.find((i) => i.id === id) as Item,
      ]);
    } else {
      // product is in cart
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity + 1 } // if statement is true
              : product // if statement is false
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
            product.id === id // if condition
              ? { ...product, quantity: product.quantity - 1 } // if statement is true
              : product // if statement is false
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
      totalCost += (productData?.price ?? 0) * cartItem.quantity;
    });
    return totalCost;
  };

  const getItemCount = () => {
    return cartProducts.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
  }

  const contextValue = {
    cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    getItemCount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
