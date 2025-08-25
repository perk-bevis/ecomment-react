import React from 'react'

const MyButton = ({content}) => {
  return <button className='cursor-pointer outline-none h-[42px] bg-[#333] text-white border-solid border-[1px] w-[50%] items-center hover:bg-transparent hover:text-[#888] hover:border-[#888] hover:border-solid hover:border-[1px]'>{content}</button>
}

export default MyButton