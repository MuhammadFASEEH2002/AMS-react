import React from 'react'
import { useEffect } from 'react'
import Navbar from '../src/components/navbar'
import Sidebar from '../src/components/sidebar'
import Update from '../src/components/update'
import '../../../css/reuseable.css'
import '../../../../src/css/admin.css'

const EmployeeUpdate = () => {
  useEffect(() => {
    document.title = 'ASM | Employee Update';
  }, []);
  return (
    <>
    <div className="register-employee-main">
      <Navbar />
      <div className="register-employee-body flex flex-row">
        <div className="register-employee-left-sidebar flex flex-column align-center justify-center">
          <Sidebar />
        </div>
       <Update/>
      </div>
    </div>
  </>
  )
}

export default EmployeeUpdate
