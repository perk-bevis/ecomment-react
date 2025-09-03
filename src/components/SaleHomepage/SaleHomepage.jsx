import React from 'react'
import MyButton from '../Button/Button'

const SaleHomepage = () => {
    return (
        <div className='flex justify-between items-center gap-2.5 mt-24'>
            <div>
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>
            <div>
                <h2 className='text-4xl text-[#222] font-normal text-center'>Sale Of The Year</h2>
                <p className='text-[16px] text-[#555] font-light text-center max-w-[400px] leading-[25px]'>Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.</p>
                <div className='text-center mt-2.5'>
                    <MyButton content={"read more"} isPrimary/>
                </div>
            </div>
            <div className=''>
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    )
}

export default SaleHomepage
