import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
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
