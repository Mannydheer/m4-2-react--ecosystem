import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




//ADD PROPS

const ListingGrid = (itemData) => {


    return (
    <StyledProduct>
        <ItemName>{itemData.name}</ItemName>
        <Link to={`/items/${itemData.id}`}>
            <StyledImage src={itemData.image}/>
        </Link>
        <LatinName>{itemData.latinName}</LatinName>
    </StyledProduct>
    )

    


}

export default ListingGrid;

const StyledProduct = styled.div `
font-size: 20px;
font-weight: bold;
display: inline-grid;
grid-template-rows: auto auto auto;
box-shadow: 0px 21px 34px -9px rgb(63,78,118);
border-radius: 25px;


`
const ItemName = styled.span`
justify-self: center;
font-size: 30px;

`
const StyledImage = styled.img `
width: 100%;
height: 100%;
border-radius: 25px;

&:hover {
    opacity: 0.5;
    transition: 0.5s;
    transform: scale(1.2,1.2);
}

`

const LatinName = styled.span`
justify-self: center;

`