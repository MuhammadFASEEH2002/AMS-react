import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../../../../css/reuseable.css'
import '../../../../css/navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
    function logoutButton() {
        navigate('/', { replace: true });
    }
    return (
        <>
            <div className="navbar flex flex-row">
                <div className="logo flex align-center justify-start">
                    <div className='logo-image'></div>
                </div>
                <p className="welcome-text flex align-center justify-end" id="welcome_text">Welcome, Admin</p>
                <div className="logoutbutton-div flex align-center justify-center">
                    <button className="logout" id="logout" onClick={logoutButton}><FontAwesomeIcon icon={faArrowRightFromBracket}/></button>
                </div>
            </div>
        </>
    )
}

export default Navbar
