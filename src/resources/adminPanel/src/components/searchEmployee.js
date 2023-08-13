import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../../utils/firebase'
import { useEffect, useState } from 'react'
import React from 'react'
import '../css/searchEmployee.css'
const SearchEmployee = () => {
  const [employee, setEmployee] = useState([]);
  const usersCollectionRef = collection(db, "employee");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <>
      <div className="search-employee-right flex flex-column align-center justify-start">
        <h1 className='register-employee-right-main-heading'>Employee Search</h1>
        <div className="employee-search-data flex flex-column align-center justify-center">
          <div className="employee-search-heading-row flex flex-row align-center justify-center">
            <h3 className="table-heading flex align-center justify-center">Name</h3>
            <h3 className="table-heading flex align-center justify-center">Email</h3>
            <h3 className="table-heading flex align-center justify-center">Date of Birth</h3>
            <h3 className="table-heading flex align-center justify-center">Gender</h3>
            <h3 className="table-heading flex align-center justify-center">Department</h3>
            <h3 className="table-heading flex align-center justify-center">Employment Type</h3>
          </div>
 
          {employee.map((employee) => {
            return (
              <div className="employee-search-data-row flex flex-row align-center justify-center">
                <h1 className='table-row flex align-center justify-center'>{employee.firstName + " " + employee.lastName}</h1>
                <h1 className='table-row flex align-center justify-center'>{employee.email}</h1>
                <h1 className='table-row flex align-center justify-center'>{employee.dob}</h1>
                <h1 className='table-row flex align-center justify-center'>{employee.gender}</h1>
                <h1 className='table-row flex align-center justify-center'>{employee.department}</h1>
                <h1 className='table-row flex align-center justify-center'>{employee.employmentType}</h1>
              </div>
            );
          })}
       


        </div>
      </div>
    </>
  )
}

export default SearchEmployee
