import { Item } from "data";
import Image from "next/image";
import { MouseEventHandler, useContext } from "react";
import { CartContext } from "utils/CartContext";

export type CardProps = { item: Item };

const Card = ({ item }: CardProps) => {
  const cart = useContext(CartContext);

  const productQuantity = cart?.getProductQuantity(item.id) ?? 0;
  const daysUntilBackInStock = cart?.getDaysUntilBackInStock(item.id);

  const someBarsAreInStock =
    item.backInStock === undefined && item.leftInStock > 0;
  const someBarsAreCuring =
    !someBarsAreInStock &&
    daysUntilBackInStock !== undefined &&
    daysUntilBackInStock > 0;
  const noBarsCuringOrInStock =
    !someBarsAreCuring &&
    item.backInStock === undefined &&
    item.leftInStock === 0;
  const decrementButtonDisabled = productQuantity === 0;
  const incrementButtonDisabled = productQuantity >= item.leftInStock;
  const buttonStyles = `p-1 rounded-full ring-1 ring-gray-200 bg-gradient-radial from-dark-tan to-tan`;

  const decreaseQuantity: MouseEventHandler<HTMLButtonElement> = () => {
    cart?.removeOneFromCart(item.id);
  };

  const increaseQuantity: MouseEventHandler<HTMLButtonElement> = () => {
    if (cart === null) return;
    if (cart.getProductQuantity(item.id) >= item.leftInStock) return;
    cart.addOneToCart(item.id);
  };

  const imageSource = item.image ? `/${item.image}` : "/logo.png";

  return (
    <div className="mt-8 bg-dark-tan shadow-2xl rounded-lg ring-2 ring-tan max-w-sm w-full mx-auto relative">
      <Image
        src={imageSource}
        alt={item.name}
        height="300"
        width="300"
        className="rounded-tl-lg rounded-tr-lg object-cover w-full"
      />

      <div className="flex flex-col justify-between px-4 py-3">
        <div className="flex items-center justify-between">
          <h5 className="text-2xl text-dark-slate font-semibold">
            {item.name}
          </h5>
        </div>
        <p className="text-md text-dark-slate">{item.description}</p>
        <div className="flex items-center justify-between mt-3">
          <h6 className="text-3xl font-bold text-dark-slate">${item.price}</h6>
          {someBarsAreInStock && (
            <div className="flex flex-col items-end gap-2">
              <p className="text-dark-slate text-xl">
                {item.leftInStock} bars in stock!
              </p>
              <div className="flex items-center space-x-3">
                <button
                  disabled={decrementButtonDisabled}
                  className={
                    decrementButtonDisabled
                      ? `${buttonStyles} cursor-not-allowed`
                      : buttonStyles
                  }
                  onClick={decreaseQuantity}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-dark-slate"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <span className="quantity text-xl">{productQuantity}</span>
                <button
                  disabled={incrementButtonDisabled}
                  className={
                    incrementButtonDisabled
                      ? `${buttonStyles} cursor-not-allowed`
                      : buttonStyles
                  }
                  onClick={increaseQuantity}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-dark-slate"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
          {someBarsAreCuring && (
            <p className="text-dark-slate text-xl">
              More available in {daysUntilBackInStock} days!
            </p>
          )}
          {noBarsCuringOrInStock && (
            <p className="text-dark-slate text-xl">Sorry, sold out!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
