import React, { Component } from "react";
import './product.css'


export default class Product extends Component {
  render() {
    const {infor,viewProduct,addProduct} = this.props;
    let objectItem = {...infor,
      amount : 1,
      total : infor.price
    }
    return (
      <div className="col-4">
        <div className="card">
          <img src={infor.image} className="card-img-top" alt="..." data-bs-toggle="modal" data-bs-target="#detailProduct" onClick={()=> viewProduct(infor)}/>
          <div className="card-body">
            <h5 className="card-title">{infor.name}</h5>
            <p className="card-text">
              {infor.price} $
            </p>
            <button className="btn addCart" onClick={() => {addProduct(objectItem)}}>
              Add To Cart 
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
