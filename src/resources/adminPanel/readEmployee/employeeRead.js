import React from 'react'
import Navbar from '../src/components/navbar'
import Sidebar from '../src/components/sidebar'
import SearchEmployee from '../src/components/searchEmployee'
import '../../../css/reuseable.css'
import '../src/css/admin.css'
import { useEffect } from 'react'

const EmployeeRead = () => {

    useEffect(() => {
      document.title = 'ASM | Employee Search';
    }, []);
  return (
    <>
      <div className="register-employee-main">
        <Navbar />
        <div className="register-employee-body flex flex-row">
          <div className="register-employee-left-sidebar flex flex-column align-center justify-center">
            <Sidebar />
          </div>
          
            <SearchEmployee />
          
        </div>
      </div>
    </>
  )
}

export default EmployeeRead
