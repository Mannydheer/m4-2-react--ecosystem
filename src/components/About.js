import React from 'react';
import styled from 'styled-components';




const About = () => {
    return <StyledDesc>
        <AboutUs>

        
Fruit emporium is founded on a very simple principle: Fruit is good.
We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.
    
</AboutUs></StyledDesc>

}

export default About;

const StyledDesc = styled.div `
position: absolute;
top: 20%;
font-family: 'Raleway', sans-serif;
padding: 100px;

`

const AboutUs =styled.p `
font-size: 30px;
line-height: 2;

`