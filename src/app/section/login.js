import React , {Component} from 'react'
import { Row , Col , Button } from 'antd';
import './../../style/index.css'

import Header from './Header';
import Footer from './Footer';


export default class Contact extends Component {

  handleSubmit(e) {
    e.preventDefault();
    let DataForm = {
      name : this.refs.name.value,
      email : this.refs.email.value,
      message : this.refs.message.value,
    }
    console.log(DataForm);
  }

  render() {
      return (
        <Row type="flex" justify="center">
          <Col span={16}>
              <Header SelectedMenu="morepage:login" />
              <Row>
                <Col>
              <h1 className="login-h">Login Page</h1>
                </Col>
              </Row>
              <Row type="flex" justify="center">
                  <Col span={12}>
                      <h2>Login Form</h2>
                      <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="ant-row ant-form-item">
                          <div className="ant-form-item-label">
                            <label className="">UserName</label>
                          </div>
                          <div className="">
                            <div className="ant-form-item-control">
                              <input type="text" name="name" placeholder="Please enter your UserName" ref="name" className="ant-input ant-input-lg" />
                            </div>
                          </div>
                        </div>
                        <div className="ant-row ant-form-item">
                          <div className="ant-form-item-label">
                            <label className="">Password</label>
                          </div>
                          <div className="">
                            <div className="ant-form-item-control">
                              <input type="Password" name="email" placeholder="Please enter your Password" ref="email" className="ant-input ant-input-lg" />
                            </div>
                          </div>
                        </div>
                        <div className="ant-row ant-form-item">
                          <div className="ant-form-item-label">
                            <label className="">Password</label>
                          </div>
                          <div className="">
                            <div className="ant-form-item-control">
                            <input type="Password" name="email" placeholder="Please enter your Password again" ref="email" className="ant-input ant-input-lg" />
                            </div>
                          </div>
                        </div>
                        <div className="ant-row ant-form-item">
                          <div className="">
                            <div className="ant-form-item-control">
                              <Button className="login-btn" htmlType="submit">login</Button>
                            </div>
                          </div>
                        </div>
                      </form>
                  </Col>
              </Row>
              <Row>
                <Col>
                  <Footer />
               </Col>
              </Row>
          </Col>
        </Row>
      );
  }
}
