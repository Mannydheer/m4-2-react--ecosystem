import React from 'react';
import GlobalStyles from './GlobalStyles';

import Header from './Header'
import About from './About'
import Home from './Home'
import Sellers  from './Sellers'
import Order from './Order'

import SellerDescription from './SellerDescription';


import ItemDetails from './ItemDetails'
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import {items} from "../data";

function App(props) {
  console.log(props)
  return (
<BrowserRouter>
     <GlobalStyles/>

    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/"><Home data={items}></Home></Route>
        <Route exact path="/about"><About></About></Route>
        <Route exact path="/sellers"><Sellers></Sellers></Route>
        <Route exact path="/sellers/:name"><SellerDescription></SellerDescription></Route>
        <Route exact path="/items/:itemId"><ItemDetails></ItemDetails></Route>
        <Route exact path="/order/:itemId"><Order></Order></Route>
      </Switch>
     </div>



     
</BrowserRouter>




  )
}

export default App;
