import React from "react";
import Button from "./Images/Button";

const AboutHabot = () => {
  return (
    <div className="flex flex-wrap justify-evenly bg-slate-300 w-[100%] py-10 px-[70px] sm:flex-col md:w-[100%] md:flex-row xxl:w-[100%] xxl:flex-row">
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col flex-wrap items-stretch ">
          <h1 className="text-4xl font-bold mb-6 flex flex-wrap ">Ready to dive into HABOT?</h1>
          <p className="mb-2 md:w-[500px] flex flex-wrap">
            Signing up with HABOT opens the door to a world of new opportunities{" "}
             and potential for business growth. Gain access to a
            vibrant community of like-minded individuals, unlock
            valuable resources, and take the first step towards
            realizing your entrepreneurial dreams.
          </p>
          <Button
            label={"Sign Up Today"}
            color="green"
            btnSize="48"
            transparent={false}
          />
          </div>
  
      </div>
      <div className="mt-2 flex flex-col flex-wrap">
        <div className="flex justify-around gap-x-6  flex-wrap">
          <div className="border rounded-md  border-orange-500 w-48 h-14 flex justify-center items-center m-2">
            Abu Dhabi
          </div>
          <div className="border rounded-md  border-orange-500 w-48 h-14 flex justify-center items-center m-2">
            Dubai
          </div>
        </div>
        <div className="flex justify-around gap-x-6 flex-wrap">
          <div className="border rounded-md  border-orange-500 w-48 h-14 flex justify-center items-center m-2">
            Sharjah & Ajman
          </div>
          <div className="border rounded-md  border-orange-500 w-48 h-14 flex justify-center items-center m-2">
            Fujairah
          </div>
        </div>
        <div className="flex justify-around gap-x-6 flex-wrap">
          <div className="border rounded-md  border-orange-500 w-48 h-14 flex justify-center items-center m-2">
            Ras Al Khaimah
          </div>
          <div className="border rounded-md  border-orange-500 w-48 h-14 flex justify-center items-center m-2">
            Umm Al Quwain
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHabot;
