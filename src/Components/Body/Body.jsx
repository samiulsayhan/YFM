// Import Swiper React components

import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import PropTypes from "prop-types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules

// import { useLoaderData } from "react-router-dom";
import FeatureCart from "./FeatureCart/FeatureCart";
import LatestMoviesCart from "./LatestMoviesCart/LatestMoviesCart";
import LatestUpdate from "./LatestUpdate/LatestUpdate";
import { useEffect, useState } from "react";
import TopSlider from "./TopSlider/TopSlider";
import TopSlider_1 from "./TopSlider/TopSlider_1";
import LetterBar from "../../Components/LetterBar/LetterBar"

// text shorten


const Body = ({ truncateText}) => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch('/AllData.json')
    .then(res => res.json())
    .then(data =>setData(data))
  },[])
  // json data loding
  // const data = useLoaderData();

  const data2 = [...data.slice(1, 5), ...data.slice(0, 1)];
  console.log(data.length);

  return (
    <div className="bg-gray-600 ">
      <div className="xl:container xl:m-auto xl:px-8">
        <div className="border-solid ">
          {/* top show A-Z */}
          <LetterBar></LetterBar>
          {/* after header and A-Z section */}
          <div className="bg-gray-900 flex ">
            {/* middle content div */}
            <div className="lg:flex-[6] border-r-1 border-gray-500">
              {/* slider */}
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:p-8 md:p-6 p-4  gap-5">
                {/* slider import */}
                <TopSlider data={data} truncateText={truncateText}></TopSlider>
                <TopSlider_1 data={data2} truncateText={truncateText}></TopSlider_1>
              </div>

              {/* after top slider all content  */}
              {/* Fetures section */}
              <div className="lg:px-8 md:px-6 px-4 ">
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
              <div className="lg:p-8 md:p-6 p-4" >
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
                    <LatestMoviesCart data={data}  truncateText={truncateText}></LatestMoviesCart>
                  </div>
                </div>
              </div>
            </div>
            {/* middle content ends */}

            {/* latest updates */}
            <div className="lg:block hidden flex-[2] lg:p-8 md:p-6 p-4   max-w-[400px] ">
              <LatestUpdate data={data} truncateText={truncateText}></LatestUpdate>
            </div>
          </div>

          {/* hidden calagory section */}
          {/* latest updates */}
          <div className="lg:hidden flex-[2] lg:p-8 md:p-6 p-4   bg-gray-900">
              <LatestUpdate data={data} truncateText={truncateText}></LatestUpdate>
            </div>
        </div>
      </div>
    </div>
  );
};

Body.propTypes = {
  
  truncateText: PropTypes.func,
};

export default Body;
