import React, { Component } from 'react';
import { ProductConsumer } from '../context'


let total = 0;

class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => (<><table className="table cartTable">   <thead>
    <tr>
      <th scope="col">Zdjęcie</th>
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
                                <td data-label="Zdjęcie"><img class="cartImg" src={prodInCart.photoUrl} /></td>
                                <td data-label="Nazwa">{prodInCart.title}</td>
                                <td data-label="Ilość">{prodInCart.counter}</td>
                                <td data-label="Cena">{prodInCart.price}</td>
                                <td data-label="Razem">{prodInCart.counter * prodInCart.price}</td>
                                <td data-label="Dodaj"><button className="ProductCard__Counter" onClick={() => { value.counterPlus(prodInCart.id) }}><i class="material-icons">add</i></button></td>
                                <td data-label="Odejmij"><button className="ProductCard__Counter" onClick={() => { value.counterMinus(prodInCart.id) }}><i class="material-icons">remove</i></button></td>
                            </tr>
                        ) : ""
                )}</tbody></table> <div class="cartSum">Suma: <b>{value.sumTotal()}zł</b></div></>)
                }
            </ProductConsumer>
        );
    }
}

export default Cart;