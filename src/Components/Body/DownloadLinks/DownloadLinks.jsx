import { BiWorld } from "react-icons/bi";
import PropTypes from "prop-types";

const DownloadLinks = ({ user }) => {
  return (
    <div className="">
      
      {/* headers  */}
      <div className="flex  border-b-2 p-2 border-gray-600 font-bold">
        <div className="flex gap-36 flex-[1] ">
          <h1 className=" text-white">Download</h1>
          <h1 className=" text-white">Quality</h1>
        </div>
        <div className="flex gap-36 flex-[1] ">
          <h1 className="pl-18 text-white">Language</h1>
          <h1 className=" text-white">Size</h1>
        </div>
      </div>

      {/* 4K UHD */}
      <div className="py-3 px-4 flex justify-between border-b-1 hover:bg-black/40 text-gray-200 border-gray-600">
        <div className="flex gap-30 items-center  flex-[1] ">
          <a href="#" className="flex text-red-600  gap-2 text-[12px]"><BiWorld className="text-white" /> Download</a>
          <p className="bg-black/50 rounded-sm px-3 py-1 text-[11px] border-gray-600 font-bold border-1">4K UHD</p>
        </div>
        <div className="flex gap-44  flex-[1] ">
          <p className="pl-20 text-[12px]">Hindi</p>
          <p className="">....</p>
        </div>
      </div>
      {/* 720p HEVC */}
      <div className="py-3 px-4 flex justify-between border-b-1 hover:bg-black/40 text-gray-200 border-gray-600">
        <div className="flex gap-30 items-center flex-[1] ">
          <a href="#" className="flex text-red-600  gap-2 text-[12px]"><BiWorld className="text-white" /> Download</a>
          <p className="bg-black/50 rounded-sm px-3 py-1 text-[11px] border-gray-600 font-bold border-1">720p HEVC</p>
        </div>
        <div className="flex gap-44  flex-[1] ">
          <p className="pl-20 text-[12px]">Hindi</p>
          <p className="">....</p>
        </div>
      </div>
      {/* 1080p HEVC */}
      <div className="py-3 px-4 flex justify-between border-b-1 hover:bg-black/40 text-gray-200 border-gray-600">
        <div className="flex gap-30 items-center flex-[1] ">
          <a href="#" className="flex text-red-600  gap-2 text-[12px]"><BiWorld className="text-white" /> Download</a>
          <p className="bg-black/50 rounded-sm px-3 py-1 text-[11px] border-gray-600 font-bold border-1">1080p HEVC</p>
        </div>
        <div className="flex gap-44  flex-[1] ">
          <p className="pl-20 text-[12px]">Hindi</p>
          <p className="">....</p>
        </div>
      </div>
      {/* 1080p */}
      <div className="py-3 px-4 flex justify-between border-b-1 hover:bg-black/40 text-gray-200 border-gray-600">
        <div className="flex gap-30 items-center flex-[1] ">
          <a href="#" className="flex text-red-600  gap-2 text-[12px]"><BiWorld className="text-white" /> Download</a>
          <p className="bg-black/50 rounded-sm px-3 py-1 text-[11px] border-gray-600 font-bold border-1">1080p</p>
        </div>
        <div className="flex gap-44  flex-[1] ">
          <p className="pl-20 text-[12px]">Hindi</p>
          <p className="">....</p>
        </div>
      </div>
      {/* 720p */}
      <div className="py-3 px-4 flex justify-between border-b-1 hover:bg-black/40 text-gray-200 border-gray-600">
        <div className="flex gap-30 items-center flex-[1] ">
          <a href="#" className="flex text-red-600  gap-2 text-[12px]"><BiWorld className="text-white" /> Download</a>
          <p className="bg-black/50 rounded-sm px-3 py-1 text-[11px] border-gray-600 font-bold border-1">720p</p>
        </div>
        <div className="flex gap-44  flex-[1] ">
          <p className="pl-20 text-[12px]">Hindi</p>
          <p className="">....</p>
        </div>
      </div>
      {/* 480p */}
      <div className="py-3 px-4 flex justify-between border-b-1 hover:bg-black/40 text-gray-200 border-gray-600">
        <div className="flex gap-30 items-center flex-[1] ">
          <a href="#" className="flex text-red-600  gap-2 text-[12px]"><BiWorld className="text-white" /> Download</a>
          <p className="bg-black/50 rounded-sm px-3 py-1 text-[11px] border-gray-600 font-bold border-1">480p</p>
        </div>
        <div className="flex gap-44  flex-[1] ">
          <p className="pl-20 text-[12px]">Hindi</p>
          <p className="">....</p>
        </div>
      </div>
      

    </div>
  );
};

DownloadLinks.propTypes = {
  user: PropTypes.array,
};

export default DownloadLinks;
