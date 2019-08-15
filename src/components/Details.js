import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom'

class Details extends Component {
    render() {
        return (
            <ProductConsumer>

                {value => (
                    <div>
                        <div className="ProductDetails">
                            <div className="ProductDetails__PhotoCol">
                                <div className="ProductDetails__Photo">
                                    <img className="ProductDetails__Img" src={value.detailsProduct.photoUrl} />
                                </div>
                            </div>
                            <div className="ProductDetails__DetailsCol">
                                <h5>{value.detailsProduct.title}</h5>
                                <div>{value.detailsProduct.price} zł.</div>
                                <div className="ProductDetails__Description" >{value.detailsProduct.description}</div>
                                <button class="ProductCard__Button" ><span>Dodaj do koszyka<i class="material-icons">shopping_cart</i></span>
                                </button>
                            </div>

                            <div class="d-flex"><i class="material-icons">keyboard_backspace</i> Powrót</div>
                        </div>
                    </div>
                )
                }
                {/* to do back to product, add to cart 3:00 */}
            </ProductConsumer>
        );
    }
}

export default Details;