import { UserMenu } from "../UserMenu"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getContacts, postContacts } from "../../redux/thunk/ThunkContacts"
import { ContactsList } from "./ContactsList"
import { selectContactsItems } from "../../redux/selectors/selectors"
export const ContactsPage = () => {
    const dispatch = useDispatch()
    const items = useSelector(selectContactsItems)
    console.log(items)
    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch])
    return (
        <div>
            <UserMenu />
            <form onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.elements.name.value
                const number = e.target.elements.number.value
                dispatch(postContacts({ name, number }))
                console.log(name, number)
            }}>
                <label>
                    Name:
                    <input type="text" name="name" placeholder="Name" />
                </label>
                <label>
                    Number:
                    <input type="text" name="number" placeholder="Number" />
                </label>
                <button>Add</button>
            </form>
            <ContactsList contacts={items} />
        </div>
    )
}