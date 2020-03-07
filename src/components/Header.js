import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";



const StyledFruit = styled.span`
font-size:30px;
`
const StyledNav = styled.span`
padding: 10px;
color: purple;
background-color: white;

&:hover {
    border-radius: 25px;
    background-color: orange;
}
`
const StyledNavLeft = styled.span`
font-size: 20px;
cursor:pointer;
padding: 10px;

`
const StyledHeader = styled.header`
a {
    text-decoration: none;
}
display:flex;
justify-content: space-between;

`

const Header = () => {
    return (<React.Fragment>
<StyledHeader>
    <StyledFruit>Fruit Emporium</StyledFruit>
    <StyledNavLeft>
<Link to="/"><StyledNav>Home</StyledNav></Link>
<Link to="/about"><StyledNav>About</StyledNav></Link>
    </StyledNavLeft>

</StyledHeader>
    </React.Fragment>
    )

}

export default Header;