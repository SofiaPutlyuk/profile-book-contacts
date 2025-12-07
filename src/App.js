import { BrowserRouter , Routes , Route } from "react-router-dom";
import { RegisterPage } from "./components/pages/RegisterPage";
import { LoginPage } from "./components/pages/LoginPage";
import { HomePage } from "./components/pages/HomePage";
import { ContactsPage } from "./components/pages/ContactsPage";
const App = ()  => {
  return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/register"  element={<RegisterPage />}/>
    <Route path="/login" element={<LoginPage />}/>
    <Route path="/contacts" element={<ContactsPage />} />
   </Routes>
  </BrowserRouter >
  );
}

export default App;
