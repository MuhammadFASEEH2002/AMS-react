import React from 'react'
import Navbar from '../src/components/navbar'
import Sidebar from '../src/components/sidebar'
import '../../../css/reuseable.css'
import '../src/css/admin.css'
import Delete from '../src/components/delete'

const EmployeeDelete = () => {
  return (
    <>
    <div className="register-employee-main">
      <Navbar />
      <div className="register-employee-body flex flex-row">
        <div className="register-employee-left-sidebar flex flex-column align-center justify-center">
          <Sidebar />
        </div>
        <Delete/>
      </div>
    </div>
  </>
  )
}

export default EmployeeDelete
