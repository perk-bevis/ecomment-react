import React from 'react'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import MyButton from '../Button/Button'

const CountdownBanner = () => {
     const targetDate = '2025-12-31T00:00:00'
    return (
        <div className='h-[489px] w-1/2 bg-no-repeat bg-cover' style={{
           backgroundImage: `url(https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/photo-of-man-wearing-white-hoodie-5474310.jpeg)`
        }}>
            <div className='flex justify-center items-center gap-2.5'>
                <CountdownTimer targetDate={targetDate}/>
            </div>
            <p className='text-[28px] mb-[5px] text-center text-[#222]'>The classics make a comeback</p>
            <div className='text-center mt-5'>
                <MyButton content={"shop now"}/>
            </div>
        </div>
    )
}

export default CountdownBanner