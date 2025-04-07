import React, { useState, useEffect } from "react";
import "../cssComponents/AdminManagement.css"; // o usa Tailwind si prefieres

const AdminManagement = () => {
  const [admins, setAdmins] = useState([]);
  const [filteredAdmins, setFilteredAdmins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [form, setForm] = useState({ id: null, name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Mock inicial (simula datos desde una API)
  useEffect(() => {
    const mockAdmins = [
      { id: 1, name: "Juan Pérez", email: "juan@residencia.com" },
      { id: 2, name: "Ana Torres", email: "ana@residencia.com" },
    ];
    setAdmins(mockAdmins);
    setFilteredAdmins(mockAdmins);
  }, []);

  // Filtro en tiempo real
  useEffect(() => {
    setFilteredAdmins(
      admins.filter((admin) =>
        admin.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, admins]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    if (isEditing) {
      // Editar
      const updated = admins.map((a) =>
        a.id === form.id ? { ...form } : a
      );
      setAdmins(updated);
    } else {
      // Crear nuevo
      const newAdmin = {
        id: Date.now(),
        name: form.name,
        email: form.email,
      };
      setAdmins([...admins, newAdmin]);
    }

    // Reset
    setForm({ id: null, name: "", email: "" });
    setIsEditing(false);
  };

  const handleEdit = (admin) => {
    setForm(admin);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este administrador?")) {
      setAdmins(admins.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="admin-management-container">
      <h2>Gestión de Administradores</h2>

      {/* 🔍 Buscador */}
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* 📝 Formulario */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleInputChange}
        />
        <button type="submit">{isEditing ? "Actualizar" : "Crear"}</button>
      </form>

      {/* 📋 Lista */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdmins.map((admin) => (
            <tr key={admin.id}>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>
                <button onClick={() => handleEdit(admin)}>Editar</button>
                <button onClick={() => handleDelete(admin.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManagement;
