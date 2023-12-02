import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ChangePasswordByEmail() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const handleChangePassword = async () => {
        try {
            // Lógica para enviar la nueva contraseña al backend por correo electrónico
            await axios.post('http://localhost:3001/change-password-by-email', { email, newPassword });
            alert('Contraseña cambiada exitosamente');
            navigate('/login'); // Redirige al usuario al inicio de sesión después de cambiar la contraseña
        } catch (error) {
            console.log('Error cambiando contraseña por correo electrónico', error);
            alert('Error cambiando contraseña por correo electrónico');
        }
    };

    return (
        <div>
            <h2>Cambio de Contraseña por Correo Electrónico</h2>
            <label>Correo Electrónico:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Nueva Contraseña:</label>
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <br />
            <button onClick={handleChangePassword}>Cambiar Contraseña</button>
        </div>
    );
}

export default ChangePasswordByEmail;
