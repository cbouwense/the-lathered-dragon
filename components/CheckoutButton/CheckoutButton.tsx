import { useContext, useState } from "react";
import { CartContext } from "utils/CartContext";
import { getStripe } from "utils/getStripe";
import { postRequest } from "utils/postRequest";

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);
  const cart = useContext(CartContext);

  const checkout = async () => {
    if (cart?.cartProducts.length === 0 || loading) return;

    setLoading(true);

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
      className="text-dark-blue bg-dark-tan focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
    >
      <span>Cart ({cart?.getTotalItemCount()})</span>
    </button>
  )
};

export default CheckoutButton;
