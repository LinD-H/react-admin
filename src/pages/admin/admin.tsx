import React from 'react';
import memoryUtils from '../../util/memoryUtils';
import Leftnav from '../../components/left-nav/left-nav'
import Header from '../../components/header/header'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Home from '../home/home'
import Product from '../product/product'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Role from '../role/role'
import User from '../user/user'
import Category from '../category/category'
const { Footer, Sider, Content } = Layout;

export default function admin(props: any) {
    const user = memoryUtils.user
    if (!user || !user.id) {
        return <Redirect to="./" />
    }
    const a = {...props}
    console.log(a.location);

    return (

        <Layout style={{ height: '100%' }} >
            <Sider style={{ color: 'white' }} width={256}><Leftnav key={a}/></Sider>
            <Layout>
                <Header></Header>
                <Content style={{ backgroundColor: 'white' }}>
                    <Switch>
                        <Route path="/home" exact component={Home}></Route>
                        <Route path="/product" component={Product}></Route>
                        <Route path="/charts/bar" exact component={Bar}></Route>
                        <Route path="/charts/line" component={Line}></Route>
                        <Route path="/charts/pie" exact component={Pie}></Route>
                        <Route path="/role" component={Role}></Route>
                        <Route path="/user" component={User}></Route>
                        <Route path="/category" component={Category}></Route>
                        <Redirect to="/home" />
                    </Switch>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}    
