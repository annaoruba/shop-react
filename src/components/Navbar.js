import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar bg-light sticky-top">
                <Link to="/">logo</Link>
                <ProductConsumer>
                    {value => (<div><input className="inputSearch" placeholder="Szukaj..." onChange={(e) => { value.handleSearch(e) }} /></div>)
                    }

                </ProductConsumer>
                <Link to="/cart">Koszyk</Link>
            </nav>
        )
    }
}

export default Navbar