import React from 'react'
import ProfileIcon from './Images/Group 33.png'
import DocumentIcon from "./Images/document (1) 1.png";
import LayerIcon from './Images/Layer_x0020_1.png';
import Document2Icon from "./Images/g2259.png";
import QuoteIcon from "./Images/quote-request 1.png"
import GroupIcon from "./Images/Group.png";

const Card=({imgUrl,text})=>{
    return(<>
     <div className='h-56 flex flex-col justify-center  rounded m-1 p-[100px]'>
        <div className='flex justify-center'>
            <img src={imgUrl} />
        </div>
        <div className='flex justify-center m-2 text-center'>
            <p className=' w-36'>{text}</p>
        </div>
     </div>
    </>)
}
const HowItWorks = () => {
  return (
    <div className='flex flex-col  justify-center items-center  m-10'>
        <div className='flex flex-col justify-center '>
           <h1 className='text-3xl flex flex-wrap justify-center'>How It Works?</h1>
           <p className=' leading-relaxed  flex flex-wrap text-center'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
        </div>
        <div className='flex flex-wrap justify-center  '>
            <Card imgUrl={ProfileIcon} text="Select Your Role and Sign Up"/>
            <Card imgUrl={DocumentIcon} text="Buyers Post Your Requirements" />
            <Card imgUrl={LayerIcon} text=" Review, Select, and Contact the Best Suppliers"/>
      
            <Card imgUrl={Document2Icon} text=" Suppliers Complete your profile and get notified for opportunities"/>
            <Card imgUrl={LayerIcon} text="Contact to Buyers and Share your Quote for the service"/>
            <Card imgUrl={GroupIcon} text="Both the Parties can Connect and Make Business Leave a Feedback"/>
        </div>
    </div>
  )
}

export default HowItWorks