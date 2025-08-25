import React from 'react'

const InfoCard = ({ content, description, src }) => {
    return (
        <div className="flex justify-center items-center gap-[18px] w-[280px] h-[104px]">
            <img width={40} height={41} src={src} alt="TruckIcon" />

            <div className="flex flex-col justify-center items-start gap-[13px] text-white font-light">
                <div className="text-[17px]">{content}</div>
                <div className="text-[16px] text-white/80">{description}</div>
            </div>
        </div>
    )
}

export default InfoCard