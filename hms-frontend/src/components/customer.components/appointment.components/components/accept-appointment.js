import React, { Component, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Appointment = props => (
  <tr>
    <td>{props.appointment.date.substring(0,10)}</td>
    <td>{props.appointment.time}</td>
    <td>{props.appointment.firstname}</td>
    <td>{props.appointment.lastname}</td>
    <td>{props.appointment.email}</td>
    <td>{props.appointment.phone}</td>
    <td>{props.appointment.doctorname}</td>
    <td>
    <a href="/appointment/demo"
   class="btn btn-success" id="schedule">
      <i class="fas fa-clock"></i></a>
     </td>
<td>
 <a href="#" onClick={() => { props.deleteAppointment(props.appointment._id) }}
   class="btn btn-danger" id="decline">
      <i class="fas fa-trash-alt"></i></a>
</td>
  </tr>
);
export default class AcceptAppointment extends Component {
  constructor(props) {
    super(props);
    
    this.deleteAppointment = this.deleteAppointment.bind(this)

    this.state = {appointments: []};
  }
  
  componentDidMount() {
    axios.get('http://localhost:8070/appointments/')
      .then(response => {
        this.setState({ appointments: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteAppointment(id) {
    axios.delete('http://localhost:8070/appointments/'+id)
    .then(() => {
      alert("Appointment Declined")
    }).catch((err)=>{
      alert("Failed to decline apointment")
    })

    this.setState({
        appointments: this.state.appointments.filter(el => el._id !== id)
    })
  }

  acceptAppointment() {
    return this.state.appointments.map(currentappointment => {
      return <Appointment appointment={currentappointment} deleteAppointment={this.deleteAppointment} key={currentappointment._id}/>;
    })
  }
  filterData(appointments, searchKey){
    const result = appointments.filter((appointment)=>
      appointment.doctorname.includes(searchKey)
      )
    this.setState({appointments:result})
  }
 

  handleSearchArea = (e)=>{
  const searchKey=e.currentTarget.value;
  axios.get('http://localhost:8070/appointments/')
      .then(response => {
        if(response.data.success){
          this.filterData(response.data.existingAppointments,searchKey)
        }     
  });
}


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
              <h6>Nuwan Perera</h6>
              <h7>Doctor</h7>
          </div>
          <div class="sidebar-item sidebar-menu">
          <ul>
          <li className="item">
                            <Link to={"/appointment/mainstaff"}><i class="fa-solid fa-house"></i><span>Dashboard</span></Link>
              </li>
              <li className="item">
                            <Link to={"/appointment/accept"}><i class="fas fa-list-ul"></i><span>View</span></Link>
              </li>

              <li className="item">
                            <Link to={"/appointment/demo"}><i class="fas fa-clock" aria-hidden="true"></i><span>Schedular</span></Link>
              </li>
            </ul>
          </div>
        </div>
        <div class ="flex-box content-container">
              <div class ="grid-container">
                <div class ="grid-item item-1">
                  <div class="scroll-item scroll-item-1">
                <h2 style={{color:"#084587"}}>Appointment List</h2>

      <div className="container">
        <table className="table">
        <table bgcolor="#ddffdd"  align="center" width="100%">
          <thead className="text-gold">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Doctorname</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.acceptAppointment() }
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
}