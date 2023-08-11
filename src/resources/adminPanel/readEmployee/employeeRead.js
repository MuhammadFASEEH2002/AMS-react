import React from 'react'
import Navbar from '../src/components/navbar'
import Sidebar from '../src/components/sidebar'
import '../../../css/reuseable.css'
import '../src/css/admin.css'

const EmployeeRead = () => {
  return (
    <>
      <div className="register-employee-main">
        <Navbar />
        <div className="register-employee-body flex flex-row">
          <div className="register-employee-left-sidebar flex flex-column align-center justify-center">
            <Sidebar />
          </div>
          <div className="register-employee-right flex flex-column align-center justify-start">
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeRead
