import { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import CheckoutCancelled from "@/components/CheckoutCancelled/CheckoutCancelled";
import CheckoutSuccess from "@/components/CheckoutSuccess/CheckoutSuccess";
import Card, { Item } from "@/components/Card/Card";

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
  const { query } = useRouter();

  return (
    <div>
      <Head>
        <title>The Lathered Dragon</title>
        <meta name="description" content="Soap for the modern reptile." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-semibold text-center mt-10 text-gray-400">
          The Lathered Dragon
        </h1>
        {query.status === "cancelled" && <CheckoutCancelled />}
        {query.status === "success" && <CheckoutSuccess />}
        <div className="grid grid-cols-4 gap-4 mt-10">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
