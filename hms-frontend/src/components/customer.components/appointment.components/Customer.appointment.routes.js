import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import AppointmentsList from "./components/appointments-list.component";
import EditAppointment from "./components/edit-appointment";
import AcceptAppointment from "./components/accept-appointment";
import CreateAppointment from "./components/create-appointment.component";
import Staff from "./components/appointment-staff-list";
import Mailer from "./components/mailer";
import Report from "./components/Report";
import Demo from "./components/Demo";
import MainStaff from "./components/Mainstaff";
import MatTable from "./components/pdf.js";
import './components/index.css';


export default function Appointment() {

  return (
    <Router>
      <Route path="/appointment" exact component={AppointmentsList} />
      <Route path="/appointment/accept" exact component={ AcceptAppointment} />
      <Route path="/appointment/edit/:id" exact component={EditAppointment} />
      <Route path="/appointment/create" exact component={CreateAppointment} />
      <Route path="/appointment/mailer" exact component={Mailer} />
      <Route path="/appointment/report" exact component={Report} />
      <Route path="/appointment/demo" exact component={Demo} />
      <Route path="/appointment/staff" exact component={ Staff } />
      <Route path="/appointment/mainstaff" exact component={ MainStaff } />
      <Route path="/appointment/pdf" exact component={MatTable} />
    </Router>
      
  );
}

