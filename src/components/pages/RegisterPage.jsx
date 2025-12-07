import { useEffect } from "react"
import { getCurrentUser , postRegisterUser} from "../../redux/thunk/ThunkRegister"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
export const RegisterPage = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
 useEffect(() => {
dispatch(getCurrentUser())
 } , [dispatch])
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            const name = e.target.elements.name.value
            const email = e.target.elements.email.value
            const password = e.target.elements.password.value
            console.log("SENT:", { name, email, password });
            dispatch(postRegisterUser({name , email , password}))
            navigate("/contacts")
        }}>
            <label>
                Name:
                <input type="text" name="name" placeholder="Name"/>
            </label>
            <label>
                Email:
                <input type="email" name="email" placeholder="Email"/>
            </label>
            <label>
                Password:
                <input type="password" name="password" placeholder="Password"/>
            </label>
            <button>Register</button>
        </form>
    )
}