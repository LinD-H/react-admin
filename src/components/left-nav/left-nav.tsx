import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './left_nav.css'
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
export default class left_nav extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            key: props
        }
        console.log(this.props);

    }
    // test = () => {
    //     console.log(this.props);

    // }


    render() {
        // const key = this.props.location
        return (
            <div>
                <div className="left_nav-header">
                    <div className="zi"><p>大黄后台</p></div>
                    <div style={{ width: 256 }}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                        >
                            <Menu.Item key="/home" icon={<PieChartOutlined />}>
                                <Link to="/home">
                                    首页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/user" icon={<DesktopOutlined />}>
                                <Link to="/user">
                                    用户管理
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="role" icon={<ContainerOutlined />}>
                                <Link to="/role">
                                    <span>角色管理</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                                <Menu.Item key="/category">
                                    <Link to="/category">
                                        <span>品类管理</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="/product">
                                    <Link to="/product">
                                        <span>品类管理</span>
                                    </Link>
                                </Menu.Item>

                            </SubMenu>
                            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="图形图表">
                                <Menu.Item key="/charts/line">
                                    <Link to="/charts/line">线形图</Link>
                                </Menu.Item>
                                <Menu.Item key="/charts/pie">
                                    <Link to="/charts/pie">饼图</Link>
                                </Menu.Item>
                                <Menu.Item key="charts/bar">
                                    <Link to="charts/bar">柱形图</Link>
                                </Menu.Item>




                            </SubMenu>
                        </Menu>
                    </div>
                </div>

            </div>
        )
    }
}
