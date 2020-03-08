import React from 'react';
import {sellers} from '../data'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Sellers = () => {

    let listSellers = Object.values(sellers);

    return (
    <DivImage>
               {
            listSellers.map(seller => {
                return (
                    <Link to={`/sellers/${seller.id}`}><SellerImage src={seller.avatarSrc}/></Link>
                )
            })
               }
    </DivImage>

      
        
    )


}

export default Sellers;

const SellerImage = styled.img `
width: 400px;
height: 400px;
border-radius: 50%;

&:hover {
    opacity: 0.6;
    transition: 1s ease;
    transform: scale(1.2,1.2);

}
`

const DivImage = styled.div `
display: flex;
justify-content: space-evenly;
align-items: center;
height: 100vh;
`