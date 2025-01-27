// Import Swiper React components

import PropTypes from "prop-types";
// import { MdStar } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules

import { useLoaderData, useParams } from "react-router-dom";

import LatestUpdate from "./LatestUpdate/LatestUpdate";
// import DownloadLinks from "./DownloadLinks/DownloadLinks";
import MovieViewBodyDesign from "./MovieViewBodyDesign/MovieViewBodyDesign";

// text shorten
const truncateText = (text, maxLength) =>
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

const MovieView = () => {
  // json data loding
  const data = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);

  console.log(data.length);

  return (
    <div>
      {data
        .filter((user) => user.id == idInt)
        .map((user) => (
          <div
            key={user.id}
            style={{ backgroundImage: `url(${user.bgImg})` }}
            className="bg-fixed bg-cover h-full bg-no-repeat "
          >
            <div className="lg:container lg:m-auto xl:px-8">
              <div className="border-solid ">
                <div className="bg-gray-950/90  ">
                  <MovieViewBodyDesign user={user} data={data} truncateText={truncateText}></MovieViewBodyDesign>

                  {/* hidden Catagory */}
                  {/* latest updates */}
                  <div className=" p-8  ">
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
