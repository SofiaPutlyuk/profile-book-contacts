import { selectIsLogin, selectCurrentUser , selectUserRegister } from "../redux/selectors/selectors"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { patchLoginUser } from "../redux/thunk/ThunkLogin"
export const UserMenu = () => {
    const isLogin = useSelector(selectIsLogin)
    const currentUser = useSelector(selectCurrentUser)
    const  userRegister = useSelector(selectUserRegister)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(isLogin)
    console.log(currentUser)
    console.log(userRegister)
    return (
        <div>
            <p>{isLogin === true ? <p>{currentUser?.user?.email}</p> : userRegister?.user?.email}</p>
            <button onClick={() => {
                dispatch(patchLoginUser());
                navigate("/")
            }
            }>Log out</button>
        </div>
    )
}