import React from 'react';
import {sellers} from '../data'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useHistory} from "react-router";



const Sellers = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();

    }

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
        <Back onClick={goBack}>Back</Back>

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
const Back = styled.button`
border-radius: 25px;
background-color:purple;
color: white;
transition: 0.2s ease all;
padding: 30px;


&:hover {
    background-color: pink;
    color: purple;
    cursor: pointer;
}
`