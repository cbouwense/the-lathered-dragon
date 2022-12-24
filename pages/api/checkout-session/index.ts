import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { CartProduct } from "utils/CartContext";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export type Cart = CartProduct[];

export type Item = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { cart }: { cart: Cart } = req.body;

    if (!cart) {
      return res
        .status(404)
        .json({ statusCode: 404, message: "Cart not found" });
    }

    const lineItems = cart.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            images: [item.image],
            name: item.name,
          },
          unit_amount: itemIdsToPrice[item.id] * 100, // to convert into cents
        },
        // description: item.description,
        quantity: item.quantity,
      };
    });

    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ["card"],
        mode: "payment",
        metadata: {
          images: cart[0].image,
        },
        line_items: lineItems,
        success_url: `${req.headers.origin}?status=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}?status=cancelled`,
      };
      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

const itemIdsToPrice: Record<number, number> = {
  1: 5,
  2: 5,
  3: 5,
  4: 5,
};
