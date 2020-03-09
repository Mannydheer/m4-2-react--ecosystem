import React from 'react';
import ListingGrid from './ListingGrid';
import styled from 'styled-components';
import { Link } from "react-router-dom";



const Home = (data) => {

   let products = data.data;
   let allProducts = Object.values(products)
    return (
<React.Fragment>        
    <StyledFruitText>
        Fruit emporium sells the finest fruits from this world and beyond.
    </StyledFruitText>
    <BrowseItems>
        Browse items:
    </BrowseItems>
    <StyledMainProductDiv>
    {
        allProducts.map(product => {
            return <ListingGrid image={product.imageSrc} name={product.name} latinName={product.latinName} id={product.id}/>    
        }) 
    }
    </StyledMainProductDiv>

    <Footer>

        <SocialMedia><Link to='#' className="fa fa-facebook"></Link></SocialMedia>
        <SocialMedia><Link to='#' className="fa fa-twitter"></Link></SocialMedia>
        <SocialMedia><Link to='#' className="fa fa-instagram"></Link></SocialMedia>
    </Footer>
</React.Fragment>)
}

export default Home;


const Footer = styled.footer`
height: 300px;
color: black;
background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);display:flex;
display: flex;
justify-content: center;
align-items: center;
`

const SocialMedia = styled.span`
padding: 30px;

a {
    text-decoration: none;
}

.fa-facebook{
    font-size: 1.5em;

    color: white;
    &:hover {
        color: pink;
    }
}
.fa-twitter{
    font-size: 1.5em;

    color: white;
    &:hover {
        color: pink;
    }
}
.fa-instagram{
    font-size: 2.5em;

    color: white;
    &:hover {
        color: pink;
    }
}
`

const StyledMainProductDiv = styled.div`
background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
display:inline-grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 100px 150px;
padding: 50px;
`

const StyledFruitText = styled.div`
font-size: 25px;
text-align: center;
padding: 40px;
font-style: italic;
font-weight: bolder;
`

const BrowseItems= styled.div`
position: absolute;
top: 25%;
padding-left: 10px;
font-weight: bolder;
text-decoration: underline;



`