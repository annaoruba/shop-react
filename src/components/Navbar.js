import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar sticky-top">
                <div class="container">
                    <Link to="/">logo</Link>
                    <ProductConsumer>
                        {value => (<div class="inputContainer"><input className="inputSearch" placeholder="Szukaj..." onChange={(e) => { value.handleSearch(e) }} /> <i class="material-icons">search</i> </div>)
                        }
                    </ProductConsumer>
                    <Link to="/cart" class="navbar__Cart">
                        <i class="material-icons">shopping_cart</i>
                        <ProductConsumer>{value => (<div class="navbar__Counter">({value.sumProdInCart()})</div>)}</ProductConsumer>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Navbar