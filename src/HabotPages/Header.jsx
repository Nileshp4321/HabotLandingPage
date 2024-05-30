import React from "react";
import HeaderImg from "./Images/HeaderImg.png";
import Button from "./Images/Button";
const Header = () => {
  return (
      <div className="flex flex-col flex-wrap  items-center sm:flex-col lg:flex-row md:flex-row xl:flex-row justify-between px-[70px] py-4">
        <div className="flex flex-wrap">
          <img src={HeaderImg} className="h-[35px]" />
        </div>
        <div className="flex items-center flex-wrap justify-center gap-x-8">
          <h1 className="m-2">Find Suppliers</h1>
          <h1 className="m-2">Find Services Tags</h1>
          <Button label="Login / Sign Up" color="green" />
        </div>
      </div>
  );
};

export default Header;
