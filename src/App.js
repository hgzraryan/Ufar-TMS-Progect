import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Login } from "./login";
import { Register } from "./register";

function App() {
    const [currentForm, setCurrentForm] = useState('login');
    const [user, setUser] = useState(null);

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    const handleLogin = async (username, password) => {
        try {
            const response = await axios.post('https://localhost:7071/api/Basic/Login', {
                username: username,
                password: password
            });
            const token = response.data.token;
            localStorage.setItem('token', token); // Store the token in local storage for future use
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set the default authorization header for all future requests
            const userResponse = await axios.get('https://localhost:7071/api/Basic/GetAll');
            setUser(userResponse.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization']; // Remove the authorization header
        setUser(null);
    }

    const refreshToken = async () => {
        try {
            const response = await axios.post('https://localhost:7071/api/Basic/RefreshToken', {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            refreshToken();
        }, 300000); // refresh token every 5 minutes

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.get('https://localhost:7071/api/Basic/GetAll')
                .then(response => setUser(response.data))
                .catch(error => console.error(error));
        }
    }, []);

    return (
        <div className="App">
            {user ? (
                <div>
                    <p>Welcome, {user.username}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                currentForm === "login" ? <Login onFormSwitch={toggleForm} onLogin={handleLogin} /> : <Register onFormSwitch={toggleForm} onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;



