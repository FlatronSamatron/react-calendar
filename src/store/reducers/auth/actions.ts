import {AuthActionsEnum, setAuthAction, setErrorAction, setLoadingAction, setUserAction} from "./types"
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";

export const AuthActionsCreators = {
    setUser: (user: IUser): setUserAction => {
        return {type: AuthActionsEnum.SET_USER, payload:user}
    },
    setIsAuth: (auth: boolean): setAuthAction => {
        return {type: AuthActionsEnum.SET_AUTH, payload:auth}
    },
    setError: (error: string): setErrorAction => {
        return {type: AuthActionsEnum.SET_ERROR, payload:error}
    },
    setLoading: (loading: boolean): setLoadingAction => {
        return {type: AuthActionsEnum.SET_IS_LOADING, payload:loading}
    },
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionsCreators.setLoading(true))
            setTimeout(async ()=>{
                const res = await axios.get("./users.json")
                const data = await res.data
                const isUser = data.find( (user: any) => user.username === username && user.password === password)
                if( isUser ){
                    localStorage.setItem( "auth", "true")
                    localStorage.setItem( "username", isUser.username)
                    dispatch(AuthActionsCreators.setIsAuth(true))
                    dispatch(AuthActionsCreators.setUser(isUser))
                } else {
                    dispatch(AuthActionsCreators.setError("incorrect password or login"))
                }
                dispatch(AuthActionsCreators.setLoading(false))
            }, 1000)
        } catch (e) {
            dispatch(AuthActionsCreators.setError("ERROR!!!"))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
            localStorage.removeItem( "auth")
            localStorage.removeItem( "username")
            dispatch(AuthActionsCreators.setIsAuth(false))
            dispatch(AuthActionsCreators.setUser({} as IUser))
    }
}