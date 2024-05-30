import React from "react";
import HeaderImg from "./Images/HeaderImg.png";

const Footer = () => {
  return (
    <div className=" flex  mt-10 p-2 w-full mb-10">
      <div className=" w-full  bg-blue-900 mt-10 sm:justify-center  ">
      <div className="p-4 text-white leftSide mt-10 flex flex-col justify-center items-center sm:justify-evenly sm:flex-row md:flex-row  md:justify-evenly">
        <div className="flex flex-col">
        <img
          className="w-32 h-16 "
          style={{ backgroundColor: "white" }}
          src={HeaderImg}
        />
        <h1 className=" mt-2">© R Singhania</h1>
        </div>
      <div className="flex flex-col justify-center w-32 m-3">
        <h1 className="text-bold">Company</h1>
        <h1 className="">About</h1>
        <h1 className="">FAQ</h1>
      </div>
      <div className="flex flex-col justify-center w-32 m-3">
        <h1 className="text-bold">Terms</h1>
        <h1 className="">Data Privacy Terms</h1>
        <h1 className="">Accessbility</h1>
      </div>
      <div className="flex flex-col justify-center w-32 m-3">
        <h1 className="text-bold">Related</h1>
        <h1 className="">Find Buyer</h1>
        <h1 className="">Feedback</h1>
      </div>
      <div className="flex justify-center items-center m-3">
       <img src="https://img.icons8.com/?size=50&id=447&format=png" className="mr-2" style={{backgroundColor:'white'}} width={30} height={30} />
       <img src="https://img.icons8.com/?size=50&id=437&format=png" className="mr-2" style={{backgroundColor:'white'}} width={30} height={30} />
       <img src="https://img.icons8.com/?size=50&id=435&format=png" className="mr-2" style={{backgroundColor:'white'}} width={30} height={30} />
       <img src="https://img.icons8.com/?size=50&id=32292&format=png" className="mr-2" style={{backgroundColor:'white'}} width={30} height={30} />
      
      </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
