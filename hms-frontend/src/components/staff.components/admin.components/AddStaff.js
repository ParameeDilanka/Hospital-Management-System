/*staff category code*/

import React from "react";
import { Link } from "react-router-dom";
import './cardStyles.css';
import './itemStyles.css'
import Doc from '../../../images/doc.jpg'
import Pharmacist from '../../../images/pharmacist.jpg'
import Rec from '../../../images/rep.jpg'





function AddStaff() {


  return (
    <div className="grid-container">
      <div className="grid-item item-1">



        <div >
          <h1>ADD STAFF MEMBERS</h1>
          <br />

          <div className="row" align="center">
            <div className="column">
              <div className="card">
                <div className="zoom">
                  <h4>Doctor</h4>
                  <img src={Doc} alt="Avatar" style={{ width: "100%" }} height="200" />
                </div>
                <div className="container"> <br />
                  <Link to={'/staff/admin/add-staff/add-doctor'}><button className="button-73" role="button" height="100"> Register  </button> </Link> <br /> <br />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="zoom">
                  <h4>Pharmacist</h4>
                  <img src={Pharmacist} alt="Avatar" style={{ width: "100%" }} height="200" />
                </div>
                <div className="container"> <br />
                  <Link to={'/staff/admin/add-staff/add-pharmacist'}><button className="button-73" role="button" height="100"> Register</button> </Link><br /> <br />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="zoom">
                  <h4>Reception Staff </h4>
                  <img src={Rec} alt="Avatar" style={{ width: "100%" }} height="200" />
                </div>
                <div className="container"> <br />
                  <Link to={"/staff/admin/add-staff/add-receptionist"}><button className="button-73" role="button" height="100"> Register </button></Link> <br /><br />
                </div>
              </div>
            </div>





          </div>  <br />
        </div>
      </div>
    </div>



  );
}

export default AddStaff;