import React, {useState,useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
 
export default function ViewPatientAdmitDetails() {
    
    const [Patient, setpatientId] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8070/admit/getPatient")
            .then(res => setpatientId(res.data))
            .catch(error => console.log(error));
    });
    const [searchNIC, setsearchNIC] = useState("");
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

            <h1 className="text-center pt-3 text-secondary"> Patients Admit Details</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Patient Number</th>
                    <th scope="col">Date Of Admission</th>
                    <th scope="col">Next visit Date</th>
                    <th scope="col">Laboratary Tests</th>
                    <th scope="col">Radiology Tests</th>
                    <th scope="col">Prescription</th>
                    <th scope="col">Date Of Discharge</th>
                   
                    <th scope="col" colSpan="2">Action</th>
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
                }).map((Patient, key) => (
                <tr key={key}>
                    <td>{Patient.PatientNumber}</td>
                    <td>{Patient. d_admission}</td>
                    <td>{Patient.n_visitDate}</td>
                    <td>{Patient.l_test}</td>
                    <td>{Patient.r_test}</td>
                    <td>{Patient.prescription}</td>
                    <td>{Patient. d_dischage}</td>
                 
                    <td><Link to={'/doctor/update-patient/'+Patient._id}><button className="btn btn-outline-success"> <i class="fa-solid fa-pen-to-square"></i>Edit </button></Link>
                    </td>
                    <td><Link to={'/doctor/delete-Patient/'+Patient._id}><button className="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></Link></td>
    </tr>        
                ))}                
            </tbody>      
        </table>
        </div>
        </div>
        </div>
        // </div>
    );

}
