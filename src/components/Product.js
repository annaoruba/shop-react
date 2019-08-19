import React, { Component } from 'react';
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import StarRatings from 'react-star-ratings';

class Product extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => (
                        //style={this.state.indexSearch.indexOf(this.props.product.id) == -1 ? "display:none" : "display:block"}
                        <div className={value.indexSearch.indexOf(this.props.product.id - 1) == -1 ? "none ProductList__Element" : "block ProductList__Element"}>
                        <div className="ProductCard">
                        <div className="ProductCard__Photo"><img class="ProductCard__Img" src={this.props.product.photoUrl} alt={this.props.product.title} /></div>
                            <div className="ProductCard__Content">
                            <Link to={`/details/${this.props.product.id}`}>
                                <h5 className="card-title" onClick={() => {value.handleDetails(this.props.product.id)}}>{this.props.product.title}</h5>
                            </Link>
                            <StarRatings
                                rating={this.props.product.rating}
                                starDimension="20px"
                                starSpacing="5px"
                                starRatedColor="#DAA520"
                            />
                            <div className="ProductCard_Description">{this.props.product.description.slice(0, 150)}...</div>
                            <div className="ProductCard_Price">{this.props.product.price} zł</div>
                            <div className="d-flex align-items-center">
                            {
                                    this.props.product.inCart ? (<button class="ProductCard__Counter d-flex align-items-center" onClick={() => { value.counterPlus(this.props.product.id) }}><i class="material-icons">add</i></button>) : ""
                            }
                            <button class="ProductCard__Button" disabled={this.props.product.inCart} onClick={() => {value.addToCart(this.props.product.id)}}>
                                {
                                    this.props.product.inCart ? (<span>w koszyku ({this.props.product.counter})</span>) : (<span>Dodaj do koszyka<i class="material-icons">shopping_cart</i></span>)
                                }
                            </button>
                            {
                                    this.props.product.inCart ? (<button class="ProductCard__Counter d-flex align-items-center" onClick={() => { value.counterMinus(this.props.product.id) }}><i class="material-icons">remove</i></button>) : ""
                            }
                            </div>
                            </div>
                        </div>
                        </div>
                    )
                }

            </ProductConsumer>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number
        //to do
    }).isRequired
}

export default Product;