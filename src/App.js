import React from 'react';
import Login from './resources/loginScreen/login'
import EmployeeRegister from './resources/adminPanel/registerEmployee/employeeRegister'
import EmployeeRead from './resources/adminPanel/readEmployee/employeeRead'
import EmployeeUpdate from './resources/adminPanel/updateEmployee/employeeUpdate'
import EmployeeDelete from './resources/adminPanel/deleteEmployee/employeeDelete'
import User from './resources/userPanel/user.js'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/admin/register-employee" element={<EmployeeRegister/>} />
        <Route path="/admin/search-employee" element={<EmployeeRead/>} />
        <Route path="/admin/update-employee" element={<EmployeeUpdate/>} />
        <Route path="/admin/delete-employee" element={<EmployeeDelete/>} />
        <Route path="/admin/user" element={<User/>}/>
      </Routes>
    </Router>
  </>
  );
}

export default App;
