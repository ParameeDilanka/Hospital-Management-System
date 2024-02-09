import React, { Component } from 'react';
// "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import "./itemStyles.css";
import "./cardStyles.css";
import "./staffStyles.css";
export default class MainStaff extends Component {
 
   
  
  render() {
    return (
<div> 
  <link rel="stylesheet" href="staffStyles.css"></link>
  <link rel="stylesheet" href="cardStyles.css"></link>
  <link rel="stylesheet" href="itemStyles.css"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <body>
<div class="main-container">
  <div class="flex-box-container">
    <div class="flex-box sidebar-container">
      <div class="sidebar-item logo">
          <img class="logo" src="/logo.png"/>
      </div>
      <div class="sidebar-item profile">
         <img class="profileImg" src={require("../../../../images/profile.png").default}/> 
         <h6>Sasini</h6>
         <h7>Receptionist</h7>
      </div>
      <div class="sidebar-item sidebar-menu">
           
            <ul>
            <li className="item">
                <Link to={"/appointment/mainstaff"}><i class="fa-solid fa-house"></i><span>Dashboard</span></Link>
              </li>
              <li className="item">
                <Link to={"/appointment"}><i class="fa-solid fa-user"></i><span>User</span></Link>
              </li>
            </ul>
          
      </div>
      <div class="sidebar-item logout">
        <ul>
            <li><a class="logout-btn"><i class="fa fa-sign-out" aria-hidden="true"></i><span>Log Out</span></a></li>
        </ul>  
      </div>
    </div>
    <div class ="flex-box content-container">
          <div class ="grid-container">
            <div class ="grid-item item-1">
              <div class="scroll-item scroll-item-1">
            <h2 style={{color:"#084587"}}>Appointments</h2>
    
            <div class ="row">
                 <div class ="column">
                  <div class ="card">
                  <div class ="zoom">
				  <h3>Doctor</h3>
                   <img src={require("../../../../images/doc.jpg").default} alt="Avatar" style={{width:"100%", height:"200"}}/><br></br><br></br>
                     </div>
                   <div class ="container">
                   <Link to={'/appointment/accept'}><button class ="button-73" role="button" height = "100"> View </button></Link> <br/> <br/>
                    </div>
                  </div>
                 </div> 
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <div class ="column">
                    <div class ="card">
                    <div class ="zoom">
				      	<h3>Reception Staff </h3>
                     <img src={require("../../../../images/rep.jpg").default} alt="Avatar" style={{width:"100%", height:"200"}}/><br></br><br></br>
                     </div>
                      <div class ="container">
                      <Link to={'/appointment/staff'}><button class="button-73" role="button" height = "100"> View </button></Link><br></br>
                      </div>
                    </div>
                     </div> 
              </div>          
            </div>
        </div> 
        </div> 
      </div>
      </div>       
</div>
</body>
</div> 
    );
  }
}
