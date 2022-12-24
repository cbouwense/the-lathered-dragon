import "@/styles/global.css";
import type { AppProps } from "next/app";
import CartProvider from "utils/CartContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
