import React from 'react'
import MyHeader from '../Header/Header'
import MyBanner from '../Banner/Banner'
import AdvanceHeadling from '../AdvanceHeadling/AdvanceHeadling'

const HomePage = () => {
    return (
        <div>
            <div className='relative z-[-1]'>
                <MyHeader />
                <MyBanner />
                <AdvanceHeadling/>
            </div>
        </div>
    )
}

export default HomePage