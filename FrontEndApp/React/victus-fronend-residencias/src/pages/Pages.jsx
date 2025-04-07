import { Route,Routes } from "react-router-dom"
import HomePage from "./HomePage"
import LoginAdminPage from "./LoginAdminPage"
import ShowAdmins from "../components/ShowAdmins"

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginAdmin" element={<LoginAdminPage />} />
        <Route path="/ShowAdmins" element={<ShowAdmins />} />


    </Routes>
  )
}

export default Pages
