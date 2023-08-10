import React from 'react'
import '../../css/reuseable.css'
import './css/login.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const navigate = useNavigate();
    function loginButton() {
        if (username === "admin" && password === "admin") {
            navigate('/register-employee',{replace:true});
        } else {
            console.log("invalid details");
        }
    }
    useEffect(() => {
        document.title = 'ASM | Login';
    }, []);
    return (
        <>
        <div className="login-main flex align-center justify-center">
        <div className="login-div flex flex-row">
                    <div className="left"></div>
                    <div className="right flex flex-column align-center justify-center">
                        <img src="../../image/logo.png" alt="logo" width={150} />
                        <div className="credentials flex flex-row align-center justify-center">
                            <h4 className="flex align-center justify-start">Username</h4>
                            <input value={username} onChange={handleUsernameChange} type="text" name="" id="username" />
                        </div>
                        <div className="credentials flex flex-row align-center justify-center">
                            <h4 className="flex align-center justify-start">Password</h4>
                            <input value={password} onChange={handlePasswordChange} type="password" name="" id="password" />
                        </div>
                        <div className="button-div flex flex-row align-center justify-center">
                            <button className="login" id="login" onClick={loginButton}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>    
        </div>
                    
        </>
    )
}

export default Login
