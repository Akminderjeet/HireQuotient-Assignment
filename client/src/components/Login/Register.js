// App.js

import React, { useState } from 'react';
import './Login.css'; // Import a separate CSS file for styling
import { register } from '../../api';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        try {
            if (password == confirmpassword) {
                register({ email: username, password: password });
            } else {
                alert("password and Confirm Password don't Match")
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleLogout = () => {
        // Simulate logout
        console.log('Logout successful');
    };

    return (
        <div className="app-container">
            <h1>Welcome to the App</h1>
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Confirm Password:
                        <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>
                    <br />
                    <button type="button" onClick={handleRegister}>
                        Login
                    </button>
                </form>
            </div>
            <div className="logout-container">
                <h2>Logout</h2>
                <button type="button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default App;
