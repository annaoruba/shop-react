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
                        <div className="ProductList__Element">
                        <div className={value.indexSearch.indexOf(this.props.product.id - 1) == -1 ? "none ProductCard" : "block ProductCard"}>
                        <div className="ProductCard__Photo"><img class="ProductCard__Img" src={this.props.product.photoUrl} alt={this.props.product.title} /></div>
                            <div className="ProductCard__Content">
                            <Link to={`/details/${this.props.product.id}`}>
                                <h5 className="card-title" onClick={() => {value.handleDetails(this.props.product.id)}}>{this.props.product.title}</h5>
                            </Link>
                            <div>Cena: {this.props.product.price} zł.</div>
                            <StarRatings
                                rating={this.props.product.rating}
                                starDimension="20px"
                                starSpacing="5px"
                            />
                            <div>{this.props.product.description.slice(0, 150)}...</div>
                            <div>
                            {
                                    this.props.product.inCart ? (<button onClick={() => { value.counterPlus(this.props.product.id) }}><i class="material-icons">add</i></button>) : ""
                            }
                            <button disabled={this.props.product.inCart} onClick={() => {value.addToCart(this.props.product.id)}}>
                                {
                                    this.props.product.inCart ? (<span>w koszyku ({this.props.product.counter})</span>) : (<span>Dodaj</span>)
                                }
                            </button>
                            {
                                    this.props.product.inCart ? (<button onClick={() => { value.counterMinus(this.props.product.id) }}><i class="material-icons">remove</i></button>) : ""
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