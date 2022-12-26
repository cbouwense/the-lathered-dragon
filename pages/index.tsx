import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
      <main className="py-0 bg-[#faf2e0]">
        <div className="z-0 fixed inset-0">
          <Image
            className="mx-auto w-full h-full object-cover object-center object-center"
            src="/logo.png" 
            width={9001} 
            height={9001} 
            alt="The Lathered Dragon logo" 
          />
        </div>
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
