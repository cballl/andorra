import React, {useEffect, useState} from 'react';
import {Avatar, Card} from "antd";
import {useDispatch, useSelector} from "react-redux";

import {getCartData, getFunctionCartData} from '../../../store/reducers/onePanelReducers/async'
import {Root} from './style'
import {UserOutlined} from "@ant-design/icons";


function OnePanel() {
    const dispatch = useDispatch()
    const [item, setItem] = useState([])
    // goods,order
    const [goods, setGoods] = useState([])
    const [order, setOrder] = useState([])

    useEffect(() => {
        getCartData().then(res => {
            dispatch(res)
        })
        getFunctionCartData().then(res => {
            dispatch(res)
        })
    }, [dispatch])

    let state = useSelector((state: object | any) => {
        return state
    })


    useEffect(() => {
        let item = state.onePane.data.data?.panels || ''
        setItem(item)
        const {goods, order} = state.onePane.cartTwo.data || ''
        setGoods(goods)
        setOrder(order)
    }, [state])


    return (
        <Root>
            <div className={'cart-index'}>
                {
                    item.length > 0 ? item?.map((item: any) => {
                        return (
                            <Card
                                key={item.value}
                                title={item.title}
                                bordered={false}
                                style={{width: 300}}
                                className={'Cart'}
                            >
                                <p className={'p2'}>{item.value}</p>
                                <p>转化率：{item.subValue} %</p>
                            </Card>
                        )
                    }) : ''
                }
            </div>

            <div className={'twoCart'}>
                <div className={'cart-item'}>
                    {
                        goods?.length > 0 ? goods?.map((item: any) => {
                            return (
                                <div key={item.label} className={'cart-item-index'}>
                                    {
                                        item.label
                                    }
                                </div>
                            )
                        }) : []
                    }
                </div>

                <div className={'cart-item'}>
                    {
                        order?.length > 0 ? goods?.map((item: any) => {
                            return (
                                <div key={item.label} className={'cart-item-index'}>
                                    {
                                        item.label
                                    }
                                </div>
                            )
                        }) : []
                    }

                </div>
            </div>

            <div>
                <div className={'cart-sum'}>
                    <div className={'cart-sum-left'}>
                        <div className={'cart-sum-left-1'}>
                            <div>店铺及商品提示</div>
                            <div>店铺及商品提示</div>
                        </div>
                        <div className={'little-cart'}>
                            {
                                goods?.length > 0 ? goods?.map((item: any) => {
                                    return (
                                        <div key={item.label} className={'little-cart-bak'}>
                                           <div> {item.value}</div>
                                           <div> {item.label}</div>
                                        </div>
                                    )
                                }) : []
                            }

                        </div>
                    </div>
                    <div className={'cart-sum-left'}>

                        <div className={'cart-sum-left-1'}>
                            <div>交易提示</div>
                            <div>交易提示</div>
                        </div>
                        <div className={'little-cart'}>
                            {
                                order?.length > 0 ? order?.map((item: any) => {
                                    return (
                                        <div key={item.label} className={'little-cart-bak'}>
                                            <div> {item.value}</div>
                                            <div> {item.label}</div>
                                        </div>
                                    )
                                }) : []
                            }

                        </div>
                    </div>
                </div>
            </div>

        </Root>
    );
}

export default OnePanel;