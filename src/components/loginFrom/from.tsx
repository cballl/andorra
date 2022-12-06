import React from 'react';
import {useDispatch} from 'react-redux'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Checkbox, Col, Form, Input,Row} from 'antd';

import {Root} from "./style";
import {Login} from './type'
import {loginAsync} from '../../store/reducers/loginReducers/async'
import {AnyAction} from "redux";

export function LoginFrom() {
    const dispatch = useDispatch()
    const onFinish = (values: Login) => {
        loginAsync(values).then((res:AnyAction)=>{
            dispatch(res)
        })
    };

    return (
        <Root>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                       <Row justify={"space-between"}>
                           <Col >
                               <Checkbox>记住密码</Checkbox>
                           </Col>
                           <Col >
                               <a className="login-form-forgot" href="#">
                                   注册用户
                               </a>
                           </Col>
                       </Row>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </Root>

    );
};