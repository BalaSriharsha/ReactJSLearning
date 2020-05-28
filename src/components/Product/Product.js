import React from 'react';
import axios from 'axios';
import './Product.css';

function Product() {

    const url = "https://5ece0f0d7c528e00167cda0f.mockapi.io/products/7"
    const [product, setProduct] = React.useState(null)

    let content;

    if(product){
        content = 
        <div className="product-details">
            {product.name}
            <img width="375px" height="375px" src={product.images} alt={product.name} />
        </div>
    }

    React.useEffect(()=>{
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })    
    },[url])

    return(
        <div>
            {content}
        </div>
    )
}

export default Product;