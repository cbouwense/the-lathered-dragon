import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import { getStripe } from "utils/getStripe";
import { postRequest } from "utils/postRequest";

export type Item = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
};

export type CardProps = {
  item: Item;
};

const Card = ({ item: itemProp }: CardProps) => {
  const [item, setItem] = useState(itemProp);
  const [loading, setLoading] = useState(false);

  const decreaseQuantity: MouseEventHandler<HTMLButtonElement> = () => {
    setItem((item) => ({
      ...item,
      quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
    }));
  };

  const increaseQuantity: MouseEventHandler<HTMLButtonElement> = () => {
    setItem((item) => ({ ...item, quantity: item.quantity + 1 }));
  };

  const checkout = async () => {
    setLoading(true);

    const response = await postRequest("/api/checkout-session", { item });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: response.id,
    });
    console.warn(error.message);
    setLoading(false);
  };

  return (
    <div className="mt-8 bg-white shadow-xl rounded-lg ring-1 ring-gray-100 max-w-sm mx-auto relative">
      <Image
        src={item.image}
        alt={item.name}
        height="300"
        width="300"
        className="rounded-tl-lg rounded-tr-lg object-cover w-full"
      />

      <div className="px-4 py-3">
        <h5 className="text-xl font-semibold">{item.name}</h5>
        <p className="text-sm text-gray-400">{item.description}</p>
        <div className="flex items-center justify-between mt-3">
          <h6 className="text-3xl font-bold">${item.price * item.quantity}</h6>
          <div className="flex items-center space-x-3">
            <button
              className="decrease__quantity p-1 rounded-full ring-1 ring-gray-200"
              onClick={decreaseQuantity}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
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

            <span className="quantity">{item.quantity}</span>

            <button
              className="increase__quantity p-1 rounded-full ring-1 ring-gray-200"
              onClick={increaseQuantity}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
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

        {loading ? (
          <button
            type="button"
            className="mt-6 rounded-md py-2 px-3 w-full text-white shadow-lg bg-blue-500 shadow-blue-200 uppercase text-sm hover:ring-1 hover:ring-blue-500"
          >
            Processing...
          </button>
        ) : (
          <button
            type="button"
            className="mt-6 rounded-md py-2 px-3 w-full text-white shadow-lg bg-blue-500 shadow-blue-200 uppercase text-sm hover:ring-1 hover:ring-blue-500"
            onClick={checkout}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
