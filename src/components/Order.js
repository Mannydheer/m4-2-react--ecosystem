import React from 'react';
import { useParams } from 'react-router-dom';
import {items} from '../data';
import styled from 'styled-components';



const Order = () => {
    const {itemId} = useParams();
    let showProduct = items[itemId]
  
    return (
    <MainDiv>
            <Thankyou> Thank you for you Purchase!
            <Cart src="https://img.icons8.com/carbon-copy/100/000000/favorite-cart.png"/>
            </Thankyou>
            <Summary>Order Summary:</Summary>
            <Product>{showProduct.name}</Product>
            <div>Quantity: {showProduct.quantity}</div>
            <div>Total: ${showProduct.price} CAD </div>
            <div><Image src={showProduct.imageSrc}/></div>

    </MainDiv>
    )
}

export default Order;

const MainDiv = styled.div`
margin: 0;
padding: 0;
text-align: center;

`
const Image = styled.img`
width: 150px;
height: 150px;

`
const Thankyou = styled.div`
background-image: linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%);
padding: 100px;
font-size: 40px;
`

const Summary = styled.div`
padding: 20px;
font-weight: 900;
font-size: 30px;
`
const Product = styled.div`
`
const Cart = styled.img`
width: 60px;
height: 60px;
`