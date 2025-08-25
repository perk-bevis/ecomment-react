import React from 'react'
import bannerImage from "../../assets/images/Banner-Ecommerse.jpeg"
import MyButton from '../Button/Button'

const MyBanner = () => {
  return (
    <div className='min-h-[750px] bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className='flex items-center justify-center gap-2.5 flex-col'>
        <h1 className='text-[42px] text-[#222] font-[400px] my-3.5'> XStore Marseille04 Demo </h1>
        <div className='font-[300px] mb-6 text-[#555]'>
            Make yours celebrations even more special this years with
                    beautiful.
        </div>
        <MyButton content={'Go to shop'}/>
      </div>
    </div>
  )
}

export default MyBanner