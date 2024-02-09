import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function ViewListAppointment(){
 
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    function getAppointments() {
      axios.get("http://localhost:8070/appointments/").then((res) => {
        console.log(res.data);
        setAppointments(res.data);
      }).catch((error) => {
        alert(error.message);
      })
    }
    getAppointments();
  }, []);

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
                                <Link to={"/appointment/mailer"}><i class="fas fa-envelope" aria-hidden="true"></i><span>Send E-mail</span></Link>
                  </li>
                  
                  <li className="item">
                                <Link to={"/appointment/report"}><i class="fas fa-chart-line"></i><span>Reports</span></Link>
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
                <h2 style={{color:"#084587"}}>Appointment List</h2>

                <tr>
                <td>
                  <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}/>
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fas fa-search text-primary"></i>
                    </span>
                  </div>
                </td>

              </tr>
              <div className="container">
        <table className="table">
        <table bgcolor="#DEDEDE" align="center" width="100%">
          <thead className="text-gold">
                  
                      <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Doctorname</th>
                        <th>Action</th>
                        
                      </tr>
                    </thead>
                
                    <tbody> 
                    {appointments.filter(val => {
                      if(searchTerm === ""){
                        return val;
                      }else if(
                        val.date.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
                        val.time.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
                        val.firstname.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                        val.lastname.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
                        val.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
                        val.doctorname.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                      ){
                        return val
                      }  
                      }).map((appointments, key) => (
                      <tr key={key}>
                         <td>{appointments.date}</td>
                        <td>{appointments.time}</td>
                        <th>{appointments.firstname}</th>                        
                        <td>{appointments.lastname}</td>
                        <td>{appointments.email}</td>
                        <td>{appointments.phone}</td>
                        <td>{appointments.doctorname}</td>

                        <a href="/appointment/mailer" class="btn btn-outline-primary" id="email"><i class="fas fa-envelope"></i></a>&nbsp;
                      </tr>
                    ))}
                    </tbody>
        </table>
        </table>
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

