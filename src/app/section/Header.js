import React , {Component} from 'react'
import { Row , Col , Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current : this.props.SelectedMenu
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {

    this.setState({
      current : e.key
    });
  }

  render() {
    return (
      <Row>
       <Col>
        <Menu onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            className="Menu">
          <Menu.Item key="home">
              <Icon type="home" /> <Link to="/" style={{ display:'inline-block' }} ></Link>Home
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="appstore" />Products
          </Menu.Item>
          <Menu.Item key="alipay">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" > Example - Link</a>
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting" />More Page</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="aboutpage"><Link to='/aboutpage'></Link> About Page</Menu.Item>
              <Menu.Item key="morepage:contact"> <Link to='/contact'></Link> Contact Us</Menu.Item>
            </MenuItemGroup>
         </SubMenu>
         <Menu.Item key="morepage:login"
            className = "login"
         >
         <Icon type="login" /> <Link to="/login" style={{ display:'inline-block', right: 0}} ></Link>login
          </Menu.Item>
        </Menu>
       </Col>
      </Row>
    )
  }
}
