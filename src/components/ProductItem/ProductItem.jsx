import React from 'react'
import cartIcon from '../../assets/icons/svgs/cartIcon.svg'
const ProductItem = ({ src ,prevSrc,name ,price}) => {
    return (
        <div>
            <div className="w-full h-[353px] relative">
                <img
                    src={src}
                    alt=""
                    className="w-full h-full"
                />
                <img
                    src={prevSrc}
                    alt=""
                    className="absolute opacity-0 top-0 left-0 right-0 bottom-0 hover:opacity-100"
                />

                <div className='absolute bottom-5 right-5 bg-white flex flex-col items-center space-y-4 p-2 rounded-md shadow-lg'>
                    <div>
                        <img src={cartIcon} alt="" className='w-6 h-6'/>
                    </div>
                    <div>
                        <img src={cartIcon} alt="" className='w-6 h-6'/>
                    </div>
                    <div>
                        <img src={cartIcon} alt="" className='w-6 h-6'/>
                    </div>
                    <div>
                        <img src={cartIcon} alt="" className='w-6 h-6'/>
                    </div>
                </div>
                <div className=''>{name}</div>
                <div className=''>{price}</div>
            </div>
        </div>
    )
}

export default ProductItem