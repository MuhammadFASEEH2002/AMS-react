import React from 'react';
import { useEffect } from 'react'
import Navbar from '../../adminPanel/src/components/navbar';


const UserInfo = () => {

    useEffect(() => {
        document.title = 'ASM | Employee Update';
      }, []);
      return (
        <>
        <div className="register-employee-main">
          <Navbar />
          <div className="register-employee-body flex flex-row">
            <div className="register-employee-left-sidebar flex flex-column align-center justify-center">
              {/* <Sidebar /> */}
            </div>
           {/* <Update/> */}
          </div>
        </div>
      </>
      )
  
}

export default UserInfo;
