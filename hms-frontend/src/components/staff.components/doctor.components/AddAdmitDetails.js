import React,{useState } from "react";
import axios from "axios";
import admit from '../../../images/admit.jpg'
export default function AddAdmitDetails() {

    const[PatientNumber, setPatientNumber] =useState("");
    const[d_admission, setd_admission]= useState("");
    const[n_visitDate, setn_visitDate]= useState("");
    const[l_test, setl_test] =useState("");
    const[r_test, setr_test]= useState("");
    const[prescription, setprescription]= useState("");
    const[d_dischage, setd_dischage] =useState("");
    
    function sendData(e){
        e.preventDefault();

        const newPatient ={
            PatientNumber, 
            d_admission,
            n_visitDate, 
            l_test, 
            r_test, 
            prescription, 
            d_dischage
           
         }

         axios.post("http://localhost:8070/Admit/add",newPatient).then(() =>{
            alert("Patient Admit Details succefully Added")
            setPatientNumber("");
            setd_admission("");
            setn_visitDate("");
            setl_test("");
            setr_test("");
            setprescription("");
            setd_dischage("");


        }).catch((err) => {
            alert(err)
        })
    }

   return(
    <div className ="grid-container">
    <div className ="grid-item item-3"> 
    <div className="scroll-item-3">
    <div>
            <h1 className="text-center pt-3 text-secondary">Add Patient Admit Details</h1>
            <form onSubmit={sendData} encgender="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Patient Number</label>
                    <input type="text" className="form-control" value={PatientNumber} id="exampleFormControlInput1" placeholder="Enter Patient Number" 
                    onChange={e => setPatientNumber(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Date Of Admission</label>
                    <input type="date" className="form-control" value={d_admission} id="exampleFormControlInput1" 
                    onChange={e => setd_admission(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Next visit Date</label>
                    <input type="date" className="form-control" value={n_visitDate} id="exampleFormControlInput1"  
                    onChange={e => setn_visitDate(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Laboratary Tests</label>
                    <input type="text" className="form-control" value={l_test} id="exampleFormControlInput1" placeholder="Enter Laboratary Tests " 
                    onChange={e => setl_test(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Radiology Tests</label>
                    <input type="text" className="form-control" value={r_test} id="exampleFormControlInput1" placeholder="Enter Radiology Tests" 
                    onChange={e => setr_test(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Pescription</label>
                    <input type="text" className="form-control" value={prescription} id="exampleFormControlInput1" placeholder="Enter Pescription" 
                    onChange={e => setprescription(e.target.value)} />
                </div>
    
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Date Of Discharge</label>
                    <input type="date" className="form-control" value={ d_dischage} id="exampleFormControlInput1"  
                    onChange={e => setd_dischage(e.target.value)} />
                </div>

                <div className="btn btn-primary my-3">
                    <center>
                    <button type = "submit" className="btn btn-primary">ADD</button>
                    </center>
                </div>

            </form>
            </div>
    </div>
    </div> 
    </div>    
);
}  