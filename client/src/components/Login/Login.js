// App.js

import React, { useState } from 'react';
import './Login.css'; // Import a separate CSS file for styling
import { login } from '../../api/index.js'

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            login({ email: username, password: password });
            // Simulate API call for authentication
            // In a real application, you would replace this with an actual API call

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
                    <button type="button" onClick={handleLogin}>
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
