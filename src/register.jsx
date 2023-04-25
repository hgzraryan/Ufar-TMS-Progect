import React, { useState } from "react";
import axios from "axios";

export const Register = (props) => {
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [merchantId, setMerchantId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/Basic/Register', {
                firstName,
                lastName,
                username,
                email,
                merchantId,
                password: pass
            });
            const { token, refreshToken } = response.data;
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('refreshToken', refreshToken);
            props.onFormSwitch('home');
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="content-handler">
            <h1>Welcome to Ineco</h1>
            <h2>Sign up</h2>
            <form className="register-from" onSubmit={handleSubmit}>
                <div className="form-handler">
                    <label className="title" htmlFor="First name">First Name</label>
                    <input value={firstName} type="name" placeholder="First name" id="firstName" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="form-handler">
                    <label className="title" htmlFor="Last name">Last Name</label>
                    <input value={lastName} type="name" placeholder="Last name" id="lastName" name="lastName" onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="form-handler">
                    <label className="title" htmlFor="username">Username</label>
                    <input value={username} type="text" placeholder="username" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="form-handler">
                    <label className="title" htmlFor="email">Email</label>
                    <input value={email} type="email" placeholder="email@gmail.com" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-handler">
                    <label className="title" htmlFor="Merchant ID">Merchant ID</label>
                    <input value={merchantId} type="number" placeholder="Merchant ID" id="merchantId" name="merchantId" onChange={(e) => setMerchantId(e.target.value)} />
                </div>

                <div className="form-handler">
                    <label className="title" htmlFor="password">Password</label>
                    <input value={pass} type="password" placeholder="********" id="password" name="password" onChange={(e) => setPass(e.target.value)} />
                </div>

                <button type="submit">Sign up<i className="fas fa-user-plus"></i></button>
            </form>
            <div className="button-handler">
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Log in here<i className="fas fa-sign-in-alt"></i></button>
            </div>
        </div>

    )
}