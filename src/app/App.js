import React , {Component} from 'react'
import { Row , Col } from 'antd';
import {withCookies, Cookies} from 'react-cookie';
import { instanceOf } from 'prop-types';


import './../style/index.css';
import './../style/App.css';
import './../style/antd.css';
import Header from './section/Header';
import Footer from './section/Footer';
import Welcome from './section/Welcome';
import ButtonCart from './section/ButtonCart';
import Products from './section/Products';
import Data from './../data';



class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;

    this.state = {
      products : Data,
      orders : ( typeof(cookies.get('orders')) == "undefined" ? [] : cookies.get('orders') )
    }

    this.addToCart = this.addToCart.bind(this);
    this.removeOfCart = this.removeOfCart.bind(this);

  }

  addToCart(key) {
    const { cookies } = this.props;
    if(this.state.products[key].available && this.state.orders.indexOf(key) === -1) {
      this.state.orders.push(key);
      cookies.set('orders' , this.state.orders , { path : '/'});
      this.setState(state=> (
        {
          orders : state.orders
        }));
    }
  }

  removeOfCart(key) {
    const { cookies } = this.props;

    let productKey = this.state.orders[key.key];
    let i = this.state.orders.indexOf(productKey);
    if( i !== -1 ) {
      this.state.orders.splice(i , 1);
      cookies.set('orders', this.state.orders , { path : '/' });
      this.setState(state => ({
        orders : state.orders
      }));
    }
  }

  render() {
      return (
        <Row type="flex" justify="center">
          <Col span={16}>
              <Header SelectedMenu="home" />
              <Welcome title="Welcome To My Shop" />
              <Products products={this.state.products} addToCart={this.addToCart} orders={this.state.orders}/>
              <Footer />
          </Col>
          <ButtonCart orders={this.state.orders} removeOfCart={this.removeOfCart} products={this.state.products} />
        </Row>
      );
  }

}



export default withCookies(App);
