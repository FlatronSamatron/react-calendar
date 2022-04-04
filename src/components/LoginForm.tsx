import {FC} from 'react';
import {Button, Form, Input} from "antd";
import {useDispatch} from "react-redux";
import {AuthActionsCreators} from "../store/reducers/auth/actions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const LoginForm:FC = () => {

    const dispatch = useDispatch()
    const { error, isLoading } = useTypedSelector(state => state.auth)

    const onFinish = (values: any) => {
        const {username, password} = values
        dispatch(AuthActionsCreators.login(username, password))
    }

    return (
        <Form
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
        >
            {error && <div style={{color: "red"}}>
                {error}
            </div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Sign In
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;