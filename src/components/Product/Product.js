import React from 'react';
import axios from 'axios';
import './Product.css';
import LikeButton from '../LikeButton/LikeButton';
import {useParams} from 'react-router-dom';

function Product() {
    const { id } = useParams()
    const url = `https://5ece0f0d7c528e00167cda0f.mockapi.io/products/${id}`
    const [product, setProduct] = React.useState({
        loading: false,
        data: null
    })

    let content;

    if(product.loading){
        content = <h3 style={{marginTop:'75px'}}>Loading......</h3>
    }


    if(product.data){
        content = 
        <div className="product-details">
            <h1 style={{marginTop:'75px'}}>{product.data.name}</h1>
            <img width="375px" height="375px" src={product.data.images} alt={product.data.name} />
        </div>
    }

    React.useEffect(()=>{
        setProduct({
            loading:true,
            data:null
        })
        axios.get(url)
            .then(response => {
                setProduct({
                    loading:false,
                    data: response.data
                })
            })    
    },[url])

    return(
        <div>
            {content}
            <LikeButton/>
        </div>
    )
}

export default Product;