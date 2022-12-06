import React from 'react';
import {Col, Row} from 'antd';

import {LoginFrom} from "../../components/loginFrom/from";
import {Root} from "./style";

function Login() {
    return (
        <Root>
            <Row>
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                    1
                </Col>
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                    <div className={'right' }>
                        <LoginFrom></LoginFrom>
                    </div>
                </Col>
            </Row>
        </Root>

    )
        ;
}

export default Login;