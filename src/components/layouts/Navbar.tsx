import { BsChevronDown } from "react-icons/bs";
import Categories from "../section/Categories";
import { useState } from "react";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full text-gray-900">
      <div className="relative px-24 py-8 space-y-12 border-b-2 border-gray-900 md:px-32">
        <a
          href="/"
          className="text-lg italic font-bold md:text-4xl hover:underline"
        >
          GNews
        </a>
        <div className="flex items-center justify-between text-xl font-bold a">
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-1">
              <a href="">Home </a>
              <BsChevronDown size={12} />
            </div>
            <div className="flex items-center gap-x-1">
              <a href="">News </a>
              <BsChevronDown size={12} />
            </div>
            <div
              onMouseEnter={toggleDropdown}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div
                className="flex items-center cursor-pointer gap-x-1"
                onClick={toggleDropdown}
              >
                <p>Categories </p>

                <BsChevronDown size={12} />
              </div>
              <div className="absolute z-20">
                {isDropdownOpen && <Categories />}
              </div>
            </div>
          </div>
          {/* <div className="flex items-center gap-2 px-2 bg-white border divide-x rounded-full shadow-md cursor-pointer divide-solid">
            <input
              type="text"
              placeholder="search"
              value={inputValue}
              className="w-12 pl-4 text-sm outline-none text-bg-gray-900 sm:w-auto"
              onChange={(event) => dispatch(setInputValue(event.target.value))}
            />
            <div className="cursor-pointer">
              <AiOutlineSearch size={32} className="pl-2 text-gray-700" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
