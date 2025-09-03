import React, { useEffect } from 'react'
import MyHeader from '../Header/Header'
import MyBanner from '../Banner/Banner'
import AdvanceHeadling from '../AdvanceHeadling/AdvanceHeadling'
import MyInfo from '../Info/Info'
import HeadingListProduct from '../HeadingListProduct/HeadingListProduct'
import { getProducts } from '../../apis/productsService'
import PopularProduct from '../PopularProduct/PopularProduct'
import { useState } from 'react'
import SaleHomepage from '../SaleHomepage/SaleHomepage'

const HomePage = () => {

    const [listProducts, setListProducts] = useState([])
    console.log(listProducts)

    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents)
        })
    }, [])

    return (
        <>
            <div className='relative'>
                <MyHeader />
                <MyBanner />
                <MyInfo />
                <AdvanceHeadling />
                <HeadingListProduct data={listProducts.slice(0,2)} />
                <PopularProduct data={listProducts.slice(2, listProducts.length)}/>
                <SaleHomepage />
            </div>
        </>
    )
}

export default HomePage