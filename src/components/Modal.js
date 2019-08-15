import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
            {
                value => value.modalOpen ? (
                <div className="modalOpen">{value.lastAdd.title} zostal dodany do koszyka</div>
                ) : (<div className="modalOpen modalClose">{value.lastAdd.title} zostal dodany do koszyka</div>)
            }

        </ProductConsumer>
        );
    }
}

export default Modal;