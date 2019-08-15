import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom'

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                
                                    {value=> (<div>{value.detailsProduct.title}</div>)
                                        }
                {/* to do back to product, add to cart 3:00 */}
            </ProductConsumer>
        );
    }
}

export default Details;