import { collection, doc, getDocs, updateDoc} from 'firebase/firestore'
import { db } from '../../../../utils/firebase'
import { useEffect, useState } from 'react'
import React from 'react'
import '../css/searchEmployee.css'

const Update = () => {
    let [searchEmail, setSearchEmail] = useState("");
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [dob, setDob] = useState("");
    let [password, setPassword] = useState("");
    let [employmentType, setEmploymentType] = useState("Permanent");
    const [employeeID, setEmployeeID] = useState(null);
    let usersCollectionRef = collection(db, "employee");
    let [employee, setEmployee] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);

    const SearchUser = async () => {
        const searchEmail = document.getElementById("getEmail").value;
      
        const matchingEmployee = employee.find((employee) => employee.email === searchEmail);
      
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
        } else {
          console.log("Employee not found");
        }
      };
    const UpdateUser = async () => {
        // console.log(employeeID);
        const userDoc = doc(db, "employee", employeeID);
        await updateDoc(userDoc,{ password: password, employmentType: employmentType });
      };
    return (
        <>
            <div className="register-employee-right flex flex-column align-center justify-start">
                <h1 className='register-employee-right-main-heading'>Employee Registeration</h1>
                <div className="employee-search-area flex flex-row align-center justify-center">
                    <input id='getEmail' type="email" placeholder='Enter Employee Email' onChange={(event) => {
                        setSearchEmail(event.target.value);
                    }} />
                    <button onClick={SearchUser}>Search</button>
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
                    </div>
                    <div className="employee-reg-credentials flex flex-row align-start justify-center">
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
                        <button className='reg-form-submit-button' onClick={UpdateUser}>Update</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Update
