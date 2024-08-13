import ProductItem from "./components/Product_Item";

// const dummyProductData = ['Product1','product2','Product3'];

function ProductList(props){
    const {name, city,productList} = props;
    return (
        <div>
            <h3>ECommerce Project</h3>
            {/* <ProductItem/> */}
            <h3>My Name is {name} and my city {city}</h3>

            <ul>
                {
                    productList.map((item,i)=>(
                        <ProductItem singleProductItem={item} key={i}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductList;