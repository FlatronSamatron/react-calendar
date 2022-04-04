import AppRouter from "./components/AppRouter"

import { Layout } from 'antd';
import { Content } from "antd/es/layout/layout"
import NavBar from "./components/NavBar";

import "./App.css";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {AuthActionsCreators} from "./store/reducers/auth/actions";
import {IUser} from "./models/IUser";

function App() {
    const dispatch = useDispatch()

    useEffect(()=>{
        if(localStorage.getItem("auth")){
            dispatch(AuthActionsCreators.setIsAuth(true))
            dispatch(AuthActionsCreators.setUser({username: localStorage.getItem("username" || "")} as IUser))
        }
    },[dispatch])

  return (
    <Layout>
      <NavBar/>
      <Content>
        <AppRouter/>
      </Content>
    </Layout>
  );
}

export default App;
