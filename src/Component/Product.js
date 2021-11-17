import React, { Component } from 'react'
import ProductList from './ProductList'
import styled from 'styled-components';
import {productConsumer} from '../context';


export default class Product extends Component {
    
    render() {
        const { id, name, img, price} = this.props.product;
        return (
           <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5">
                        <img src={img} alt="product" className="card-img-top"/>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{name}</p>
                        <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>{price}
                        </h5>
                    </div>

                </div>

           </ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div`
 .img-container{
     position: relative;
     overfow: hidden;
 }
`