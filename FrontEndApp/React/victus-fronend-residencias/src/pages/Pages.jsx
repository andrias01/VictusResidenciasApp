import { Route,Routes } from "react-router-dom"
import HomePage from "./HomePage"
import LoginAdminPage from "./LoginAdminPage"

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginAdmin" element={<LoginAdminPage />} />

    </Routes>
  )
}

export default Pages
