import { IoSearch } from "react-icons/io5";
import { GiFilmProjector } from "react-icons/gi";
import { FaSortDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gray-900 border-b-1 border-black shadow-2xl">
      <div className="container m-auto px-8 flex justify-between items-center">
        {/* herder design start from here */}
        {/* logo and menu section */}
        <div className="flex justify-between items-center gap-4">
          {/* logo */}
          <div className="p-4 bg-gray-800 flex gap-1 items-center justify-center">
            <GiFilmProjector className="text-4xl text-gray-200"/>
            <h1 className="text-2xl text-red-700 font-bold">
              YFM <span className="text-white">.COM</span>
            </h1>
          </div>
          {/* menu */}
          <div>
            <ul className="flex text-sm text-gray-400 font-semibold gap-8">
              <li className="flex">Movies <FaSortDown /></li>
              <li className="flex">Genres <FaSortDown /></li>
              <li className="flex">Special Categories <FaSortDown /></li>
            </ul>
          </div>
        </div>
        {/* search option */}
        <div className="relative">
          <input
            className="text-white w-[350px] bg-gray-800 border-none px-4 py-2 rounded-md  focus:outline-none"
            type="text"
            placeholder="Search.."
            autoFocus
          />
          <IoSearch className="text-white absolute right-3 font-extrabold text-xl top-1/4 " />
        </div>
      </div>
    </div>
  );
};

export default Header;
