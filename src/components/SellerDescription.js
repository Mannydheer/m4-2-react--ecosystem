import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { sellers, items } from '../data';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const SellerDescription = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();

    }

    const {name} = useParams();
    let clickedSeller = sellers[name]
    let listofProducts = Object.values(items)
    console.log(listofProducts)

    return (
        <MainDiv>
            <Description>
                <Desc>Name: {clickedSeller.id}</Desc>
                <Desc>Owner of: {clickedSeller.storeName}</Desc>
                <Desc>{clickedSeller.description}</Desc>
                <Title>View My Products:</Title>
                <Pictures>
            <div>
                {
                    listofProducts.map(product => {
                        {if (product.sellerId === clickedSeller.id) {
                            return <Link to={`/items/${product.id}`}><ProductImage src={product.imageSrc}/></Link>
                        } }
                    })
                }
            </div>
                </Pictures>

            </Description>
            <div>
                <Image src={clickedSeller.avatarSrc}/>
            </div>
            <Back onClick={goBack}>Back</Back>


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
const ProductImage = styled.img `
width: 100px;
height: 100px;
border-radius: 50%;
padding: 10px;

`
const Desc = styled.div `
font-size: 25px;
line-height: 2.5;

`
const Title = styled.div `
font-size: 40px;
font-weight: 900;
line-height: 2;

`
const Pictures = styled.div `
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