import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import CheckoutCancelled from "@/components/CheckoutCancelled/CheckoutCancelled";
import CheckoutSuccess from "@/components/CheckoutSuccess/CheckoutSuccess";
import Card, { Item } from "@/components/Card/Card";
import { useContext, useState } from "react";
import { postRequest } from "utils/postRequest";
import { getStripe } from "utils/getStripe";
import { CartContext } from "utils/CartContext";
import Image from "next/image";

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

const Home: NextPage = () => {
  const cart = useContext(CartContext);
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);

  const checkout = async () => {
    setLoading(true);

    console.log(cart);
    const response = await postRequest("/api/checkout-session", {
      cart: cart?.cartProducts,
    });

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
    <div>
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-black-400">Coming Soon!</h2>
        <p className="text-gray-400 mt-4">
          In the meantime, feel free to email order@thelathereddragon.com to get
          some soap!
        </p>
      </div>
      <Image
        src="/logo.png"
        width={4500}
        height={4500}
        alt="The Lathered Dragon logo"
        className="mx-auto w-1/2 h-1/2"
      />
    </div>
  );
};

export default Home;
