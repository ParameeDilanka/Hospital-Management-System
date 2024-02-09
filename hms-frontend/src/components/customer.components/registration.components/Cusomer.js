import React, { useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './itemStyles.css';
import '../../staff.components/doctor.components/StaffStyles.css';
import ProfileImg from '../../../images/profile.png';
import Logo from '../../../images/logo.png'
import{BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Register from "./register";
import Login from "./login";



export default function Customer() {

return (
  
  
        <div className="main-container">
        <div className="flex-box-container">
        <div className="flex-box sidebar-container">
          <div className="sidebar-item logo">
          <img className="logo" src ={Logo}  alt="Logo"/>
          
          </div>
          <div className="sidebar-item profile">
          <img className="profileImg" src = {ProfileImg}  alt="ProfileImg"/>
              
             
          </div>
          <div className="sidebar-item sidebar-menu">
                <ul>

                  <li className="item">
                  <Link to={"/customer/add-customer/"} className="link" ><i className="fa fa-user-plus" aria-hidden="true" href="/add-customer"></i><span>Register</span></Link>
                  </li>

                  <li className="item">
                  <Link to={"/customer/login"} className="link">  <i className="fa fa-eye"></i><span>Login</span> </Link>
                  </li>

                  <li className="item">
                        <Link to={"customer/account/" }className="link"> <i className="fa fa-file-pdf"></i><span>My Account</span></Link>
                  </li>
                  
                </ul>
              
          </div>
          <div className="sidebar-item logout">
            <ul>
                <li><a className ="logout-btn" ><i className="fa fa-sign-out" aria-hidden="true"></i><span>Log Out</span></a></li>
            </ul>  
          </div>
        </div>
        <div className="flex-box content-container">
            <Router> 
                <Switch>
                <Route path="/customer/add-customer/" exact component={Register} />
                <Route path="/customer/login/" exact component={Login} />
             

                </Switch>
            
            </Router>
          
        </div> 
      </div>       
    
      </div>

  
);
}

  