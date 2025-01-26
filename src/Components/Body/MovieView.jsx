// Import Swiper React components

import PropTypes from "prop-types";
import { MdStar } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules

import { useLoaderData } from "react-router-dom";

import LatestUpdate from "./LatestUpdate/LatestUpdate";
import DownloadLinks from "./DownloadLinks/DownloadLinks";

// text shorten
const truncateText = (text, maxLength) =>
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

const MovieView = () => {
  // json data loding
  const data = useLoaderData();

  console.log(data.length);

  return (
    <div>
      {data
        .filter((user) => user.id == 5)
        .map((user) => (
          <div
            key={user.id}
            style={{ backgroundImage: `url(${user.bgImg})` }}
            className="bg-fixed bg-cover h-full bg-no-repeat "
          >
            <div className="container m-auto px-8">
              <div className="border-solid ">
                <div className="bg-gray-950/90 flex ">
                  {/* middle content div */}
                  <div className="flex-[6] border-r-1 border-gray-500">
                    {/* movie image and titles */}
                    <div className="p-8 border-b-3 border-gray-600">
                      {/* movie-view section div */}
                      {/* here i use filter to use specific image that was click by id */}

                      <div className="flex  ">
                        {/* image div */}
                        <div className="flex-[1.5]">
                          <img className="h-[210px]" src={user.image} alt="" />
                        </div>
                        {/* side titles and texts */}
                        <div className="flex-[6] flex-col flex gap-1">
                          <h1 className="text-3xl font-thin text-white">
                            {user.title}
                          </h1>
                          <p className="text-gray-200">{user.movieMoto}</p>
                          <p className="text-gray-600">{user.releseDate}</p>
                          <div className="flex text-white text-[12px]  ">
                            <p className="pr-2 border-r-1">
                              {user.resulation.resulation_1}
                            </p>
                            <p className="px-2 border-r-1">
                              {user.resulation.resulation_2}
                            </p>
                            <p className="px-2 border-r-1">
                              {user.type.type_1}
                            </p>
                            <p className="px-2 border-r-1">
                              {user.type.type_2}
                            </p>
                            <p className="px-2 border-r-1">
                              {user.type.type_3}
                            </p>
                            <p className="px-2 ">{user.industry}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* some button info , trailer ,links , cast */}
                    <div className="px-8 py-3 border-b-3 border-gray-600 flex gap-3">
                      <a
                        href="#"
                        className="px-4.5 py-1.5 text-[13px] rounded-sm text-white bg-red-600"
                      >
                        Info
                      </a>
                      <a
                        href="#"
                        className="px-4.5 py-1.5 text-[13px] hover:text-red-600 text-white "
                      >
                        Trailer
                      </a>
                      <a
                        href="#"
                        className="px-4.5 py-1.5 text-[13px] hover:text-red-600 text-white "
                      >
                        Links
                      </a>
                      <a
                        href="#"
                        className="px-4.5 py-1.5 text-[13px] hover:text-red-600 text-white "
                      >
                        Cast
                      </a>
                    </div>

                    {/* screenshot & synopsis */}
                    <div className="px-12 py-8 border-b-3 border-gray-600 flex flex-col text-white gap-3">
                      <h2 className="pb-2 text-[17px]">Synopsis</h2>
                      <p>Screenshots</p>
                      {/* img1 , img2 , img3 */}
                      <div className="flex flex-col w-[500px] gap-5">
                        <img src={user.subImg.img1} alt="" />
                        <img src={user.subImg.img2} alt="" />
                        <img src={user.subImg.img3} alt="" />
                      </div>
                      {/* discription */}
                      <p className="text-gray-400 pt-12 pb-4  border-b-1 ">
                        {user.discription}
                      </p>
                      {/* bg img is here */}
                      <div className="p-1 py-3 border-b-1">
                        <img src={user.bgImg} className="w-[250px]" alt="" />
                      </div>
                      {/* original title */}
                      <div className="px-2 pb-4 flex gap-27 border-b-1">
                        <p className="text-sm">Originl title</p>
                        <p>{user.original_title}</p>
                      </div>
                      {/* IMDb rating */}
                      <div className="px-2 flex gap-24 items-center">
                        <p className="text-sm">IMDb Rating</p>
                        <div className="flex gap-1 rounded-sm px-1 items-center bg-gray-600">
                        <MdStar className="text-white border-none text-[15px] " />
                        <p>{user.rating}</p>
                        </div>
                      </div>
                    </div>
                    {/* download */}
                    <div className="px-8 py-3 border-b-3 border-gray-600 flex items-center gap-3">
                        <h1 className="text-xl text-gray-300">Links</h1>
                        <a href="#" className="bg-red-600 px-2 rounded-sm text-[12px] text-white">Download</a>
                    </div>
                    {/* download links */}
                    <div className="px-12 py-8">
                        <DownloadLinks user={user}></DownloadLinks>
                    </div>

                  </div>

                  {/* latest updates */}
                  <div className="flex-[2] p-8  max-w-[400px] ">
                    <LatestUpdate
                      data={data}
                      truncateText={truncateText}
                    ></LatestUpdate>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

MovieView.propTypes = {
  letter: PropTypes.array,
};

export default MovieView;
