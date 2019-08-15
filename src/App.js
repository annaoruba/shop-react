import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Details from './components/Details'
import Default from './components/Default'
import Modal from './components/Modal'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="Container">
        <Switch>
          <Route path="/" exact component={ProductList}>
          </Route>
          <Route path="/details" component={Details}>
          </Route>
          <Route path="/cart" component={Cart}>
          </Route>
          <Route component={Default}>
          </Route>
        </Switch>
        <Modal/>
        </main>
      </>
    );
  }
}

export default App;