import Navbar from "@/components/Navbar/Navbar";
import { NextPage } from "next";

const ConfirmationPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <main className="text-center py-5 bg-tan h-screen">
        <h2 className="text-2xl font-semibold text-black-400">
          Thank you for your order!
        </h2>
        <p className="text-gray-800 mt-4">
          Please check your email for a confirmation of your order. If you have
          any questions, please email order@thelathereddragon.com.
        </p>
      </main>
    </div>
  );
};

export default ConfirmationPage;
