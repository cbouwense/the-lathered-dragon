import type { NextPage } from "next";
import Head from "next/head";
import Card from "@/components/Card/Card";
import { items } from "data";
import Navbar from "@/components/Navbar/Navbar";
import VideoBanner from "@/components/VideoBanner/VideoBanner";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Lathered Dragon</title>
        <meta name="description" content="Soap for the modern reptile." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-0 bg-tan">
        <Navbar />
        <VideoBanner />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-16 box-border">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
