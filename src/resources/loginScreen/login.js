import React from 'react'
import '../../css/reuseable.css'
import '../../css/login.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../utils/firebase'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [employeeID, setEmployeeID] = useState(null);
    const handleUsernameChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const navigate = useNavigate();
    function loginButton() {
        try {
            if (email === "" || password === "") {
                console.log("One of the fields is empty");
            } else {
                const matchedEmployee = employee.find((emp) => emp.email == email && emp.password == password);
                if (email === "admin" && password === "admin") {
                    navigate('/admin/register-employee', { replace: true });
                } else if (matchedEmployee) {
                    // Do something
                    navigate('/user', { replace: true });
                    setEmployeeID(matchedEmployee.id);
                } else {
                    console.log("Invalid credentials");
                }
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
    const [employee, setEmployee] = useState([]);
    const usersCollectionRef = collection(db, "employee");
    useEffect(() => {
        document.title = 'ASM | Login';
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getUsers();
    }, [usersCollectionRef]);
    return (
        <>
        <div className="login-main flex align-center justify-center">
        <div className="login-div flex flex-row">
                    <div className="left"></div>
                    <div className="right flex flex-column align-center justify-center">
                        <img src="../../image/logo.png" alt="logo" width={150} />
                        <div className="credentials flex flex-row align-center justify-center">
                            <h4 className="flex align-center justify-start">Username</h4>
                            <input value={email} onChange={handleUsernameChange} type="text" name="" id="username" />
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
