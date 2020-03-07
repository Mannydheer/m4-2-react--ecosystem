import React from 'react';
import ListingGrid from './ListingGrid';
import styled from 'styled-components';


const StyledMainProductDiv = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
font-family: 'Raleway', sans-serif;
`

const StyledFruitText = styled.div`
font-family: 'Raleway', sans-serif;
font-size: 15px;
padding: 10px;

`


const Home = (data) => {

   let products = data.data;
   let allProducts = Object.values(products)
    return <React.Fragment>
        
        <StyledFruitText>
        Fruit emporium sells the finest fruits from this world and beyond.
        </StyledFruitText>
        <StyledFruitText>
        Browse items:
        </StyledFruitText>
    <StyledMainProductDiv>
         {
        allProducts.map(product => {
            return <ListingGrid image={product.imageSrc} name={product.name} latinName={product.latinName} id={product.id}/>    
        }) 
    }
    </StyledMainProductDiv>

    </React.Fragment>
}

export default Home;