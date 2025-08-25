import React from 'react'
import MyHeader from '../Header/Header'
import MyBanner from '../Banner/Banner'

const HomePage = () => {
    return (
        <div>
            <div className='relative'>
                <MyHeader />
                <MyBanner />
            </div>
        </div>
    )
}

export default HomePage