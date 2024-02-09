/*Admin dashboard*/
import React from "react";
import { Link } from "react-router-dom";
import './table.css';
import Doc from '../../../images/doc.jpg'
import Pharmacist from '../../../images/pharmacist.jpg'
import Rec from '../../../images/rep.jpg'
import logo from '../../../images/favicon.png'



export default function Dashboard() {



  return (


    <div className="grid-container">
      <div className="grid-item item-1">

        <div >
          <h1>Dashboard</h1>


          <div className="row">
            <div className="column">
              <div className="card">
                <div className="zoom">
                  <h4>Doctor</h4>
                  <img src={Doc} alt="Avatar" style={{ width: "100%" }} height="190" />
                </div>
                <div className="container"> <br />
                  <Link to={"/staff/admin/view-staff/search-doctor"}><button className="button-73" role="button" height="100"> Click  </button> </Link> <br /> <br />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="zoom">
                  <h4>Pharmacist</h4>
                  <img src={Pharmacist} alt="Avatar" style={{ width: "100%" }} height="190" />
                </div>
                <div className="container"> <br />
                  <Link to={'/staff/admin/view-staff/search-pharmacist'}><button className="button-73" role="button" height="100"> Click</button> </Link><br /> <br />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="zoom">
                  <h4>Reception Staff </h4>
                  <img src={Rec} alt="Avatar" style={{ width: "100%" }} height="190" />
                </div>  <br />
                <div className="container">
                  <Link to={"/staff/admin/view-staff/search-receptionist"}><button className="button-73" role="button" height="100"> Click </button></Link> <br /><br />
                </div>
              </div>
            </div>





          </div>
        </div> <br />

        <marquee direction="left" className="tex" scrollamount="10">
          <img src={logo} alt="Avatar" width="50" height="35" />
          <b>Welcome to MediLanka Staff portal !</b>

        </marquee>
      </div>
    </div>











  );
}