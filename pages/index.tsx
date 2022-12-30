import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "@/components/Card/Card";
import { items } from "data";
import Navbar from "@/components/Navbar/Navbar";

import styles from './index.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Lathered Dragon</title>
        <meta name="description" content="Soap for the modern reptile." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-0 bg-gradient-radial from-tan to-dark-tan">
        <Navbar />
        <Image src="/logo2.png" className="max-h-[80vh] w-auto" alt="The Lathered Dragon" width={1080} height={720} />
        <div className={`${styles.testimonials} relative w-full h-[65vh]`}>
          <div className="bg-gradient-radial from-dark-slate to-light-black w-full h-full absolute z-10 -skew-y-6 flex justify-center" />
          <div className="container mx-auto h-full flex flex-col items-center justify-evenly p-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white z-20">The talk of the town</h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">"We absolutely love it. I will definitely be ordering it again." - Trent</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">"FABULOUS! The moisturizing properties are superior. Better than any other soap." - Jen</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">"It's good s***." - Travis</p>
          </div>
        </div>
        <br />
        <div className={`${styles.ingredients} relative w-full h-[65vh]`}>
          <div className="bg-gradient-radial from-dark-slate to-light-black w-full h-full absolute z-10 -skew-y-6 flex justify-center" />
          <div className="container mx-auto w-full h-full flex flex-col items-center justify-evenly p-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white z-20 mb-10">Delightfully real ingredients</h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">Shea butter</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">Cocoa butter</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">Olive oil</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">Coconut oil</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">Avocado oil</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-20">Castor oil</p>
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
