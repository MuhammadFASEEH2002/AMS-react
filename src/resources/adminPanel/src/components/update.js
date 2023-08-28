import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../../../../utils/firebase'
import { useEffect, useState } from 'react'
import React from 'react'
import '../css/searchEmployee.css'
import '../css/update.css'
import '../css/registerationForm.css'
const Update = () => {
    let [searchEmail, setSearchEmail] = useState("");
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [dob, setDob] = useState("");
    let [password, setPassword] = useState("");
    let [employmentType, setEmploymentType] = useState("Permanent");
    const [employeeID, setEmployeeID] = useState(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    let usersCollectionRef = collection(db, "employee");
    let [employee, setEmployee] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await getDocs(usersCollectionRef);
                setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                // var button = document.getElementById('myButton');
                // button.disabled = true;
            } catch (error) {
                console.error('Error retrieving employee data:', error);
            }
        };
        getUsers();
    }, [usersCollectionRef]);
    const SearchUser = async () => {
        try {
            const searchEmailValue = document.getElementById("getEmail").value;
            const matchingEmployee = employee.find((employee) => employee.email === searchEmailValue);
            if (matchingEmployee) {
                document.getElementById("firstname").value = matchingEmployee.firstName;
                document.getElementById("lastname").value = matchingEmployee.lastName;
                document.getElementById("email").value = matchingEmployee.email;
                document.getElementById("date").value = matchingEmployee.dob;
                document.getElementById("password").value = matchingEmployee.password;
                document.getElementById("employmenttype").value = matchingEmployee.employmentType;
                setPassword(matchingEmployee.password);
                setEmploymentType(matchingEmployee.employmentType);
                setEmployeeID(matchingEmployee.id);
                const email_search_input = document.getElementById("getEmail");
                email_search_input.readOnly = true;
                // const update_button=document.getElementById("employee_update_button");
                // update_button.disabled=false;
                setIsButtonDisabled(false);
            } else {
                console.log("Employee not found");
            }
        } catch (error) {
            console.error('Error searching for employee:', error);
        }
    };
    const UpdateUser = async () => {
        try {
            const userDoc = doc(db, "employee", employeeID);
            await updateDoc(userDoc, { password: password, employmentType: employmentType });
            const email_search_input = document.getElementById("getEmail");
            email_search_input.readOnly = false;
            // Clear input fields and state values
            ClearData();
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };
    const ClearData = () => {
        // Clear input fields and state values
        const email_search_input = document.getElementById("getEmail");
        email_search_input.readOnly = false;
        document.getElementById("getEmail").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("date").value = "";
        document.getElementById("password").value = "";
        document.getElementById("employmenttype").value = "Permanent";
        setSearchEmail("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setDob("");
        setPassword("");
        setEmploymentType("Permanent");
        setIsButtonDisabled(true);
    };
    return (
        <>
            <div className="register-employee-right flex flex-column align-center justify-start">
                <h1 className='register-employee-right-main-heading'>Employee Registeration</h1>
                <div className="employee-search-area flex flex-row align-center justify-center">
                    <input id='getEmail' className='search-email-input-area' type="email" placeholder='Enter Employee Email' onChange={(event) => {
                        setSearchEmail(event.target.value);
                    }} />
                    <button onClick={SearchUser} className='search-email-button'>Search</button>
                </div>

                <div className='reg-form flex flex-column align-start justify-center'>
                    <div className="employee-reg-credentials flex flex-row align-start justify-center">
                        <div className="employee-reg-credentials-div flex flex-row">
                            <p className='credential-label flex align-center justify-start'>First Name</p>
                            <input className="credential-input" type="text" id='firstname' onChange={(event) => {
                                setFirstName(event.target.value);
                            }} readOnly />
                        </div>
                        <div className="employee-reg-credentials-div flex flex-row">
                            <p className='credential-label flex align-center justify-start'>Last Name</p>
                            <input className="credential-input" type="text" id='lastname' onChange={(event) => {
                                setLastName(event.target.value);
                            }} readOnly />
                        </div>
                    </div>
                    <div className="employee-reg-credentials flex flex-row align-start justify-center">
                        <div className="employee-reg-credentials-div flex flex-row">
                            <p className='credential-label flex align-center justify-start'>Email</p>
                            <input className="credential-input" type="email" id='email' onChange={(event) => {
                                setEmail(event.target.value);
                            }} readOnly />
                        </div>
                        <div className="employee-reg-credentials-div flex flex-row">
                            <p className='credential-label flex align-center justify-start'>Date of Birth</p>
                            <input className="credential-input" type="date" id='date' onChange={(event) => {
                                setDob(event.target.value);
                            }} readOnly />
                        </div>
                    </div>
                    <div className="employee-reg-credentials flex flex-row align-start justify-center">
                        <div className="employee-reg-credentials-div flex flex-row">
                            <p className='credential-label flex align-center justify-start'>Password</p>
                            <input className="credential-input" type="text" id='password' onChange={(event) => {
                                setPassword(event.target.value);
                            }} />
                        </div>
                        <div className="employee-reg-credentials-div flex flex-row">
                            <p className='credential-label flex align-center justify-start'>Employment Type</p>
                            <select className='credential-input-dropdown' id='employmenttype' onChange={(event) => {
                                setEmploymentType(event.target.value);
                            }}>
                                <option>Permanent</option>
                                <option>Temporary</option>
                            </select>
                        </div>
                    </div>
                    <div className="employee-reg-form-buttons flex align-center justify-center">
                        <button className='reg-form-submit-button' id='employee_update_button' onClick={UpdateUser} disabled={isButtonDisabled}>Update</button>
                        <button className='reg-form-submit-button' onClick={ClearData}>Clear</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Update
