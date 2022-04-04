import { useEffect } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom" 
import { privateRoutes, publicRoutes, RoutesNames } from '../router';
import {useTypedSelector} from "../hooks/useTypedSelector"

const AppRouter = () => {
    const {isAuth} = useTypedSelector( state => state.auth)
    const navigate = useNavigate();

    useEffect(()=>{
        isAuth ? navigate(RoutesNames.EVENT) : navigate(RoutesNames.LOGIN)
    },[isAuth, navigate])

    return (
        isAuth ? 
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