import React from 'react'
import MainLayout from '../Layout/Layout'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import CountdownBanner from '../CountdownBanner/CountdownBanner'
import ProductItem from '../ProductItem/ProductItem'

const HeadingListProduct = ({ data }) => {
    console.log(data)
    // const targetDate = '2025-12-31T00:00:00'
    return (

        <MainLayout className='h-[455px]'>
            {/* <CountdownTimer targetDate={targetDate}/> */}
            <div className='flex justify-between items-center gap-2.5'>
                <CountdownBanner />
                <div className='flex justify-center gap-2.5'>
                    {data.map((item) => {
                        return (
                            <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                        />
                        )
                    })}
                </div>
            </div>
        </MainLayout>
    )
}

export default HeadingListProduct