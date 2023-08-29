import React from 'react'
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../../../../utils/firebase'
import '../../../../css/registerationForm.css'

const RegisterationForm = () => {

  const name_regex = /^[A-Za-z -]+$/;
  const email_regex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
  const password_regex = /^.{6,}$/; //regex for password of max 6 character that should have atleast one capital letter,one special character and a number.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [department, setDepartment] = useState("IT");
  const [employmentType, setEmploymentType] = useState("Permanent");
  let [employee, setEmployee] = useState([]);
  const CreateUser = async () => {
    if ((firstName == "") || (lastName == "") || (email == "") || (password == "") || (confirmPassword == "")) {
      console.log("Some fields are empty");
     } 
     else {
      if ((name_regex.test(firstName)) && (name_regex.test(lastName)) && (email_regex.test(email)) && (password_regex.test(password)) && (password_regex.test(confirmPassword))) {
        if (password == confirmPassword) {
          let usersCollectionRef = collection(db, "employee");

          const data = await getDocs(usersCollectionRef);
          setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          const searchEmailValue = document.getElementById("email").value;
          const matchingEmployee = employee.find((employee) => employee.email === searchEmailValue);
          if (matchingEmployee) {
            console.log("Employee already exist");
          } else {
            await addDoc(usersCollectionRef, { firstName: firstName, lastName: lastName, email: email, dob: dob, password: password, gender: gender, department: department, employmentType: employmentType });
          }
          // document.getElementById("getEmail").value = "";
          // document.getElementById("firstname").value = "";
          // document.getElementById("lastname").value = "";
          // document.getElementById("email").value = "";
          // document.getElementById("date").value = "";
          // document.getElementById("password").value = "";
          // document.getElementById("employmenttype").value = "Permanent";
          // setSearchEmail("");
          // setFirstName("");
          // setLastName("");
          // setEmail("");
          // setDob("");
          // setPassword("");
          // setEmploymentType("Permanent");
        } else {
          console.log("Password doesnot match");
        }
      }
      else {
        console.log("Values entered are not in the correct format");
      }
    }
  };

  return (
    <>
      <div className="register-employee-right flex flex-column align-center justify-start">
        <h1 className='register-employee-right-main-heading'>Employee Registeration</h1>
        <div className='reg-form flex flex-column align-start justify-center'>
          <div className="employee-reg-credentials flex flex-row align-start justify-center">
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>First Name</p>
              <input className="credential-input" type="text" id='name' placeholder='Enter First Name' onChange={(event) => {
                setFirstName(event.target.value);
              }} />
            </div>
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Last Name</p>
              <input className="credential-input" type="text" placeholder='Enter Last Name' onChange={(event) => {
                setLastName(event.target.value);
              }} />
            </div>
          </div>
          <div className="employee-reg-credentials flex flex-row align-start justify-center">
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Email</p>
              <input className="credential-input" type="email" placeholder='Enter Email' id='email' onChange={(event) => {
                setEmail(event.target.value);
              }} />
            </div>
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Date of Birth</p>
              <input className="credential-input" type="date" onChange={(event) => {
                setDob(event.target.value);
              }} />
            </div>
          </div>
          <div className="employee-reg-credentials flex flex-row align-start justify-center">
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Password</p>
              <input className="credential-input" type="password" placeholder='Enter Password' onChange={(event) => {
                setPassword(event.target.value);
              }} />
            </div>
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Confirm Password</p>
              <input className="credential-input" type="password" placeholder='Confirm Password' onChange={(event) => {
                setConfirmPassword(event.target.value);
              }} />
            </div>
          </div>
          <div className="employee-reg-credentials flex flex-row align-start justify-center">
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Gender</p>
              <select className='credential-input-dropdown' onChange={(event) => {
                setGender(event.target.value);
              }}>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Department</p>
              <select className='credential-input-dropdown' onChange={(event) => {
                setDepartment(event.target.value);
              }}>
                <option>IT</option>
                <option>Finance</option>
                <option>Sales and Marketing</option>
                <option>Creatives</option>
              </select>
            </div>
          </div>
          <div className="employee-reg-credentials flex flex-row align-start justify-center">
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Employment Type</p>
              <select className='credential-input-dropdown' onChange={(event) => {
                setEmploymentType(event.target.value);
              }}>
                <option>Permanent</option>
                <option>Temporary</option>
              </select>
            </div>
          </div>
          <div className="employee-reg-form-buttons flex align-center justify-center">
            <button onClick={CreateUser} className='reg-form-submit-button'>Register</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterationForm
