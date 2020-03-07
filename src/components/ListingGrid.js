import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledProduct = styled.div `
font-size: 20px;
margin: 100px;
font-weight: bold;

`
const StyledImage = styled.img `
width: 250px;
height: 250px;

`


//ADD PROPS

const ListingGrid = (userData) => {
    return (
    <StyledProduct>
        <Link to={`/items/${userData.id}`}><StyledImage src={userData.image}/></Link>
        <div>
            {userData.name}
        </div>
        <div>
            {userData.latinName}
        </div>
    </StyledProduct>
    )

    


}

export default ListingGrid;