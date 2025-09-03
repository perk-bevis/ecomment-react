import clsx from 'clsx'
import React from 'react'

const MyButton = ({isPrimary = false, content}) => {
  
const btn = "cursor-pointer outline-none h-[42px] bg-[#333] text-white border-solid border-[1px] w-[50%] items-center hover:bg-transparent hover:text-[#888] hover:border-[#888] hover:border-solid hover:border-[1px]"
  const primaryBtn = "bg-[#333] text-[#fff] hover:bg-transparent hover:text-[#333] hover:border-[1px] hover:border-solid hover:border-[#333]"
  const secondaryBtn = "bg-[#fff] text-black border-[1px] border-solid border-[#333] hover:bg-[#333] hover:text-[#fff]"
  const buttonClasses = clsx(
   btn, 
   {
    [primaryBtn] : isPrimary,
    [secondaryBtn] : isPrimary
   }
  );
  return <button className={buttonClasses}>{content}</button>
}

export default MyButton