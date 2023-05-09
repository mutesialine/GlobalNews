import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full text-gray-900">
      <div className="py-8 px-4 md:px-32 flex gap-x-6 justify-between border-b-2 border-gray-900">
        <Link
          to="/"
          className="text-lg md:text-4xl font-bold italic hover:underline"
        >
          GNews
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
