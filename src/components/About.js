import React from 'react';
import styled from 'styled-components';

const StyledDesc = styled.p `
position: absolute;
top: 20%;
font-size: 30px;
font-family: 'Raleway', sans-serif;


`


const About = () => {
    return <StyledDesc>
Fruit emporium is founded on a very simple principle: Fruit is good.
We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.
    </StyledDesc>

}

export default About;