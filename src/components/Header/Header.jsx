import React from 'react'
import BoxIcon from './BoxIcon/BoxIcon'
import { dataIcon, dataMenu } from './constants'
import Menu from './Menu/Menu'
import Logo from '../../assets/icons/images/Logo-retina.png'
import reloadIcon from '../../assets/icons/svgs/reloadIcon.svg'
import headIcon from '../../assets/icons/svgs/heart.svg'
import cartIconIcon from '../../assets/icons/svgs/cartIcon.svg'

const MyHeader = () => {
  return (
    <div className='flex justify-center items-center absolute top-0 left-0 right-0 z-50'>
      <div className='w-[1250px] flex items-center justify-between h-20 '>
        <div className='flex justify-center items-center gap-5'>
          <div className='flex justify-center items-center gap-2.5 '>
            {/* <BoxIcon type={"fb"} href={''}/> */}
            {
              dataIcon.map((item,index) => {
                return <BoxIcon key={index} type={item.type} href={item.href} />
              })
            }
          </div>
          <div className='flex justify-center items-center gap-10'>
            {
              dataMenu.slice(0, 3).map((item, index) => {
                return <Menu key={index} content={item.content} href={item.href} />
              })
            }
          </div>
        </div>
        <div>
          <img src={Logo} alt="Logo" className='w-[153px] h-[53px]' />
        </div>
        <div className='flex justify-center items-center gap-5'>
          <div className='flex justify-center items-center gap-5'>
            {
              dataMenu.slice(3, dataMenu.length).map((item,index) => {
                return <Menu key={index} content={item.content} href={item.href} />
              })
            }
          </div>
          <div className='flex justify-center items-center gap-2.5'>
            <img width={26} height={26} src={reloadIcon} alt="" />
            <img width={26} height={26} src={headIcon} alt="" />
            <img width={26} height={26} src={cartIconIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyHeader
