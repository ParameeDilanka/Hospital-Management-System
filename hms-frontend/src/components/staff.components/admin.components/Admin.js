import React, { useState } from "react";
import './itemStyles.css';
import './StaffStyles.css';
import ProfileImg from '../../../images/profile.png';
import Logo from '../../../images/logo.png'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AddDoc from "./AddDoc";
import AddPharmacist from "./AddPharmacist";
import AddStaff from "./AddStaff";
import ViewStaff from "./ViewStaff";
import ViewDocList from "./ViewDocList";
import ViewPharmacistList from "./ViewPharmacistList";
import Report from "./Report";
import AddReceptionist from "./AddReceptionist";
import ViewReceptionistList from "./ViewReceptionistList";
import DeleteDoc from "./DeleteDoc";
import DeletePharmacist from "./DeletePharmacist";
import DeleteReceptionist from "./DeleteReceptionist";
import UpdateDoc from "./UpdateDoc";
import UpdatePharmacist from "./UpdatePharmacist";
import UpdateReceptionist from "./UpdateReceptionist";
import Dashboard from "./Dashboard";
import Login from "./Staff_login";
import AdminSidebarNavigation from "./Admin_sidebarNavigation";
import StaffLogOut from "./Staff_logOut";
import ViewDoc from "./ViewDoc";
import ViewRec from "./ViewRec";
import ViewPhar from "./ViewPhar";
import SearchDoc from "./SearchDoc";
import SearchPhar from "./SearchPhar";
import SearchRec from "./SearchRec";
import 'react-toastify/dist/ReactToastify.css';





export default function Admin() {

  return (

    <div className="App">
      <Router>
        <Switch>
          <div className="main-container">
            <div className="flex-box-container">
              <div className="flex-box sidebar-container">
                <div className="sidebar-item logo">
                  <img className="logo" src={Logo} alt="Logo" />

                </div>
                <div className="sidebar-item profile">
                  <img className="profileImg" src={ProfileImg} alt="ProfileImg" />
                  <h5 style={{ fontWeight: "bold" }}>P.G.S.Shanaya</h5>
                  <h6>Admin</h6>
                </div>
                <Route path="/staff/admin" component={AdminSidebarNavigation} />
                <Route path="/staff" component={StaffLogOut} />
              </div>
              <div className="flex-box content-container">

                <Route path="/staff/admin/add-staff" exact component={AddStaff} />
                <Route path="/staff/admin/add-staff/add-doctor" exact component={AddDoc} />
                <Route path="/staff/admin/add-staff/add-pharmacist" exact component={AddPharmacist} />
                <Route path="/staff/admin/add-staff/add-receptionist" exact component={AddReceptionist} />
                <Route path="/staff/admin/view-staff" exact component={ViewStaff} />
                <Route path="/staff/admin/view-staff/view-doctor" exact component={ViewDocList} />
                <Route path="/staff/admin/view-staff/view-pharmacist" exact component={ViewPharmacistList} />
                <Route path="/staff/admin/view-staff/view-receptionist" exact component={ViewReceptionistList} />
                <Route path="/staff/admin/staff-report" exact component={Report} />
                <Route path="/staff/admin/delete-staff/:id" exact component={DeleteDoc} />
                <Route path="/staff/admin/delete-pharmacist/:id" exact component={DeletePharmacist} />
                <Route path="/staff/admin/delete-receptionist/:id" exact component={DeleteReceptionist} />
                <Route path="/staff/admin/update-staff/:id" exact component={UpdateDoc} />
                <Route path="/staff/admin/update-pharmacist/:id" exact component={UpdatePharmacist} />
                <Route path="/staff/admin/update-receptionist/:id" exact component={UpdateReceptionist} />
                <Route path="/staff/admin/dashboard" exact component={Dashboard} />
                <Route path="/staff/admin/login" exact component={Login} />
                <Route path="/staff/admin/view-doc/:id" exact component={ViewDoc} />
                <Route path="/staff/admin/view-receptionist/:id" exact component={ViewRec} />
                <Route path="/staff/admin/view-pharmacist/:id" exact component={ViewPhar} />
                <Route path="/staff/admin/view-staff/search-doctor" exact component={SearchDoc} />
                <Route path="/staff/admin/view-staff/search-pharmacist" exact component={SearchPhar} />
                <Route path="/staff/admin/view-staff/search-receptionist" exact component={SearchRec} />


              </div>
            </div>
          </div>



        </Switch>

      </Router>

    </div>

  );
}