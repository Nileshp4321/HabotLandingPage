import React from 'react'
import Button from './Images/Button'

const GetVerify = () => {
  return (
    <div className='bg-blue-100 '>
        <div className='w-full h-[200px] flex justify-evenly flex-wrap items-center bg-blue-100'>
           <div className=''><h1 className='text-3xl flex flex-wrap'>Let Suppliers <span className='border-b-4	border-bottom-width:4px border-orange-600 ml-3'>Find You</span></h1></div>
           <Button label="Get Verified" color="orange" btnSize="48" />
        </div>

    </div>
  )
}

export default GetVerify