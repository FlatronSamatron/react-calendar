import {FC} from 'react'

import { Row, Menu } from 'antd';
import { Header } from "antd/es/layout/layout"
import { useNavigate } from 'react-router-dom';
import { RoutesNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {useDispatch} from "react-redux";
import {AuthActionsCreators} from "../store/reducers/auth/actions";

const NavBar: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth, user, error, isLoading} = useTypedSelector( state => state.auth)

    console.log(isAuth, user, error, isLoading)

    return (
        <Header>
            <Row justify="end">
                {isAuth ? 
                <>
                <div style={{color: "white"}}>user</div>
                    <Menu theme="dark" mode="horizontal" selectable={false} style={{width: "100px"}}>
                        <Menu.Item key="1" onClick={()=>dispatch(AuthActionsCreators.logout())}>Exit</Menu.Item>
                    </Menu>
                </> : 
                <Menu theme="dark" mode="horizontal" selectable={false} style={{width: "100px"}}>
                    <Menu.Item key="1" onClick={()=>navigate(RoutesNames.LOGIN)}>Login</Menu.Item>
                </Menu>}
            </Row>
        </Header>
    )
}

export default NavBar