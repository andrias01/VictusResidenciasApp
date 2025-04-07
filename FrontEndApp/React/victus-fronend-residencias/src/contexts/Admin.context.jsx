import { createContext, useEffect, useState } from "react";

const AdminContext = createContext();

function AdminProviderWrapper(props) {
    const [admins, setAdmins] = useState([]);
    // const [error, setError] = useState(false);

    const getAdmin = async () => {
        try {
            const response = await fetch("https://backend-victusrenderservidor.onrender.com/victusresidencias/api/v1/administrator/all");
            //const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            const data = await response.json();
            setAdmins(data.data);
            // setError(false);
            console.log(data);
        } catch (e) {
            console.error("Error fetching admin data:", e);
            // setError(true);
        }
    }

    useEffect(() => {
        getAdmin();
    }, []);

    const HTMLAdmins = Array.isArray(admins)
        ? admins.map((admin) => (
            <li key={admin.id}>
                <strong>ID:</strong> {admin.id} <br />
                <strong>Nombre:</strong> {admin.name}
            </li>
        ))
        : null;


    // <li key={admin.id}>
    //     <h2>{admin.body}</h2>
    //     {/* <CardAdmin card={admin}></CardAdmin> */}
    // </li>


    return (
        <AdminContext.Provider value={{ admins, setAdmins, getAdmin, HTMLAdmins }}>
            {props.children}
        </AdminContext.Provider>
    );
}

export { AdminContext, AdminProviderWrapper };