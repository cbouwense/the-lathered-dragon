import CheckoutButton from "../CheckoutButton/CheckoutButton";

const Navbar = () => {
  return (
    <nav className="bg-dark-slate px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            The Lathered Dragon
          </span>
        </a>
        <CheckoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
