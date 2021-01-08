import React, { Component } from 'react'
import './login.css'
import headImg from './image/2.jpg'
import { Form, Input, Button, Checkbox, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined, DribbbleOutlined } from '@ant-design/icons';
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 15 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 10 },
};
const submitLayout = {
    wrapperCol: { offset: 10, span: 10 },
};
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
export default class login extends Component {

    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={headImg} alt="" />
                    <span>大黄后台管理系统</span>
                </header>
                <article>
                    <div className="login-h1"><h1>用户登录</h1></div>
                    <div className="login-content">
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >   
                            <Form.Item
                                label="登录号"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input
                                    placeholder="Enter your username"
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    suffix={
                                        <Tooltip title="Extra information">
                                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                        </Tooltip>
                                    }
                                />
                            </Form.Item>

                            <Form.Item
                                label="登录密"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input
                                    placeholder="Enter your password"
                                    prefix={<DribbbleOutlined className="site-form-item-icon" />}
                                    suffix={
                                        <Tooltip title="输入密码啦还看看看">
                                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                        </Tooltip>
                                    }
                                />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked" >
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>

                            <Form.Item {...submitLayout} >
                                <Button type="primary" htmlType="submit">
                                    冲冲冲
                            </Button>
                            </Form.Item>
                        </Form></div>
                </article>
            </div>
        )
    }
}
