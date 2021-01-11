import { DribbbleOutlined, InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Tooltip } from 'antd';
import React, { Component } from 'react';
import headImg from './image/2.jpg';
import storageUtils from '../../util/storageUtils'
import memoryUtils from '../../util/memoryUtils'
import './login.css';
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
    console.log(values);

};

// const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', login);
// };
// const checkAccount = (value: string | number) => { // 这个是rules自定义的验证方法
//     return new Promise((resolve, reject) => {  // 返回一个promise

//     })
// }

export default class login extends Component<any, any> {
    onFinishFailed = (errorInfo: any) => {
        const userName = 'dah'
        memoryUtils.user.id = userName //在内存里面保存
        storageUtils.saveUser(userName)
        this.props.history.replace('/')
    };
    onFinish = (values: any) => {
        this.props.history.replace('/admin') //跳转到主页
        storageUtils.saveUser('user') //假装保存一下

    };
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
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                label="登录号"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' },
                                { min: 4, message: '用户名最少六位' },
                                { max: 12, message: '用户名最多十二位' }]}
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
                                rules={[{ required: true, message: 'Please input your password!' },
                                { min: 4, message: '用户密码最少六位' },
                                { max: 12, message: '用户密码最多十二位' },
                                { pattern: /^[a-zA-Z0-9]+$/, message: '用户密码必须是英文，数字组成' },
                                {
                                    // validator: (rule, value, callback) => {
                                    //     checkAccount(value).then(res => {
                                    //         if (res) {
                                    //             // console.log(33, res)
                                    //             callback()
                                    //         } else {
                                    //             callback('账号已存在')
                                    //         }
                                    //     })
                                    // },
                                },]}
                            >
                                <Input.Password
                                    placeholder="Enter your password"
                                    prefix={<DribbbleOutlined className="site-form-item-icon" />}

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
