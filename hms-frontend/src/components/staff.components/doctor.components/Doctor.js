import React, { useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../customer.components/registration.components/itemStyles.css';
import './StaffStyles.css';
import ProfileImg from '../../../images/doctor.jpg';
import Logo from '../../../images/logo.png'
import{BrowserRouter as Router, Route, Switch} from "react-router-dom"
import DisplayUsers from "./DisplayUser";
import DeleteUsers from "./DeleteUser";
import AddAdmitDetails from "./AddAdmitDetails";
import ViewPatientAdmitDetails from "./ViewPatientAdmitDetails";
import DeletePatient from "./DeletePatient";
import UpdatePatientAdmitDetails from "./UpdatePatientAdmitDetails";
import Report from "./report";




export default function Doctor() {

return (
  
  
        <div className="main-container">
      <div className="flex-box-container">
        <div className="flex-box sidebar-container">
          <div className="sidebar-item logo">
          <img className="logo" src ={Logo}  alt="Logo"/>
          
          </div>
          <div className="sidebar-item profile">
          <img className="profileImg" src = {ProfileImg}  alt="ProfileImg"/>
              <p>Dr.Savani Fernando</p>
             
          </div>
          <div className="sidebar-item sidebar-menu">
                <ul>

                

                  <li className="item">
                  <Link to={"/doctor/view-user/"} className="link">  <i className="fa fa-eye" href="/view-user"></i><span> View Patients list</span> </Link>
                  </li>

                  <li className="item">
                  <Link to={"/doctor/add-admitdetails/"} className="link" ><i className="fa fa-user-plus" ></i><span>Add Patient details</span></Link>
                  </li>

                  <li className="item">
                  <Link to={"/doctor/view-patient/"} className="link">  <i className="fa fa-eye"></i><span> Patient Details</span> </Link>
                  </li>

                  
                  <li className="item">
                        <Link to={"/doctor/report/" }className="link"> <i className="fa fa-file-pdf"></i><span>Generate report</span></Link>
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
              
                <Route path="/doctor/view-user" exact component={DisplayUsers}/>
                <Route path="/doctor/delete-user/:id" exact component={DeleteUsers}/>
                <Route path="/doctor/add-admitdetails" exact component={AddAdmitDetails} />
                <Route path="/doctor/view-patient" exact component={ViewPatientAdmitDetails}/>
                <Route path="/doctor/delete-patient/:id" exact component={DeletePatient}/>
                <Route path="/doctor/update-patient/:id" exact component={UpdatePatientAdmitDetails}/>
                <Route path="/doctor/report"exact component={Report}/>
                </Switch>
            
            </Router>
          
        </div> 
      </div>               
       
      </div>

          

  


    
      
  
);
}

  