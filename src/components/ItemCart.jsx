import React, { Component } from "react";
import './itemCart.css'

export default class ItemCart extends Component {

  render() {
    const {itemCart,changeValueAmount,removeItemCart} = this.props;
    return (
      <tr className="item">
        <td>{itemCart.id}</td>
        <td>
          <img src={itemCart.image} alt="" width={100} height={100}></img>
        </td>
        <td>{itemCart.name}</td>
        <td>
          <button className="btn" onClick={() => changeValueAmount(itemCart,"subtrac")}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <span> {itemCart.amount}</span>
          <button className="btn" onClick={() => changeValueAmount(itemCart,"add")}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </td>
        <td>{itemCart.price} $</td>
        <td>{itemCart.total}$</td>
        <td>
          <button className="btn btn-danger" onClick={() => {removeItemCart(itemCart)}}>Delete</button>
        </td>
      </tr>
    );
  }
}
