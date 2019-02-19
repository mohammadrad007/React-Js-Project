import  React , { Component } from 'react';
import { Card , Tag } from 'antd';


import './../../style/App.css' 

export default class Product extends Component {


  render() {
    let details = this.props.details;
    let StyleBuy = details.available && this.props.orders.indexOf(this.props.index) === -1 ? '' : { cursor : 'not-allowed' , backgroundColor: '#999'};
    return (
      <Card style={{ margin:'auto 15px 25px' }} bodyStyle={{ padding: 1 }}>
        <div className="custom-image">
          <img alt="example" width="100%" src={ details.image} />
        </div>
        <div className="shop-card">
          <h3>{ details.title }</h3>
          <p>{ details.description }</p>
        </div>
        <div style={{ padding : '0px 16px 10px' }}>
          <Tag color="#ecab4c">{ details.price } $</Tag>
          <Tag color="rgb(102, 183, 175)" style={StyleBuy} onClick={() => this.props.addToCart(this.props.index) }>Add To Card</Tag>
        </div>
      </Card>
    );
  }
}
