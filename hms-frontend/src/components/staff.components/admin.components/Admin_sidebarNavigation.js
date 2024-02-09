/*Admin sidebar navigation*/
import React from "react";
import { Link } from "react-router-dom";

export default function AdminSidebarNavigation() {

  return (
    <div className="sidebar-item sidebar-menu">


      <ul>
        <li className="item">

          <Link to={"/staff/admin/dashboard/"} className="link" ><i className="fa fa-home"></i><span>Dashboard</span></Link>

        </li>

        <li className="item">
          <Link to={"/staff/admin/add-staff/"} className="link" ><i className="fa fa-user-plus" aria-hidden="true" ></i><span>Add new staff</span></Link>
        </li>

        <li className="item">
          <Link to={"/staff/admin/view-staff/"} className="link">  <i className="fa fa-eye" aria-hidden="true"></i><span> View staff list</span> </Link>
        </li>


        <li className="item">
          <Link to={"/staff/admin/staff-report/"} className="link"> <i className="fa fa-file-pdf" aria-hidden="true"></i><span>Generate report</span></Link>
        </li>

      </ul>

    </div>
  );
}