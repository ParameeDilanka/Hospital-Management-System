import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {Link} from 'react-router-dom';

export default function Report() {
          
    const [searchNIC, setsearchNIC] = useState("");
    let genPDF = () => {
     const doc = new jsPDF()
     doc.setFontSize(20);
     doc.text("Medi Lanka - Patient report", 60,10)
   
     doc.autoTable({
       html: '#details'
     })
     doc.save("PatientReport.pdf");
   }
         
     const [Patient, setpatient] = useState([]);
     useEffect(() => {
         axios
             .get("http://localhost:8070/Admit/getPatient")
             .then(res => setpatient(res.data))
             .catch(error => console.log(error));
     });
     const current = new Date();
     const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
 
     return(
        <div className ="grid-container">
        <div className ="grid-item item-1">
        <div className="scroll-item-1">
   
        <form action="/" method="get" align="right">
            <label htmlFor="header-search">
            <span className="visually-hidden">Search </span>
            </label>
            <input
            style={{width:"20%"}}
            type="search"
            id="header-search"
            placeholder="Search.."
            onChange={(e)=> {
            setsearchNIC(e.target.value);
            }}
        />
            <Link to={'/doctor/Search/'+  Patient._id}><button type="submit">Search</button></Link>
        </form>
            
                 <br/> <br/>
                 <div  style={{textAlign:'center'}}>
                   <center>
                    <h3><div className="Title" style={{fontFamily: "courier New"}}><i class="fa fa-heartbeat" aria-hidden="true"></i><b> Medi Lanka</b></div> </h3>
                   <h3 style={{textAlign:'center'}}> <b>Patient Report</b></h3>
                   <h6 style={{textAlign:'center'}}> Report generated on: {date} </h6>
                   <br/>
                   </center>
                   </div>
       
         <table className="table table-striped" id="details"  >
               
             <thead>
                 <tr>
                    <th scope="col">Patient Number</th>
                    <th scope="col">Date Of Admission</th>
                    <th scope="col">Next visit Date</th>
                    <th scope="col">Laboratary Tests</th>
                    <th scope="col">Radiology Tests</th>
                    <th scope="col">Prescription</th>
                    <th scope="col">Date Of Discharge</th>
                    
                 </tr>
             </thead>    
             <tbody>
                 {Patient.filter(val=>{
                    if(setsearchNIC === ""){
                        return val;
                    }else if(
                        val.PatientNumber.toLowerCase().includes(searchNIC.toLowerCase())
                    ){
                        return val;
                    }
                }).map((patient, key) => (
                 <tr key={key}>
                    <td>{patient.PatientNumber}</td>
                    <td>{patient. d_admission}</td>
                    <td>{patient.n_visitDate}</td>
                    <td>{patient.l_test}</td>
                    <td>{patient.r_test}</td>
                    <td>{patient.prescription}</td>
                    <td>{patient. d_dischage}</td>   
                 </tr>        
                 ))}                
             </tbody> 
             
         </table>
         <div style={{textAlign:'center'}}>
         <button  className="btn btn-outline-success" type ="primary"  onClick= {(genPDF)}>
                 Download PDF <i className="fas fa-file-pdf"> </i> 
             </button>
             &nbsp;&nbsp;&nbsp;&nbsp;
         </div>
         </div>
         </div>
         </div>
     );
 
 }