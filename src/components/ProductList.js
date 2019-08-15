import React from 'react';
import Product from './Product.js'
import { ProductConsumer } from '../context'



class ProductList extends React.Component {

    render() {
        //console.log(this.state.products);
        return (
            <div>
                    <div className="ProductList">
                        {/* <Product /> */}
                        <ProductConsumer>
                            {a => {
                                return a.products.map(product => {
                                    return <Product key={product.id} product={product} />;
                                });
                            }}
                        </ProductConsumer>
                    </div>
            </div>
        )
    }
}

export default ProductList