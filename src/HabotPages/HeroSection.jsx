import React from "react";
import Button from "./Images/Button";

const HeroSection = () => {
  return (
    <div className="relative mb-5">
      <img
        className="h-[650px] w-[100%] opacity-3"
        src="https://s3-alpha-sig.figma.com/img/4df9/f396/c8b4ef806609efd227c6672c5dba3716?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Duz-iIny5XDy2hCnU8iZW3RqhOvKotjexp7nwpQEFRpK931p8-7KHfe5q0dl1zaUXw3xkeC9g0VvCkhb074ag-ZaKZAJo5Emla9mC1dJ5uAvbNCH43XBGAJE6ynHWVOSZIUGLsYaDyyAJ-S9O6V4PJ8x8YmbH9lewNjKhLw265-ObuejCdRXGIs7M~kVJGLuPt8bkHqg3WSFkw-dlrxDc1ZGbUkZFriX7ZcIeLnGcR068VMCVACAyZ86cPuZd~koxagnn3MtVWrhL1e3V75LUx2NjcqCaXIHOgHDO0bPsCgyzaXhkj~FawrLssDSYZMapgx0z2ZcUsxhaYGMOXcx3Q__"
        alt="hero_image"
      />
      <div className="absolute  inset-0 flex items-center justify-center flex-col">
        <h1 className="flex flex-wrap text-white text-center text-5xl font-bold">
          Are You a Supplier?<br></br>
          Explore Matching Opportunities.
        </h1>
        <div className=" flex flex-wrap justify-center mt-5 items-center">
          <input className="m-2 px-5 w-[100%] sm:w-[100%] md:w-96 xxl:w-96 py-4 rounded-md" type="text" placeholder="Search Your Required Service here"/>
          <input className="m-2 px-5 w-[100%] sm:w-[100%] md:w-96 xxl:w-96 py-4 rounded-md" type="text" placeholder="Search Your Desired Location here"/>
          <Button label="Search"  btnSize="32" />
        </div>
        <div className="flex w-full flex-wrap mt-10 justify-center">
          <h1>Are You a buyer ?</h1>
          <a href="#" className="underline" >Click here for if you are looking to post a requirments</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
