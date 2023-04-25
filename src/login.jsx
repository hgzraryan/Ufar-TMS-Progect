import React, { useState } from "react";
import axios from 'axios';

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/Basic/Login', {
                userName, password: pass
            });
            const { token, refreshToken } = res.data;
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('refreshToken', refreshToken);
            // redirect to dashboard or home page
        } catch (err) {
            console.log(err);
            // handle error
        }
    }
    return (
        <div className="content-handler">
            <div id="h1-handler">
                <img src="logo.png" alt="logo" id="logo" />
                <h1>Welcome To Ineco</h1>
            </div>
            
            <h2>Login</h2>
            <form className="login-from" onSubmit={handleSubmit}>
                <div className="form-handler">
                    <label className="title" htmlFor="username">Username</label>
                    <input value={username} type="username" placeholder="username" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="form-handler">
                    <label className="title" htmlFor="password">Password</label>
                    <input value={pass} type="password" placeholder="********" id="password" name="password" onChange={(e) => setPass(e.target.value)} />
                </div>

                <div className="button-handler">
                    <button classname="link-btn" type="submit">Log in</button>
                    <button classname="link-btn" onClick={() => props.onFormSwitch('register')}>Sign up</button>
                </div>
            </form>
        </div>
    )
}
