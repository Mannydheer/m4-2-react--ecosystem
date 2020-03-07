import React from 'react';
import { useParams } from 'react-router-dom';
import { items, sellers } from '../data';
import styled from 'styled-components';

const StyledMainDiv = styled.div `
display: flex;
justify-content: center;
`
const StyledImg = styled.img`
width: 300px;
height: 300px;
border-radius: 20px;
`

const StyledName = styled.div`
`
const StyledLatinName = styled.div`
`
const StyledDesc = styled.div`
`
const StyledCountry = styled.div`
`
const Price = styled.div`
background-color: purple;
color: white;
padding: 10px;
`

const Seller = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const ItemDetails = () => {
const {itemId} = useParams();
let allItems = Object.values(items);
let allSellers = Object.values(sellers);


    return (
        allItems.map(item => {
            if (item.id === itemId) {
                return <StyledMainDiv>
                <div>
                <StyledImg src={item.imageSrc}/>
                </div>
                <div>
                    <StyledName>{item.name}</StyledName>
                    <StyledLatinName>{item.latinName}</StyledLatinName>
                    <StyledDesc>{item.description}</StyledDesc>
                    <StyledCountry>Product of {item.countryOfOrigin}</StyledCountry> 
                    <Price> {item.quantity > 0 ? <span>${item.price} Buy Now</span> : <span>Out of Stock</span>}</Price>
                    <div>  {allSellers.map(seller => {
                        if (seller.id === item.sellerId) {
                            return (<span>
                                <Seller src={seller.avatarSrc}/>
                                <span>Sold By:{seller.storeName}</span>
                                <span>{seller.id}</span>
                            </span>
                            
                            )
                        } 
                    })}</div> 
                </div>
                </StyledMainDiv>
      
            }
        })
        
    )
}



export default ItemDetails;