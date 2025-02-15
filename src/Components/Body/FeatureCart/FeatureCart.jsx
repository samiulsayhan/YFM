import PropTypes from "prop-types";
import { MdStar } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

const FeatureCart = ({ data }) => {
  // const navigate = useNavigate();

  const handleClick =(id)=>{
    // navigate(`/movie-view/${id}`);
    window.location.href = `/movie-view/${id}`;
  }

  const data1=[...data.slice(0,5)];
  return (
    <div >
      <div className=" grid lg:grid-cols-5 md:grid-cols-5 grid-cols-3 gap-5">
        {data1.map((user) => (
          <div onClick={()=>handleClick(user.id)} key={user.id} className="flex ">
            <div className="relative">
              <img
                src={user.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <h1 className="absolute top-0 left-0 text-white bg-red-600 px-2.5 py-0.5 inline font-mono text-[11px]">
                FEATURE
              </h1>
              <div className="absolute bottom-0 right-0 p-1 flex items-center gap-1 bg-black/80">
                <MdStar className="text-yellow-300 border-none text-[14px] " />
                <p className="text-white font-thin text-[12px] ">{user.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FeatureCart.propTypes = {
  data: PropTypes.array,
};

export default FeatureCart;
