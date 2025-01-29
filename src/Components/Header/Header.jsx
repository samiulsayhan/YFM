import { IoSearch } from "react-icons/io5";
import { GiFilmProjector } from "react-icons/gi";
import { FaSortDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import MoviesType from "./MoviesType/MoviesType";
import PropTypes from 'prop-types';

const Header = ({truncateText}) => {
  return (
    <div className=" bg-gray-900  border-b-1 border-black shadow-2xl ">
      <div className="xl:container xl:m-auto xl:px-8  lg:flex lg:justify-between grid grid-cols-[1fr_2fr_1fr] items-center">
        {/* herder design start from here */}
        {/* logo and menu section */}
        <div className="flex  items-center gap-4 ">
          {/* hidden menu */}
          <div className="lg:hidden ">
            <div className="dropdown ">
              <IoIosMenu tabIndex={0} className="text-white  text-5xl p-3" />
              <div tabIndex={0} className=" dropdown-content bg-black/90 h-screen text-gray-500  z-1 w-screen  shadow">
                <div className=" font-bold  ">
                  {/* list */}
                  <MoviesType truncateText={truncateText}></MoviesType>
                </div>
                
              </div>
            </div>
          </div>

          {/* logo */}
          <div className="hidden lg:flex lg:p-4 p-2 bg-gray-800 gap-1 items-center justify-center">
            <GiFilmProjector className="text-4xl text-gray-200" />
            <a href="/main" className="text-2xl text-red-700 font-bold">
              YFM <span className="text-white">.COM</span>
            </a>
          </div>
          {/* menu */}
          <div className="lg:block hidden">
            <ul className="flex text-sm text-gray-400 font-semibold gap-8">
              <li className="flex">
                <a href="/main">Movies</a> <FaSortDown />
              </li>
              <li className="flex">
                Genres <FaSortDown />
              </li>
              <li className="flex">
                Special Categories <FaSortDown />
              </li>
            </ul>
          </div>
        </div>
        {/* logo */}
        <div className="lg:hidden lg:p-4 p-2 flex gap-1 items-center justify-center">
          <GiFilmProjector className="text-4xl text-gray-200" />
          <a href="/main" className="text-2xl text-red-700 font-bold">
            YFM <span className="text-white">.COM</span>
          </a>
        </div>
        {/* search option */}
        <div  className="relative ">
          <input
            className="text-white w-[350px]  hidden lg:block bg-gray-800 border-none px-4 py-2 rounded-md  focus:outline-none"
            type="text"
            placeholder="Search.."
            autoFocus
          />
          <IoSearch className="text-white  absolute right-3 font-extrabold text-xl lg:top-1/4 -top-2" />
          
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  truncateText: PropTypes.func
};

export default Header;

