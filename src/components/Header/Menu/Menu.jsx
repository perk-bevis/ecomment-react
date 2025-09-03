import React from 'react'

const Menu = ({ content, href }) => {
  return (
    <div className='
    relative cursor-pointer 
    after:content-[""] after:absolute after:bottom-0 after:left-0 
    after:w-full after:h-[3px] after:bg-black after:origin-right
    after:scale-x-0 after:opacity-0
    after:transition-all after:duration-500
    hover:after:scale-x-100 hover:after:opacity-100
    '>
      {content}
    </div>
  )
}

export default Menu