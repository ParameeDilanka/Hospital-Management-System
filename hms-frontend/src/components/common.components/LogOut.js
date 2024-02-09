import React from 'react';
import './common_styles.css';

export default function LogOut(){

    return(
        <div class="sidebar-item logout">
            <ul>
                <li className="logout-btn" ><i className="fa fa-sign-out" aria-hidden="true"></i><span>Log Out</span></li>
            </ul>  
        </div>
    );
}