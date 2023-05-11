// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full text-gray-900">
      <div className="flex justify-between px-4 py-8 border-b-2 border-gray-900 md:px-32 gap-x-6">
        <a
          href="/"
          className="text-lg italic font-bold md:text-4xl hover:underline"
        >
          GNews
        </a>
      </div>
    </div>
  );
};

export default Navbar;
