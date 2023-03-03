import React, { Component } from "react";
import "./modal.css"

export default class Modal extends Component {
  render() {
    const {product} = this.props
    return (
      <div
        className="modal fade"
        id="detailProduct"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="detailProductLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="detailProductLabel">
                {product.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4">
                  <img src={product.image} alt=""></img>
                </div>
                <div className="col-8">
                  <table>
                    <thead>
                      <tr>
                        <th>Price</th>
                        <td>{product.price} $</td>
                      </tr>
                      <tr>
                        <th>Description</th>
                        <td>{product.description}</td>
                      </tr>
                      <tr>
                        <th>Alias</th>
                        <td>{product.alias}</td>
                      </tr>
                      <tr>
                        <th>Quantity</th>
                        <td>{product.quantity}</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
