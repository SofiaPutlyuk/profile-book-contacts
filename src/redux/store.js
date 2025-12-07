import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slice/RegisterSlice"
import loginReducer from "./slice/LoginSlice"
import contactsReducer from "./slice/ContactsSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { combineReducers } from "@reduxjs/toolkit";
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["register", "login", "contacts"]
}
const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    contacts: contactsReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer

})
export const persistor = persistStore(store)
export default store;