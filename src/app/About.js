import React, { Component } from 'react';
import {Row, Col} from 'antd';


import './../style/App.css';
import './../style/antd.css';
import Header from './section/Header';


export default class About extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
         <Col span={16}>

             <Header SelectedMenu="aboutpage" />
             <h1 className="about-h">About us ...</h1>
            <p className="about-p">lormLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex</p>
         </Col>
       </Row>
    );
  }
}
