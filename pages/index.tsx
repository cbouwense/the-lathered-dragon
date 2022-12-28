import type { NextPage } from "next";
import Head from "next/head";
import Card from "@/components/Card/Card";
import { items } from "data";
import Navbar from "@/components/Navbar/Navbar";
import VideoBanner from "@/components/VideoBanner/VideoBanner";

import styles from './index.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Lathered Dragon</title>
        <meta name="description" content="Soap for the modern reptile." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-0 bg-gradient-to-t from-tan to-dark-tan">
        <Navbar />
        <VideoBanner videoNumber={3} />
        <div className={`${styles.testimonials} relative w-full h-[65vh]`}>
          <div className="bg-dark-slate w-full h-full absolute z-10 -skew-y-6 flex justify-center" />
          <div className="container mx-auto h-full flex flex-col items-center justify-center gap-6 p-6">
            <h1 className="text-3xl lg:text-5xl font-semibold text-white z-20">The talk of the town</h1>
            <p className="text-xl lg:text-3xl font-semibold text-white z-20">"FABULOUS! I have itchy dry skin when it gets cold and this actually helps." - Jen</p>
            <p className="text-xl lg:text-3xl font-semibold text-white z-20">"We absolutely love it. I will definitely be ordering it again." - Trent</p>
          </div>
        </div>
        <br />
        <div className={`${styles.ingredients} relative w-full h-[65vh]`}>
          <div className="bg-dark-slate w-full h-full absolute z-10 -skew-y-6 flex justify-center" />
          <div className="container mx-auto mt-6 w-full h-full flex flex-col items-center justify-center gap-1 p-6">
            <h1 className="text-3xl lg:text-5xl font-semibold text-white z-20 mb-10">Delightfully real ingredients</h1>
            <p className="text-xl lg:text-3xl font-semibold text-white z-20">Shea butter</p>
            <p className="text-xl lg:text-3xl font-semibold text-white z-20">Cocoa butter</p>
            <p className="text-xl lg:text-3xl font-semibold text-white z-20">Olive oil</p>
            <p className="text-xl lg:text-3xl font-semibold text-white z-20">Coconut oil</p>
            <p className="text-xl lg:text-3xl font-semibold text-white z-20">Avocado oil</p>
            <p className="text-xl lg:text-3xl font-semibold text-white z-20">Castor oil</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-16 box-border mt-[30vh]">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
