import React from 'react'
import MainLayout from '../Layout/Layout'
import { dataInfo } from './constants'
import InfoCard from './InfoCard/InfoCard'

const MyInfo = () => {
    return (
        <>
            <MainLayout>
                <div className="flex justify-between items-center bg-[#333] mt-[-75px] px-[55px] py-[20px]">
                    {dataInfo.map((item) => (
                        <InfoCard
                            key={item.title}
                            content={item.title}
                            description={item.description}
                            src={item.src}
                        />
                    ))}
                </div>
            </MainLayout>
        </>
    )
}

export default MyInfo