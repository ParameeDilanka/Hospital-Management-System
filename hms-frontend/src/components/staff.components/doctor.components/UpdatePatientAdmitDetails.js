import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

export default function UpdatePatientAdmitDetails() {

    const[PatientNumber, setPatientNumber] =useState("");
    const[d_admission, setd_admission]= useState("");
    const[n_visitDate, setn_visitDate]= useState("");
    const[l_test, setl_test] =useState("");
    const[r_test, setr_test]= useState("");
    const[prescription, setprescription]= useState("");
    const[d_dischage, setd_dischage] =useState("");  

    let {id} = useParams(); 

    useEffect(() => {
        function getPatient() {
            axios.get("http://localhost:8070/Admit/get/"+id).then((res) => {
                setPatientNumber(res.data.PatientNumber);
                setd_admission(res.data.d_admission);
                setn_visitDate(res.data.n_visitDate);
                setl_test(res.data.l_test);
                setr_test(res.data.r_test);
                setprescription(res.data.prescription);
                setd_dischage(res.data.d_dischage);    
               
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPatient();
    }, []);


     const UpdatePatientAdmitDetails = e => {
         e.preventDefault();

        const UpdatePatientAdmitDetails = {
            PatientNumber,
            d_admission,
            n_visitDate,
            l_test,
            r_test,
            prescription,
            d_dischage
        }
    
        console.log(d_dischage);
        console.log(UpdatePatientAdmitDetails);
        axios.put("http://localhost:8070/Admit/update/"+id, UpdatePatientAdmitDetails).then(()=>{
                    alert("Patient Admit Details are updated successfully !!!")
                }).catch(()=>{
                    alert(" Patient Admit details did not update. Please try again !!!")
                });    
     };

    return ( 
        <div className="grid-container">
        
      <div className ="grid-item-2 item-1">
        <div className="scroll-item-1">
                    <div className = "form-group mb-3">
                    <form encType="multipart/form-data"  name="form1"  onSubmit={UpdatePatientAdmitDetails}  role="form" style={{padding:"20px 80px 0px 80px;"}} >
                     <center><h1> Update Patient Admit Details</h1> </center>
           <ul className="form-style-1">    
    
                        
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Patient Number</label>
                    <input type="text" className="form-control" value={PatientNumber} id="exampleFormControlInput1" placeholder="Enter Patient Number" 
                    onChange={e => setPatientNumber(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Date Of Admission</label>
                    <input type="date" className="form-control" value={d_admission} id="exampleFormControlInput1" 
                    onChange={e => setd_admission(e.target.value)}  />
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
                         <br/>
                         <div style={{textAlign:'center'}}>
                         <button type = "submit" className="btn btn-outline-success" role="button"> <i class="fa-solid fa-pen-to-square"></i>Update</button>
                         </div>
                     </ul>   
                    </form>
                  </div>              
                </div>
            </div> 
            </div> 

    )
}