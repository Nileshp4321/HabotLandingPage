import React, { useEffect, useState } from "react";

const ButtonWithCustomizable=(Button)=>{
  return(
    <h1>hello</h1>
  )
}
const Button = ({ label, color ,btnSize}) => {
  const cbtn = `w-${btnSize?btnSize:"full"}  bg-green-700 hover:bg-green-600 text-white font-semibold  py-2 px-4 border  rounded`;
  // const [cbtnState, setCbtnState] = useState(cbtn);
  return (
    <div>
      <button className={cbtn}>{label}</button>
    </div>
  );
};

const CustomizeButton=ButtonWithCustomizable(Button);
export default Button;
