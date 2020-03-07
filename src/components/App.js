import React from 'react';

import Header from './Header'
import About from './About'
import Home from './Home'
import ItemDetails from './ItemDetails'
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import {sellers, items} from "../data"

function App(props) {
  return (
    <BrowserRouter>
      <Header>
      </Header>
      <Switch>
      <Route exact path="/"><Home data={items}></Home></Route>
      <Route exact path="/about"><About></About></Route>
      <Route exact path="/items/:itemId"><ItemDetails></ItemDetails></Route>

      </Switch>
     
    </BrowserRouter>




  )
}

export default App;
