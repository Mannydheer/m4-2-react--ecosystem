import React from 'react';
import { useParams } from 'react-router-dom';
import { sellers } from '../data';
import styled from 'styled-components';


const SellerDescription = () => {

    const {name} = useParams();
    let clickedSeller = sellers[name]

    return (
        <MainDiv>
            <Description>
                <Desc>Name: {clickedSeller.id}</Desc>
                <Desc>Owner of: {clickedSeller.storeName}</Desc>
                <Desc>{clickedSeller.description}</Desc>
            </Description>
            <div>
                <Image src={clickedSeller.avatarSrc}/>
            </div>
        </MainDiv>
    )
}

export default SellerDescription;

const MainDiv = styled.div `
display: flex;
justify-content: center;
justify-content: space-evenly;
align-items: center;
padding-top: 40px;
`

const Description = styled.div `
font-size: 50px;
`
const Image = styled.img `
width: 500px;
height: 500px;
border-radius: 50%;

`
const Desc = styled.div `
font-size: 25px;
line-height: 2.5;

`