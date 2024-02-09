import React from 'react';
import './common_styles.css';
import profile from '../../images/profile.png';

export default function SidebarProfile(){

    return(
        <div className="sidebar-item profile-container">
              <img className="profileImg" alt="Profile" src={profile}/>
              <p className="fw-bold mb-0">K.M.R.I. Senanayaka</p>
              <p className="mb-0"><small>Stock Manager</small></p>
        </div>
    );
}