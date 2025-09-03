import MainLayout from "../Layout/Layout"
import ProductItem from "../ProductItem/ProductItem"

const PopularProduct = ({data}) => {
    return <>
        <MainLayout>
            <div className="mt-2.5 flex items-center justify-center gap-2.5 flex-wrap">
                {data.map((item) => {
                    return (
                          <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                        />
                    )
                })}
                {/* <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem /> */}
            </div>
        </MainLayout>
    </>
}

export default PopularProduct