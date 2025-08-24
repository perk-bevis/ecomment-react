import React from 'react'
// mỗi một trang web nó sẽ có một cái layout riêng và để để để bọc tất cả những cái content
// của cái trang web đó trong cái layout
// thì cái tham số của cái main layout này
// nó sẽ là một cái props props đó nó chính
// là cái children children đại diện cho
// tất cả những cái function component nằm trong cái layout này 
const MainLayout = ({children}) => {
  return (
    <main className='flex justify-center'>
      <div className='w-[1250px]'>
        {children}
      </div>
    </main>
  )
}

export default MainLayout 
