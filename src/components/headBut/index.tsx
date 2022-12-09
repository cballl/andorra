import React, {useEffect, useRef, useState} from 'react';

import {Root} from './style'
import {Button, Input, Select} from "antd";
import TableData from "./table";
import {useDispatch, useSelector} from "react-redux";

import {getTableAsync} from '../../store/reducers/goodsReducers/async'


function HeadBut() {
    const [onOff, setOnOff] = useState('none')
    const [options, setOptions] = useState([])
    const titleValue = useRef<any>()
    const dispatch = useDispatch()
    const [tabData,setTabData] = useState([])

    const state = useSelector((state: any) => {
        return state.goods.tableData.data?.cates
    })

    useEffect(() => {
        const list = state?.map((item: any) => {
            return {
                label: item.name,
                value: item.id
            }
        })
        setOptions(list)

    }, [null])


    return (
        <Root>
            <div className={'head-item'}>
                <div className={'item'}>
                    <span>商品名称</span>
                    <Input placeholder="Basic usage" size={'small'} ref={titleValue}/>
                    <span style={{display: onOff}}>商品分类</span>
                    <Select
                        size={'small'}
                        style={{display: onOff}}
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        options={options}
                    />
                </div>
                <div className={'but-item'}>
                    <Button type={'primary'} size={'small'} onClick={() => {
                        getTableAsync({title:titleValue.current.input.value, limit: 1}, 1).then((res:any) => {
                            setTabData(res)
                            dispatch(res)
                        })
                    }}>搜索</Button>
                    <Button size={'small'} onClick={()=>{
                        getTableAsync({}, 1).then((res:any) => {
                            setTabData(res)
                            dispatch(res)
                        })
                    }}>重置</Button>
                    <Button size={'small'} onClick={() => {
                        onOff === 'none' ? setOnOff('block') : setOnOff("none")
                    }}>收起</Button>
                </div>
            </div>
            <div className={'two-item-but'}>
                <Button type={'primary'} size={'small'}>新增</Button>
                <Button type={'primary'} size={'small'} danger>批量删除</Button>
                <Button type={'dashed'} size={'small'}>上架</Button>
                <Button type={'dashed'} size={'small'}>下架</Button>
            </div>
            {/*表格*/}
            <div>
                <TableData tabData={tabData}/>
            </div>
        </Root>
    );
}

export default HeadBut;