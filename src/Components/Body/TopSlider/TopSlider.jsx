import PropTypes from "prop-types";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TopSlider = ({data, truncateText}) => {

    const handleClick =(id)=>{
        // navigate(`/movie-view/${id}`);
        window.location.href = `/movie-view/${id}`;
      }
  return (
    <div>
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
            {data.map((user) => (
              <div key={user.id} >
                <SwiperSlide>
                  <div className="relative">
                    <img onClick={()=>handleClick(user.id)} className="" src={user.bgImg} alt="" />
                    <p className="absolute bottom-6 p-3 text-gray-200 font-medium">
                      {truncateText(user.title, 35)}
                    </p>
                    <p className="absolute bottom-2 left-0 text-gray-200 text-[12px] p-3">
                      {user.releseDate}
                    </p>
                    <p className="absolute bottom-4 right-0 bg-red-600 text-[12px] text-white px-2.5 py-0.5">
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
  );
};

TopSlider.propTypes = {
    truncateText: PropTypes.func,
    data: PropTypes.array
};

export default TopSlider;


