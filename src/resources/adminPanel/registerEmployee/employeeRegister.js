import React from 'react'
import Navbar from '../src/components/navbar';
import Sidebar from '../src/components/sidebar';
import RegisterationForm from '../src/components/registerationForm';
import '../../../css/reuseable.css'
import '../../../css/admin.css'
import { useEffect} from 'react';

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
            <RegisterationForm/>
        </div>
      </div>
    </>
  );
};

export default EmployeeRegister
