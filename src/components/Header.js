import React from "react";
import styled from 'styled-components';
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
    <React.Fragment>
        <StyledHeader>
            <StyledFruit>Fruit Emporium</StyledFruit>
            <StyledNavLeft>
               <NavLink exact to="/" activeStyle={{textDecoration: 'underline',color: 'pink'}}><StyledNav>Home</StyledNav></NavLink>
               <NavLink exact to="/about" activeStyle={{textDecoration: 'underline', color: 'pink'}}><StyledNav>About</StyledNav></NavLink>
               <NavLink exact to="/sellers" activeStyle={{textDecoration: 'underline', color: 'pink'}}><StyledNav>Sellers</StyledNav></NavLink>


                {/* <Link to="/"><StyledNav>Home</StyledNav></Link> */}
                {/* <Link to="/about"><StyledNav>About</StyledNav></Link> */}
            </StyledNavLeft>
        </StyledHeader>
    </React.Fragment>
    )

}

export default Header;

const StyledFruit = styled.span`
font-size:50px;
font-weight: bold;
padding: 10px;
color: pink;

`
const StyledNav = styled.span`
padding: 5px 20px 5px 20px;
color: white;
background-color: none;
font-size: 25px;
margin-right: 20px;

&:hover {
    
    border-radius: 25px;
    background-color: pink;
    color: black;
}
`
const StyledNavLeft = styled.span`
margin-top: 10px;

cursor:pointer;
padding: 10px;

`
const StyledHeader = styled.header`
a {
    text-decoration: none;
}

padding: 20px;
background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);display:flex;
justify-content: space-between;
height: 10vh;

`