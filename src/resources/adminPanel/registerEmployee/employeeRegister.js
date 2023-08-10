import React from 'react'
import Navbar from '../src/components/navbar';
import Sidebar from '../src/components/sidebar';
import '../../../css/reuseable.css'
import '../src/css/admin.css'
import { useEffect } from 'react';

const EmployeeRegister = () => {
  useEffect(() => {
    document.title = 'ASM | Admin';
  }, []);
  return (
    <>
      <div className="register-employee-main">
        <Navbar />
        <div className="register-employee-body flex flex-row">
          <div className="register-employee-left-sidebar flex flex-column align-center justify-center">
            <Sidebar />
          </div>
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
                  <select >
                    <option>Select Gender</option>
                    <option>Marvel</option>
                    <option>DC</option>
                  </select>
                </div>
                <div className="employee-reg-credentials-div flex flex-row">

                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeRegister
