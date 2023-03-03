import React, { Component } from 'react'
import Product from './Product';

export default class ListProduct extends Component {

  renderListProduct = () =>{
    const {data} = this.props;
    const {viewCard} = this.props;
    const {addCart} = this.props;
    return (
      data.map((shoe,index) => {
        return (
          <Product infor={shoe} key={index} viewProduct = {viewCard} addProduct = {addCart}></Product>
        )
      })
    )
  }
  render() {
    return (
      <section className='listProduct'>
          <div className="row">
            {this.renderListProduct()}
          </div>
      </section>
    )
  }
}
