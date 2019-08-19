import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>

                {value => (
                    <div>
                        <div className="ProductDetails">
                            <div className="ProductDetails__PhotoCol">
                            <div class="d-flex"><i class="material-icons">keyboard_backspace</i> Powrót</div>
                                <div className="ProductDetails__Photo">
                                    <img className="ProductDetails__Img" src={value.detailsProduct.photoUrl} />
                                </div>
                            </div>
                            <div className="ProductDetails__DetailsCol">
                                <h3>{value.detailsProduct.title}</h3>
                                <StarRatings
                                rating={value.detailsProduct.rating}
                                starDimension="35px"
                                starSpacing="5px"
                                starRatedColor="#DAA520"
                                className="ProductCard_starRatings"
                            />
                                <div className="ProductDetails__Description" >{value.detailsProduct.description}</div>
                                <div class="ProductCard__Price">{value.detailsProduct.price} zł</div>
                                <button class="ProductCard__Button" ><span>Dodaj do koszyka<i class="material-icons">shopping_cart</i></span>
                                </button>
                            </div>
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