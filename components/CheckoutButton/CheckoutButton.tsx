import { useContext, useState } from "react";
import { CartContext } from "utils/CartContext";
import { getStripe } from "utils/getStripe";
import { postRequest } from "utils/postRequest";

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);
  const cart = useContext(CartContext);

  const checkout = async () => {
    if (cart?.cartProducts.length === 0) return;
    if (loading) return;

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
    <button
      onClick={checkout}
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <span>Cart ({cart?.cartProducts.length ?? 0})</span>
    </button>
  )
};

export default CheckoutButton;
