import React from 'react'
import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout'; 

import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';


const LogoutContainer = () => {
    const [showLogout , setShowLogout] = useState(false);
    const { user , logoutUser } = useDashboardContext();

  return (
    <Wrapper>
        <button type='button' className='btn logout-btn' onClick={ ()=>  setShowLogout(!showLogout)}>
            <FaUserCircle/>
            {user?.providerAdminInfo?.firstName || user?.firstName+' '+ user?.familyName }
            <FaCaretDown/>
        </button>

        <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={logoutUser}>logout</button>
        </div>
    </Wrapper>
  )
}

export default LogoutContainer