import { postLoginUser } from "../../redux/thunk/ThunkLogin"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
export const LoginPage = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            const email = e.target.elements.email.value
            const password = e.target.elements.password.value
            dispatch(postLoginUser({email,password}))
            navigate("/contacts")
        }}>
            <label>
                Email:
                <input type="email" placeholder="Email" name="email"/>
            </label>
            <label>
                Password:
                <input type="password" placeholder="Password" name="password" />
            </label>
            <button>Login</button>
        </form>
    )
}