import PropTypes from "prop-types";
import { MdStar } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Categories =[
    "Oscar Winning Movies",
    "IMDb Top 250 Movies",
    "Anime",
    "DC, Marvel or Superhero Movies & TV Series",
    "4K ULTRA-HD 2160p",
    "2K 1080p Full HD",
    "Sports Related Movies",
    "Animation & Cartoon Movies",
    "Bollywood Hindi Movies",
    "English (Hollywood)",
    "Tamil",
    "Telugu",
    "Malayalam",
    "Kannada",
    "Korean",
    "Japanese & Chinese",
    "Turkish",
    "Spanish",
    "Dual Audio",
    "Hindi Dubbed",
]

const LatestUpdate = ({ data, truncateText }) => {
  const data1 = [...data.slice(0, 5)];
  return (
    <div>
      <h2 className="text-white text-lg font-thin">Latest updates</h2>
      <div className=" gap-4">
        {data1.map((user) => (
          <div key={user.id} className="flex my-4 bg-gray-950">
            <img className="max-h-[100px]" src={user.image} alt="" />
            <div className="text-[12px] font-extralight flex flex-col p-3 ">
              <h2 className="text-white">{truncateText(user.title, 40)}</h2>
              <p className="text-gray-400">{user.releseDate}</p>
              <div className="flex items-center gap-0.5 pt-1">
                <MdStar className="text-white border-none text-[15px] " />
                <p className="text-gray-500 text-[12px] font-semibold ">
                  {user.rating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* catagory section*/}
      <div>
        <h2 className="text-white text-lg font-thin">Categories</h2>
        <div>
            {
                Categories.map((user,idx)=>(
                    <div key={idx} className="border-b-1 border-gray-600 flex gap-2 items-center py-3 text-gray-400">
                        <MdOutlineKeyboardArrowRight className="text-xl" />
                        <a href="#" className="hover:text-red-600">{user}</a>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

LatestUpdate.propTypes = {
  data: PropTypes.array,
  truncateText: PropTypes.func,
};

export default LatestUpdate;
