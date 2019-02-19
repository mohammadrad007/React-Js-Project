import React , {Component} from 'react';
import { Row , Col, Icon } from 'antd';

import './../../style/index.css'

export default class Footer extends Component{
    render(){
        return(
            <Row>
                <Col span={24}>
                    <footer className="footer">                           
                            <p>contact us</p>
                           <div className="footer-icon">
                                <a href="#"><Icon className="tw-icon" type="twitter" /></a>
                                <a href="#"><Icon className="git-icon" type="github" /></a>
                                <a href="#"><Icon className="fa-icon" type="facebook" /></a>
                                <a href="#"><Icon className="ins-icon" type="instagram" /></a>
                           </div>
                            <p>Made with <span style={{color:'red', fontSize: 18}}>❤</span> by: saberzx313@gmail.com © 2019</p>
                    </footer>
                </Col>
            </Row>

        );
    }
}