import PropTypes from "prop-types";
import { MdStar } from "react-icons/md";



const LatestMoviesCart = ({ data, truncateText }) => {
  
  
  return (
    <div>
      <div className=" grid lg:grid-cols-5 md:grid-cols-5 grid-cols-3 gap-5">
        {data.map((user) => (
          <div key={user.id} className="flex flex-col gap-2 ">
            <div  className="relative">
              <img
                src={user.image}
                alt=""
                className="h-[200px] w-full object-cover cursor-pointer"
              />
              <h1 className="absolute top-1 left-1 text-white bg-red-600 px-2  inline text-[11px]">
                {user.audio}
              </h1>
              <div className="absolute bottom-0 right-0 p-1 flex items-center gap-1 bg-black/80">
                <MdStar className="text-yellow-300 border-none text-[14px] " />
                <p className="text-white font-thin text-[12px] ">
                  {user.rating}
                </p>
              </div>
            </div>
            {/* title section */}
            <div>
              <a href={`/movie-view/${user.id}`}  className="text-gray-200 hover:text-red-600">{truncateText(user.title, 18)}</a>
              <p className="text-gray-600 font-thin text-[12px]">{user.releseDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

LatestMoviesCart.propTypes = {
  data: PropTypes.array,
  truncateText: PropTypes.func,
};

export default LatestMoviesCart;

