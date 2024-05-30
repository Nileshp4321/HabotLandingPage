import React from "react";
import VideoFrame from "./Images/i8tgRHXx4oQ-SD 1.png";
import CheckedIcon from "./Images/checked (2) 1.png";
const Requirments = () => {
  return (
    <div className=" flex flex-wrap  mt-10 p-2 w-full mb-10">
      <div className="flex w-full flex-wrap  bg-blue-900 mt-10 sm:justify-center  ">
        <div className=" leftSide m-10 flex justify-center">
          <img className="w-full" src={VideoFrame} />
        </div>
        <div className="frightSide flex flex-col mt-10 mb-10 ">
          <div className="flex justify-evenly">
          <h2 className="text-orange-500 font-bold text-2xl border-b-2 border-orange-600 p-2 ">
            Buyer
          </h2>
          <h2 className=" text-orange-500 font-bold text-2xl p-2 ">
            Supperlier
          </h2>
          </div>

          <div className="flex">
            <img className="w-[30px] m-3" src={CheckedIcon} width={30} height={30} />
            <span className="m-2">Post your requirements.</span>
          </div>
          <div className="flex">
            <img className="w-[30px] m-3" src={CheckedIcon} width={30} height={30} />
            <span className="m-2">
              Sit back for multiple suppliers to contact you.
            </span>
          </div>
          <div className="flex">
            <img className="w-[30px] m-3" src={CheckedIcon} width={30} height={30} />
            <span className="m-2">
              Choose among the suppliers based on the ratings and reviews.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirments;
