import React, { Component } from 'react';
import { ProductConsumer } from '../context'


let total = 0;

class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => (<><table className="table">   <thead>
    <tr>
      <th scope="col">Nazwa</th>
      <th scope="col">Ilość</th>
      <th scope="col">Cena</th>
      <th scope="col">Razem</th>
      <th scope="col">Dodaj</th>
      <th scope="col">Odejmij</th>
    </tr>
  </thead><tbody>{value.cart.map(prodInCart =>
                    prodInCart.counter > 0 ?
                        (
                            <tr>
                                <td>{prodInCart.title}</td>
                                <td>{prodInCart.counter}</td>
                                <td>{prodInCart.price}</td>
                                <td>{prodInCart.counter * prodInCart.price}</td>
                                <td><button onClick={() => { value.counterPlus(prodInCart.id) }}><i class="material-icons">add</i></button></td>
                                <td><button onClick={() => { value.counterMinus(prodInCart.id) }}><i class="material-icons">remove</i></button></td>
                            </tr>
                        ) : ""
                )}</tbody></table> <div>Suma: {value.sumTotal()}</div></>)
                }
            </ProductConsumer>
        );
    }
}

export default Cart;