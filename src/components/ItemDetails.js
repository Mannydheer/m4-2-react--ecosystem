import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { items, sellers } from '../data';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const ItemDetails = () => {

const {itemId} = useParams();
//get the item from the itemID. 
let item = (items[itemId]);
let seller = sellers[item.sellerId]
const history = useHistory();

    const goBack = () => {
        history.goBack();

    }



    return (
<StyledMainDiv>
    <Image>
    <StyledImg src={item.imageSrc}/>
    </Image>
    <Text>
        <StyledName>{item.name}</StyledName>
        <StyledLatinName>{item.latinName}</StyledLatinName>
        <StyledDesc>{item.description}</StyledDesc>
        <StyledCountry>Product of <Country>{item.countryOfOrigin}</Country></StyledCountry> 

        <Price> {item.quantity > 0 ?<Link to={`/order/${item.id}`}><Buy>${item.price} Buy Now</Buy></Link> : <Buy>Out of Stock</Buy>}</Price>

        <SellerInfo>
            <Seller src={seller.avatarSrc}/>
            <StoreName>Sold By:{seller.storeName}</StoreName>
           
        </SellerInfo>
        <Back onClick={goBack}>Back</Back>


            
    </Text> 
 </StyledMainDiv>

    )
}

export default ItemDetails;

const Image = styled.div`
padding-left: 60px;

`
const Text = styled.div`
display: inline-grid;
grid-template-rows: (6, 1fr)
`
const StyledMainDiv = styled.div `
display: inline-grid;
grid-template-columns: auto auto;
grid-gap: 20px;
position: absolute;
top: 30%;
right: 30%;
`
const StyledImg = styled.img`
width: 500px;
height: 500px;
border-radius: 20px;
`

const StyledName = styled.div`
font-size: 40px;
font-weight: 900;

`
const StyledLatinName = styled.div`
font-style: italic;
color: gray;
padding-top: 5px;
`
const StyledDesc = styled.div`
padding: 30px 0 10px 0;
`
const StyledCountry = styled.div`
padding: 20px 0 40px 0;
font-style: italic;

`
const Country = styled.span`
font-weight: 900;
font-style: italic;
color: black;
font-size: 25px;
`
const Price = styled.div`

width: 70%;
justify-self: start;
a {
    text-decoration: none;
}

`
const Buy = styled.span`

background-color: purple;
color: white;
padding: 20px;
border-radius: 25px;

&:hover {
    background-color: pink;
    color: purple;
    transition: 0.5s all ease;


}

`

const Seller = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
`
const SellerInfo = styled.div`
padding: 20px 20px 20px 0;

`
const StoreName = styled.span`
font-size: 20px;
`

const Back = styled.button`
border-radius: 25px;
background-color:purple;
color: white;
transition: 0.2s ease all;


&:hover {
    background-color: pink;
    color: purple;
    cursor: pointer;
}
`
