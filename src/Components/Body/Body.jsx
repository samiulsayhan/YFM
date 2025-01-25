// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import PropTypes from "prop-types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useLoaderData } from "react-router-dom";
import FeatureCart from "./FeatureCart/FeatureCart";
import LatestMoviesCart from "./LatestMoviesCart/LatestMoviesCart";
import LatestUpdate from "./LatestUpdate/LatestUpdate";

// text shorten
const truncateText = (text, maxLength) =>
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

const Body = ({ letter }) => {
  // json data loding
  const data = useLoaderData();

  const data2 = [...data.slice(1, 5), ...data.slice(0, 1)];
  console.log(data.length);

  return (
    <div className="bg-gray-600">
      <div className="container m-auto px-8">
        <div className="border-solid ">
          {/* top show A-Z */}
          <div className=" text-gray-500 p-4 flex justify-between border-b-1 border-gray-500 bg-gray-900">
            {letter.map((letter, idx) => (
              <div key={idx}>
                <a href="#">{letter}</a>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 flex ">
            {/* middle content div */}
            <div className="flex-[6] border-r-1 border-gray-500">
              {/* slider */}
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-8 gap-5">
                {/* 1st slider */}
                <div className="">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className=" max-h-[200px] "
                  >
                    <div className="">
                      {data.map((user, idx) => (
                        <div key={idx}>
                          <SwiperSlide>
                            <div className="relative">
                              <img className="" src={user.bgImg} alt="" />
                              <p className="absolute bottom-5 p-3 text-gray-200 font-medium">
                                {truncateText(user.title, 35)}
                              </p>
                              <p className="absolute bottom-0 left-0 text-gray-200 text-[12px] p-3">
                                {user.releseDate}
                              </p>
                              <p className="absolute bottom-2 right-0 bg-red-600 text-[12px] text-white px-2.5 py-0.5">
                                MOVIE
                              </p>
                            </div>
                          </SwiperSlide>
                        </div>
                      ))}
                    </div>
                  </Swiper>
                </div>
                {/* 2nd slider */}
                <div className="">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className=" max-h-[200px] "
                  >
                    <div className="">
                      {data2.map((user, idx) => (
                        <div key={idx}>
                          <SwiperSlide>
                            <div className="relative">
                              <img className="" src={user.bgImg} alt="" />
                              <p className="absolute bottom-5 p-3 text-gray-200 font-medium">
                                {truncateText(user.title, 35)}
                              </p>
                              <p className="absolute bottom-0 left-0 text-gray-200 text-[12px] p-3">
                                {user.releseDate}
                              </p>
                              <p className="absolute bottom-2 right-0 bg-red-600 text-[12px] text-white px-2.5 py-0.5">
                                MOVIE
                              </p>
                            </div>
                          </SwiperSlide>
                        </div>
                      ))}
                    </div>
                  </Swiper>
                </div>
              </div>

              {/* after top slider all content  */}
              {/* Fetures section */}
              <div className="px-8 ">
                <div className="border-b-1 border-gray-600 py-8">
                  {/* feture text */}
                  <div className="flex justify-between items-center pb-5 ">
                    {/* text */}
                    <div className="flex gap-2 items-center">
                      <div className="bg-red-700 border-none h-5.5  p-0.5 inline"></div>
                      <h1 className="text-white text-lg font-thin">Featured</h1>
                    </div>
                    {/* left right icons */}
                    <div className="flex text-2xl text-gray-500 items-center">
                      <FaCaretLeft />
                      <FaCaretRight />
                    </div>
                  </div>
                  {/* feture cart */}
                  <div>
                    <FeatureCart data={data}></FeatureCart>
                  </div>
                </div>
              </div>

              {/* latest movies section*/}
              <div className="p-8">
                <div className="border-b-1 border-gray-600 py-8">
                  {/* feture text */}
                  <div className="flex justify-between items-center pb-5">
                    {/* text */}
                    <div className="flex gap-2 items-center">
                      <div className="bg-red-700 border-none h-5.5  p-0.5 inline"></div>
                      <h1 className="text-white text-lg font-thin">
                        Latest Movies
                      </h1>
                    </div>
                    {/* SEE ALL button */}
                    <button className="text-[9px] items-center font-thin text-white bg-red-600 px-2 pb-0.5 pt-1 rounded-sm">
                      SEE ALL
                    </button>
                  </div>
                  {/* LatestMovies cart */}
                  <div>
                    <LatestMoviesCart data={data} truncateText={truncateText}></LatestMoviesCart>
                  </div>
                </div>
              </div>
            </div>

            {/* latest updates */}
            <div className="flex-[2] p-8  max-w-[400px] ">
              <LatestUpdate data={data} truncateText={truncateText}></LatestUpdate>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Body.propTypes = {
  letter: PropTypes.array,
};

export default Body;
