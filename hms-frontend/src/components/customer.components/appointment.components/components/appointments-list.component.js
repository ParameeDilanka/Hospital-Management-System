import React, { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./itemStyles.css";
import "./cardStyles.css";
import "./staffStyles.css";

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
    <a href={"/appointment/edit/"+props.appointment._id}
   class="btn btn-warning" id="delete">
      <i class="fas fa-edit"></i></a>
      </td>
  <td>
    <a href="#" onClick={() => { props.deleteAppointment(props.appointment._id) }}
   class="btn btn-danger" id="delete">
      <i class="fas fa-trash-alt"></i></a>
</td>
  </tr>
);
export default class AppointmentsList extends Component {
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
      alert("Appointment Deleted")
    }).catch((err)=>{
      alert("Failed to delete apointment")
    })

    this.setState({
        appointments: this.state.appointments.filter(el => el._id !== id)
    })
  }

  appointmentList() {
    return this.state.appointments.map(currentappointment => {
      return <Appointment appointment={currentappointment} deleteAppointment={this.deleteAppointment} key={currentappointment._id}/>;
    })
  }
    
  filterContent(appointments, searchTerm){
    const result=appointments.filter((appointment) =>
    appointment.firstname.includes(searchTerm));
  
  this.setState({appointments: result});
  }

  handleTextSearch =(e)=>{
    const searchTerm=e.currentTarget.value;
    axios.get('http://localhost:8070/appointments/')
    .then((res) =>{
 if(res.data.success){
   this.filterContent(res.data.appointment, searchTerm)
 }
   });
  };

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
          {/* <img class="profileImg" src="profile.png"/> */}
          <h4>E - Channelling</h4>
          
      </div>
      <div class="sidebar-item sidebar-menu">      
      <ul>
              <li className="item">
                            <Link to={"/appointment/create"}><i class="fa fa-plus-square" aria-hidden="true"></i><span>Add</span></Link>
              </li>

              <li className="item">
                            <Link to={"/appointment"}><i class="fas fa-list-ul"></i><span>View</span></Link>
              </li>
              <li className="item">
                            <Link to={"/appointment/mainstaff"}><i class="fa-solid fa-user" aria-hidden="true"></i><span>Staff</span></Link>
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
            <h2 style={{color:"#084587"}}>Appointments List</h2>
      <div className ="container">

      <div>
        <table className="container">
        <table className="table">
        <table bgcolor="#ddddff" align="center" width="100%">
          <thead  className="text-gold">
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
            { this.appointmentList() }
            </tbody>
            </table> 
        </table>
        </table>
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








