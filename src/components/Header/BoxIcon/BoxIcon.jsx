import React from 'react'
import fbIcon from "../../../assets/icons/svgs/fbIcon.svg"
import insIcon from "../../../assets/icons/svgs/insIcon.svg"
import ytbIcon from "../../../assets/icons/svgs/ytbIcon.svg"
//type phân biệt xem function nào hiển thị icon nào
//nd địa chỉ trang web để chuyển hướng đến trang web đó
const BoxIcon = ({ type, href }) => {
  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon
      case 'ins':
        return insIcon
      case 'ytb':
        return ytbIcon
    }
  }
  return (
    <div className='w-[26px] h-[26px] bg-black rounded-[50%] flex justify-center items-center'>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  )
}

export default BoxIcon