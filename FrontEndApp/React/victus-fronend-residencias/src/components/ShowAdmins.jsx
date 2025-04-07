import { useContext } from "react"
import Header from "./Header"
import { AdminContext } from "../contexts/admin.context.jsx";
function ShowAdmins() {
  const {HTMLAdmins} = useContext(AdminContext);
  //const {getAdmins} = useContext(AdminContext);
  return (
    <>
    <Header></Header>
    <ul>{HTMLAdmins}</ul>
    </>
  )
}

export default ShowAdmins
