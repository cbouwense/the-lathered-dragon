import type { NextPage } from "next";
import Head from "next/head";
import Card from "@/components/Card/Card";
import { items } from "./data";
import Navbar from "@/components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Lathered Dragon</title>
        <meta name="description" content="Soap for the modern reptile." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-0 bg-tan">
        <div className="z-100">
          <Navbar />
          <div className="grid grid-cols-2 md:grid-rows-4 gap-4 mt-10">
            {items.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
