
function ButtonComponent(){
    return(
        <div>
            <button>Click</button>
        </div>
    )
}


function ProductItem({singleProductItem,key}){
    return (
        <div key={key}>
            <p>{singleProductItem}</p>
            <ButtonComponent/>
        </div>
    )
}

export default ProductItem;