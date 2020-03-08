import React from 'react';
import ListingGrid from './ListingGrid';
import styled from 'styled-components';


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
</React.Fragment>)
}

export default Home;



const StyledMainProductDiv = styled.div`
background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
display:inline-grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 100px 150px;
padding: 50px;
position: absolute;
top: 30%;


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