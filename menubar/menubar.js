import React,{Component} from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {  Button } from 'antd';

import './menubar.css';

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.ItemGroup title="Group title">
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
    </Menu.ItemGroup>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

class Menubar extends Component{
    render(){
        return(
            <div className="menubar">
            <Dropdown overlay={menu}>
            <Button size="large" type="text" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Cascading menu <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown  overlay={menu}>
            <Button size="large" type="text" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Cascading menu <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown   overlay={menu}>
            <Button size="large" type="text" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Cascading menu <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown  overlay={menu}>
            <Button size="large" type="text" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Cascading menu <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown  overlay={menu}>
            <Button size="large" type="text" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Cascading menu <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown  overlay={menu}>
            <Button size="large" type="text" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Cascading menu <DownOutlined />
            </Button>
          </Dropdown>
         
          </div>
        )
    }
   
}
  
export default Menubar;