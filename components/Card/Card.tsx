import { Item } from "@/pages/data";
import Image from "next/image";
import { MouseEventHandler, useContext } from "react";
import { CartContext } from "utils/CartContext";

export type CardProps = { item: Item };

const Card = ({ item }: CardProps) => {
  const cart = useContext(CartContext);

  const productQuantity = cart?.getProductQuantity(item.id);

  const decreaseQuantity: MouseEventHandler<HTMLButtonElement> = () => {
    cart?.removeOneFromCart(item.id);
  };

  const increaseQuantity: MouseEventHandler<HTMLButtonElement> = () => {
    if (cart === null) return;
    if (cart.getProductQuantity(item.id) >= item.leftInStock) return;
    cart.addOneToCart(item.id);
  };

  return (
    <div className="mt-8 bg-dark-tan shadow-2xl rounded-lg ring-2 ring-dark-tan max-w-sm mx-auto relative">
      <Image
        src="/logo2.png"
        alt={item.name}
        height="300"
        width="300"
        className="rounded-tl-lg rounded-tr-lg object-cover w-full"
      />

      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <h5 className="text-2xl text-dark-slate font-semibold">{item.name}</h5>
          <p className="text-dark-slate">{item.leftInStock} left in stock</p>
        </div>
        <p className="text-md text-dark-slate">{item.description}</p>
        <div className="flex items-center justify-between mt-3">
          <h6 className="text-3xl font-bold text-dark-slate">${item.price}</h6>
          <div className="flex items-center space-x-3">
            <button
              className="decrease__quantity p-1 rounded-full ring-1 ring-gray-200"
              onClick={decreaseQuantity}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-dark-slate"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <span className="quantity text-xl">{productQuantity}</span>
            <button
              className="increase__quantity p-1 rounded-full ring-1 ring-gray-200"
              onClick={increaseQuantity}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-dark-slate"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
