import React, { Component } from "react";
import ListProduct from "./ListProduct";
import dataShoes from "./data/dataShoes.json";
import Modal from "./Modal";
import ListCart from "./ListCart";
import "./home.css";

export default class Home extends Component {
  state = {
    detailProduct: {},
    cartList: [],
  };

  handleViewCard = (product) => {
    this.setState({
      detailProduct: product,
    });
  };

  handleAddCart = (itemCart) => {
    let cartListNew;
    const cartOld = [...this.state.cartList];
    let productAdd = cartOld.find((pro) => itemCart.id === pro.id);
    if (productAdd === undefined) {
      cartListNew = [...this.state.cartList, itemCart];
    } else {
      productAdd.amount += 1;
      productAdd.total = this.getTotal(productAdd);
      cartListNew = [...cartOld];
      cartListNew[itemCart] = productAdd;
    }
    this.setState({ cartList: cartListNew });
  };

  changeAmount = (itemCart, status) => {
    const cartListNew = [...this.state.cartList];
    let itemUpdate = cartListNew.find((item) => item.id === itemCart.id);
    //click button
    if (status === "add") {
      itemUpdate.amount += 1;
    } else {
      itemUpdate.amount -= 1;
    }
    //hander amount < 0
    if (itemUpdate.amount < 1) {
      this.removeItemCart(itemCart);
    } else {
      cartListNew[itemCart] = itemUpdate;
      itemUpdate.total = this.getTotal(itemUpdate);
      this.setState({ cartList: cartListNew });
    }
  };

  removeItemCart = (itemCart) => {
    const cartListNew = [...this.state.cartList];
    const index = cartListNew.indexOf(itemCart);
    cartListNew.splice(index, 1);
    this.setState({ cartList: cartListNew });
  };

  purchase = () => {
    this.setState({ cartList: [] });
  };

  getTotal = (itemCart) =>
    parseFloat(itemCart.price) * parseFloat(itemCart.amount);

  getTotalAmount = () => {
    return this.state.cartList.reduce((amountTotal,item)=>{
      return amountTotal += item.amount
    },0)
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">SHOES SHOP</h2>
        <div className="shopCart">
          <button className="btn btn-black" data-bs-toggle="modal" data-bs-target="#shoppingCart">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <span className="amountTotal">{this.getTotalAmount()}</span>
        </div>
        <ListProduct
          data={dataShoes}
          viewCard={this.handleViewCard}
          addCart={this.handleAddCart}
        />
        <Modal product={this.state.detailProduct} />
        <ListCart
          dataCart={this.state.cartList}
          changeAmount={this.changeAmount}
          removeItem={this.removeItemCart}
          purchase={this.purchase}
        />
      </div>
    );
  }
}
