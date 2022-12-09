import React from 'react';
import {Col, Layout, Row} from 'antd';
import {Root} from './style'
import Menu from '../../components/menu'
import Panel from "../../components/panel";

const {Header, Footer, Sider, Content} = Layout;


function Home() {
    return (
        <>
            <Root>
                <Layout>
                    <Header className={'Header'}>Header</Header>
                    <Layout>
                        <Sider style={{height:'100%'}}>
                            <Menu/>
                        </Sider>
                        <Content style={{marginLeft: "60px"}}>
                            <div></div>
                            <Panel/>
                        </Content>
                    </Layout>
                </Layout>
            </Root>
        </>
    );
}

export default Home;