import React, { Component } from 'react';
import data from './data/data.json';

const ProductContext = React.createContext();
//two components:
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        // products: [...data.products],
        products: [],
        //detailsProduct dodac
        detailsProduct: {},
        cart: [],
        searchProducts: [],
        modalOpen: false,
        lastAdd: '',
        totalPrice: 0,
        indexSearch: [0,1,2,3,4,5,6,7,8,9],
    };

    componentDidMount() {
        this.setProducts();
    }

    componentDidUpdate() {
        //to do - usunąć z koszyka tam gdzie counter = 0
        this.sumTotal();
        console.log('componentDidUpdate');
    }

    setProducts = () => {
        let productsTab = [];
        data.products.forEach(element => {
            console.log(element)
            const product = { ...element };
            productsTab = [...productsTab, product]
            console.log(productsTab)
            this.setState(
                () => {
                    console.log("setState:" + productsTab)
                    return { products: productsTab }
                }
            )
        });
        console.log(this.state.products)
    }

    getDetails = (id) => {
        const product = this.state.products.find(item => item.id === id);
        //console.log(product);
        return product;
    }

    handleDetails = (id) => {
        const product = this.getDetails(id);
        this.setState(
            () => {
                console.log("setStatedetails:" + product)
                return { detailsProduct: product }
            }
        )
    }

    addToCart = (id) => {
        console.log("add to cart")
        let productTemp = [...this.state.products];
        const index = productTemp.indexOf(this.getDetails(id));
        let product = productTemp[index];
        product.inCart = true;
        product.counter = product.counter + 1;
        let price = product.price * product.counter;
        let total = price;
        debugger;
        this.setState(
            () => {
                return {
                    products: productTemp,
                    cart: [...this.state.cart, product],
                    modalOpen: true,
                    lastAdd: product
                }
            }
        )
        setTimeout(() => {
            this.setState({
                modalOpen: false
            })
        }, 2000);
    }

    handleSearch = (e) => {
        console.log(e.target.value)
        let productTemp = [...this.state.products];
        //console.log("prod for search: " + productTemp.id)
        let titles = productTemp.map(prod => prod.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
        console.log(titles);
        let check = (title) => {
            return title === true;
          }
        // let indexSearch = titles.findIndex(check);
        // console.log(indexSearch)
        let indices = [];
        let idx = titles.indexOf(true)
        console.log(idx)
        while (idx != -1) {
        indices.push(idx);
        idx = titles.indexOf(true, idx + 1);
        }
        //indeksy do zwrocenia
        console.log("indeksy: " + indices)
        const listSearch = indices.map(id => this.getDetails(id+1))
        console.log(listSearch)
        // return (indices + 1)
        this.setState(
            () => {
                return {
                    indexSearch: indices,
                }
            }
        )
        // TO DO !!!!
        // let product = titles.map(title => true ? title.id : '')
    }

    counterPlus = (id) => {
        console.log("counter plus")
        let productTemp = [...this.state.products];
        const index = productTemp.indexOf(this.getDetails(id));
        let product = productTemp[index];
        product.inCart = true;
        product.counter = product.counter + 1;
        let price = product.price * product.counter;
        let total = price;
        console.log(productTemp)
        this.setState(
            () => {
                return {
                    products: productTemp,
                    cart: [...this.state.cart],
                }
            }
        )
        //debugger;
    }

    counterMinus = (id) => {
        console.log("counter minus")
        let productTemp = [...this.state.products];
        let tempCart = [...this.state.cart]
        const index = productTemp.indexOf(this.getDetails(id));
        let product = productTemp[index];
        let productCart = tempCart[index]
        if (product.counter == 1) {
            productCart.inCart = false;
            tempCart.splice(index, 1);
        }
            product.counter = product.counter - 1;
            let price = product.price * product.counter;
            let total = price;
            this.setState(
                () => {
                    return {
                        products: productTemp,
                        cart: tempCart,
                    }
                }
            )
        // product.counter = 0 ? product.inCart = false : product.inCart = true;
        debugger;
    }

    sumTotal = () => {
        let total = 0;
        let totalPriceTab = this.state.cart.map(prodInCart => total += prodInCart.counter * prodInCart.price)
        // let totalPrice = this.state.cart.reduce(function (sum, tax) {
        //     return sum + tax.total;
        // }, 0);
        let totalPrice = totalPriceTab[totalPriceTab.length - 1]
        console.log(totalPriceTab[totalPriceTab.length - 1])
        debugger;
        return totalPrice;
    }

    sumProdInCart = () => {
        console.log("pppppppppppppp");
        let totalProd = 0;
        let totalProdTab = this.state.cart.map(prodInCart => totalProd += prodInCart.counter)
        // let totalPrice = this.state.cart.reduce(function (sum, tax) {
        //     return sum + tax.total;
        // }, 0);
        let totalProds = totalProdTab[totalProdTab.length - 1]
        console.log(totalProdTab[totalProdTab.length - 1])
        debugger;
        return totalProd;
    }

    // inCartStatus = () => {
    //     console.log("in cart state 1: " + this.state.products[0].inCart)
    //     console.log("in cart state 1 w jsonie: " + data.products[0].inCart)
    //     const newProduct = [...this.state.products]
    //     newProduct[0].inCart = true
    //     this.setState = (()=> {
    //         return {products: newProduct}
    //     })
    //     console.log("in cart state 1: " + this.state.products[0].inCart)
    //     console.log("in cart state 1 w jsonie: " + data.products[0].inCart)
    // }


    render() {
        return (
            <ProductContext.Provider value={{ ...this.state, handleDetails: this.handleDetails, addToCart: this.addToCart, handleSearch: this.handleSearch, counterPlus: this.counterPlus, counterMinus: this.counterMinus, sumTotal: this.sumTotal, sumProdInCart: this.sumProdInCart }}>
                {/* <button onClick={this.inCartStatus}>test</button> */}
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
