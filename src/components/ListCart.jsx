import React, { Component } from "react";
import ItemCart from "./ItemCart";

export default class ListCart extends Component {
  renderItem = () => {
    const { dataCart, changeAmount, removeItem } = this.props;
    return dataCart.map((item, index) => {
      return (
        <ItemCart
          itemCart={item}
          key={index}
          changeValueAmount={changeAmount}
          removeItemCart={removeItem}
        />
      );
    });
  };

  getTotalPayMent = () => {
    const { dataCart } = this.props;
    return dataCart.reduce((totalPayment, item) => {
      return (totalPayment += item.amount * item.price);
    }, 0);
  };

  render() {
    const { purchase } = this.props;
    return (
      <div className="cartList">
        <div
          className="modal fade"
          id="shoppingCart"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="shoppingCartLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 fw-bold" id="shoppingCartLabel">
                  Shopping Cart
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Code</th>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderItem()}
                    <tr className="fw-bold">
                      <td colSpan={6} className="text-end text-danger-emphasis">
                        Total Payment
                      </td>
                      <td
                        className="text-success-emphasis">
                        {this.getTotalPayMent()}$
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-black"
                  onClick={() => {
                    purchase();
                  }}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
