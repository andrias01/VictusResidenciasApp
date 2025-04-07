import { useContext } from "react"
import Header from "./Header"
// import { AdminContext } from "../contexts/admin.context.jsx";
import AdminDashboard from "./AdminDashboard.jsx"
function ShowAdmins() {
  // const {HTMLAdmins} = useContext(AdminContext);
  //const {getAdmins} = useContext(AdminContext);
  return (
    <>
    <Header></Header>
    <AdminDashboard></AdminDashboard>
    {/* <ul>{HTMLAdmins}</ul> */}
    </>
  )
}

export default ShowAdmins
