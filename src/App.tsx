import React, {useCallback, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


import Home from "./pages/home";
import Login from "./pages/login";
// import './pages/demo'


function App() {
    const navigate = useNavigate()
    const state = useSelector((state: object | any) => {
        return state
    })

    const skipRoute = useCallback(() => {
        if (!state.login.token) {
            navigate('/login')
        }
    }, [null])

    useEffect(() => {
        skipRoute()
    }, [null])

    return (
        <div className="App">
            <Routes>
                <Route path={'/login'} element={<Login/>}></Route>
                <Route path={'/*'} element={<Home/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
