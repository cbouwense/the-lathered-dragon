import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  // Redirect to our Etsy shop.
  useEffect(() => {
    window.location.href = 'https://www.etsy.com/shop/LatheredDragonSoapCo';
  }, []);

  return (<p>Redirecting to Etsy...</p>);
};

export default Home;
