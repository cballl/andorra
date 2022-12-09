import React, {useEffect, useState} from 'react';
import {Pagination, Table, Tag} from "antd";

import type {ColumnsType} from 'antd/es/table';
import type {TableRowSelection} from 'antd/es/table/interface';

import {getTableAsync} from '../../store/reducers/goodsReducers/async'
import {useDispatch, useSelector} from "react-redux";
import {TableRoot,PageRoot} from './style'


interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: '商品',
        dataIndex: 'title',
        render: (text, record: any, index) => {
            return (
                <TableRoot>
                    <div className={'item-root'}>
                        <img src={record.cover} alt="" width={'110'} height={'90'}/>
                        <div className={'item-root-cli'}>
                            <span>{record.title}</span>
                            <div className={'item-data-font'}>
                                <span style={{color: 'red', marginRight: "3px"}}>￥ {record.min_oprice}   </span>|
                                <span style={{fontSize: '12px', marginLeft: "3px"}}>  {record.min_price}</span><br/>
                            </div>
                            <div style={{fontSize: '2px'}}>分类：{record.category?.name}</div>
                            <div style={{fontSize: '2px'}}>创建时间{record.update_time}</div>
                        </div>
                    </div>
                </TableRoot>
            )
        }
    },
    {
        title: '实际销量',
        dataIndex: 'discount',
    },
    {
        title: '商品状态',
        dataIndex: 'ischeck',
        render: (text) => {
            if (text === 1) {
                return (<Tag color="success">上架成功</Tag>)
            } else {
                return (<Tag color="error">上架失败</Tag>)
            }

        }
    },
    {
        title: '审核状态',
        dataIndex: 'status',
        render: (text, record, index) => {
            return (
                <div>
                    <Tag color="success">上架成功</Tag>
                    <Tag color="error">上架失败</Tag>
                </div>
            )

        }
    },
    {
        title: '总库存',
        dataIndex: 'stock',
    },
    {
        title: '操作',
        dataIndex: '',
    },
];


function TableData(props:any) {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [total, setTotal] = useState()

    const state = useSelector((state: any) => {
        return state
    })
    useEffect(() => {
        // getTableAsync({}, 1).then(res => {
        //     setTotal(res.result.data.totalCount)
        //     tab(res.result.data.list)
        //     dispatch(res)
        // })
        // console.log(state.goods.tableData.data.list,'22222222222222222222222222')
        tab(state.goods.tableData.data.list)
    }, [state])

    useEffect(() => {
           if(props.tabData.result?.data.list.length) {
           tab(props.tabData.result?.data.list)
       }

    }, [props])



    const tab = (item: any) => {
        const list2 = item.map((item: any) => {
            return {key: item.id, ...item}
        })
        setData(list2)
    }


    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    const onChange = (page: number, pageSize: number) => {
        console.log(page)
        getTableAsync({pageSize}, page).then(res => {
            dispatch(res)
            tab(res.result.data.list)
        })
    }

    return <div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false}/>
        <PageRoot>
            <Pagination
                size={'default'}
                defaultCurrent={6}
                onChange={(page, pageSize) => onChange(page, pageSize)}
                total={total}
                showSizeChanger={true}
            />
        </PageRoot>

    </div>

}

export default TableData;