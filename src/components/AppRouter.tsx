import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom" 
import { privateRoutes, publicRoutes, RoutesNames } from '../router';

const AppRouter = () => {
    const auth = true;
    const navigate = useNavigate();

    useEffect(()=>{
        auth ? navigate(RoutesNames.EVENT) : navigate(RoutesNames.LOGIN)
    },[auth, navigate])

    return (
        auth ? 
        <Routes>
            {privateRoutes.map( route => {
                return <Route path={route.path} element={<route.component/>} key={route.path}/>
            })}
        </Routes>
        :
        <Routes>
            {publicRoutes.map( route => {
                return <Route path={route.path} element={<route.component/>} key={route.path}/>
            })}
        </Routes>
    )
}

export default AppRouter