import React, {useEffect, useLayoutEffect} from 'react';
import {useSelector} from "react-redux";

import { Route, Routes, useLocation, useNavigate} from "react-router-dom";
// import KeepAlive from "../keep";
import OnePanel from "../../pages/components/onePanel";
import Goods from "../../pages/components/goods";

function Panel() {
    const navigate = useNavigate()
    const location = useLocation()
    const state = useSelector((state: any) => {
        return state
    })

    const routerPath = '/*'

    useLayoutEffect(() => {
        if (location.pathname === '/*') {
            navigate('/*/main')
        }
    })

    useEffect(() => {
        if (state.power.routerPath[0]?.frontpath === '/') {
            navigate('/*/main')
        }else{
            navigate(routerPath + state.power.routerPath[0]?.frontpath)
        }
    },[state.power.routerPath[0]?.frontpath])

    return (
        <div>
            <Routes>
                <Route path={'/*/main'} element={<OnePanel/>}/>
                <Route path={'/*/goods/list'} element={<Goods/>}/>
            </Routes>
        </div>
    );
}

export default Panel;