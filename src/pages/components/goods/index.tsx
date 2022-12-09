import React from 'react';
import {Tabs} from "antd";
import HeadBut from "../../../components/headBut";
import {getTableAsync} from '../../../store/reducers/goodsReducers/async'
import {useDispatch} from "react-redux";

function Goods() {
       const dispatch = useDispatch()
    const selectData: any = [
        {
            label: " 全部",
            key: 'all',

        },
        {
            label: "审核中",
            key: 'checking'
        },
        {
            label: "出售中",
            key: 'saling'
        }, {
            label: "已下架",
            key: 'off'
        }, {
            label: "库存",
            key: 'min_stock'
        },
        {
            label: "预警",
            key: '1s'
        },
        {
            label: "回收站",
            key: 'delete'
        }
    ]

    selectData.forEach((item: any) => {
        item['children'] = <HeadBut/>
    })

    return (
        <div>
            <Tabs
                defaultActiveKey="1"
                items={selectData}
                onChange={(item: any) => {
                    getTableAsync({tab:item},1).then((res)=>{
                        console.log(res,'rggrgrg')
                        dispatch(res)
                    })
                }}
            />
        </div>
    );
}

export default Goods;