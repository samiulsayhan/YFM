import { MdStar } from "react-icons/md";
import PropTypes from "prop-types";
import DownloadLinks from "../DownloadLinks/DownloadLinks";
import LatestUpdate from "../LatestUpdate/LatestUpdate";

const MovieViewBodyDesign = ({ user, data, truncateText }) => {
  return (
    <div>
      <div className="flex">
        {/* middle content div */}
        <div className="lg:flex-[6]  lg:border-r-1 border-gray-500">
          {/* movie image and titles */}
          <div className="xl:p-8 p-6 border-b-3 border-gray-600 md:w-auto w-screen">
            {/* movie-view section div */}
            {/* here i use filter to use specific image that was click by id */}
            <div className="flex justify-between gap-4 ">
              {/* image div */}
              <div className=" ">
                <img className="lg:w-[330px] md:w-[300px] w-[600px]" src={user.image} alt="" />
              </div>
              {/* side titles and texts */}
              <div className=" flex-col flex gap-1">
                <h1 className="text-3xl font-extralight  text-white">{user.title}</h1>
                <p className="text-gray-200">{user.movieMoto}</p>
                <p className="text-gray-600">{user.releseDate}</p>
                <div className="flex text-white gap-x-2 text-[12px]  ">
                    <p className="  ">{user.resulation.resulation_1} <span className="px-2">|</span></p> 
                    <p className=" ">{user.resulation.resulation_2}  <span className="px-2">|</span></p>
                    <p className="md:block hidden">{user.type.type_1}  <span className="px-2">|</span></p>
                    <p className=" xl:block hidden">{user.type.type_2}  <span className="px-2">|</span></p>
                    <p className="lg:hidden md:block hidden">{user.type.type_3}  <span className="px-2">|</span></p>
                    <p className=" md:block hidden">{user.industry}</p>
                </div>
              </div>
            </div>
          </div>
          {/* some button info , trailer ,links , cast */}
          <div className="lg:px-6 md:px-6 px-2 py-3 border-b-3 border-gray-600 md:flex grid grid-cols-2 md:gap-3 gap-1 md:w-auto w-screen">
            <a href="#" className="md:px-4.5 px-0 py-1.5 text-[13px] rounded-sm justify-center flex text-white bg-red-600">Info</a>
            <a href="#" className="md:px-4.5 px-0 py-1.5 text-[13px] rounded-sm justify-center flex md:hover:text-red-600 text-white md:bg-white/0 bg-gray-600/60">Trailer</a>
            <a href="#" className="md:px-4.5 px-0 py-1.5 text-[13px] rounded-sm justify-center flex md:hover:text-red-600 text-white md:bg-white/0 bg-gray-600/60">Links</a>
            <a href="#" className="md:px-4.5 px-0 py-1.5 text-[13px] rounded-sm justify-center flex md:hover:text-red-600 text-white md:bg-white/0 bg-gray-600/60">Cast</a>
          </div>


          {/* screenshot & synopsis */}
          <div className="px-12 py-8 border-b-3 border-gray-600 flex flex-col text-white gap-3 md:w-auto w-screen">
            <h2 className="pb-2 text-[17px]">Synopsis</h2>
            <p>Screenshots</p>
            {/* img1 , img2 , img3 */}
            <div className="flex flex-col   gap-5">
              <img className="lg:w-[500px] md:w-[400px] w-[300px]" src={user.subImg.img1} alt=""/>
              <img className="lg:w-[500px] md:w-[400px] w-[300px]" src={user.subImg.img2} alt=""/>
              <img className="lg:w-[500px] md:w-[400px] w-[300px]" src={user.subImg.img3} alt=""/>
            </div>
            {/* discription */}
            <p className="text-gray-400 pt-12 pb-4 leading-relaxed  border-b-1 ">
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
          <div className="lg:px-6 md:px-6 px-6 py-3 border-b-3 border-gray-600 flex items-center gap-3 md:w-auto w-screen">
            <h1 className="text-xl text-gray-300">Links</h1>
            <a href="#" className="bg-red-600 px-2 rounded-sm text-[12px] text-white">Download</a>
          </div>
          {/* download links */}
          <div className="lg:px-12 md:px-10  md:py-8 py-6 md:w-auto w-screen">
            <DownloadLinks></DownloadLinks>
          </div>
        </div>

        {/* latest updates */}
        <div className="lg:block hidden flex-[2] p-8  max-w-[400px] ">
          <LatestUpdate data={data} truncateText={truncateText}></LatestUpdate>
        </div>
      </div>
    </div>
  );
};

MovieViewBodyDesign.propTypes = {
  user: PropTypes.array,
  truncateText: PropTypes.string,
  data: PropTypes.array,
};

export default MovieViewBodyDesign;
