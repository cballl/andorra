import React, {useEffect, useState} from 'react';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {getMenu, getRouterPath} from '../../store/reducers/powerReducers/async'
import {useDispatch, useSelector} from "react-redux";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const rootSubmenuKeys: any[] = ['5'];


function MenuLeft() {
    const [openKeys, setOpenKeys] = useState(['5']);
    const dispatch = useDispatch()
    const [items, setItems] = useState([])


    useEffect(() => {
        getMenu().then(res => {
            dispatch(res)
        })
    }, [dispatch])

    const state = useSelector((state: object | any) => {
        return state
    })

    const setMenuData = (arr: any) => {
        let data: any = []
        arr?.map((item:  any) => {
            let child
            if (item.child.length !== 0) {
                child = item.child.map((data: any) => {
                    return {
                        label: data.name,
                        key: data.id,
                        frontpath: data.frontpath,
                    }
                })
            }
            const result = getItem(item.name, String(item.id), undefined, child)
            rootSubmenuKeys.push(item.id + '')
            data.push(result)
        })
        setItems(data)
    }


    useEffect(() => {
        setMenuData(state.power.menu)
        // onOpenChange()
    }, [state])


    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }

    };

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['10']}
            // defaultOpenKeys={['10']}
            forceSubMenuRender={true}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{width: 256,height:730}}
            items={items}
            onClick={({item, key, keyPath, domEvent}) => {
                const path = items.map((item: any) => {
                    return item.children.filter((data: any) => {
                        return data.key === Number(key)
                    })
                }).filter((item:any)=>item.length)[0]
                console.log(path)
                // 传递信息
                dispatch(getRouterPath(path))
            }}
        />
    );
}

export default MenuLeft;