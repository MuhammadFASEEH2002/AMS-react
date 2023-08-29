import React from 'react'
import '../../../../css/reuseable.css'
import '../../../../css/sidebar.css'
import { NavLink, } from 'react-router-dom';
const Sidebar = () => {
    return (
        <>
            <div className="admin-image"></div>
            <div className="admin-control-buttons flex flex-column">
                <ul>
                    <li className='flex align-center justify-center'><NavLink to="/admin/register-employee">Register Employee</NavLink></li>
                    <li className='flex align-center justify-center'><NavLink to="/admin/search-employee">Search Employee</NavLink></li>
                    <li className='flex align-center justify-center'><NavLink to="/admin/update-employee">Update Employee Data</NavLink></li>
                    <li className='flex align-center justify-center'><NavLink to="/admin/delete-employee">Remove Employee</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
