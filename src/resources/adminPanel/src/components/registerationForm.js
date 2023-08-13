import React from 'react'
import { useEffect, useState } from 'react';
import '../css/registerationForm.css'

const RegisterationForm = () => {
  function RegisterEmployee() {
    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("");
    const [department, setDepartment] = useState("");
    const [employmentType, setEmploymentType] = useState("");
  }
  return (
    <>
      <div className="register-employee-right flex flex-column align-center justify-start">
        <h1 className='register-employee-right-main-heading'>Employee Registeration</h1>
        <form action="" className='reg-form flex flex-column align-start justify-center'>
          <div className="employee-reg-credentials flex flex-row align-start justify-center">
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>First Name</p>
              <input className="credential-input" type="text" />
            </div>
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Last Name</p>
              <input className="credential-input" type="text" />
            </div>
          </div>
          <div className="employee-reg-credentials flex flex-row align-start justify-center">
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Email</p>
              <input className="credential-input" type="email" />
            </div>
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Date of Birth</p>
              <input className="credential-input" type="date" />
            </div>
          </div>
          <div className="employee-reg-credentials flex flex-row align-start justify-center">
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Password</p>
              <input className="credential-input" type="password" />
            </div>
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Confirm Password</p>
              <input className="credential-input" type="password" />
            </div>
          </div>
          <div className="employee-reg-credentials flex flex-row align-start justify-center">
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Gender</p>
              <select className='credential-input-dropdown'>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="employee-reg-credentials-div flex flex-row">
              <p className='credential-label flex align-center justify-start'>Department</p>
              <select className='credential-input-dropdown'>
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
              <select className='credential-input-dropdown'>
                <option>Permanant</option>
                <option>Temporary</option>
              </select>
            </div>
          </div>
          <div className="employee-reg-form-buttons flex align-center justify-center">
            <button type="submit" className='reg-form-submit-button'>Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterationForm
