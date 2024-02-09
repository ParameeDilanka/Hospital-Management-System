import React,{useState } from "react";
import axios from "axios";

export default function Register() {

    const[name, setName]= useState("");
    const[address, setaddress]= useState("");
    const[gender, setgender] =useState("");
    const[dob, setdob]= useState("");
    const[age, setage]= useState("");
    const[contactNumber, setcontactNumber] =useState("");
    const[email, setemail] =useState("");
    const[NIC, setNIC] =useState("");
    const[password, setpassword] =useState("");
    
    function sendData(e){
        e.preventDefault();

        const newUser ={
            name,
            address, 
            gender, 
            dob, 
            age, 
            contactNumber, 
            email, 
            NIC, 
            password
         }

         axios.post("http://localhost:8070/register/add",newUser).then(() =>{
            alert("User Added")
            setName("");
            setaddress("");
            setgender("");
            setdob("");
            setage("");
            setcontactNumber("");
            setemail("");
            setNIC("");
            setpassword("");


        }).catch((err) => {
            alert(err)
        })
    }

   return(
    <div className ="grid-container">
    <div className ="grid-item item-3">
    <div className="scroll-item-3">
   
    <div>
            <h1 className="text-center pt-3 text-secondary">Register</h1>
            
            <form onSubmit={sendData} className="was-validated" encgender="multipart/form-data">

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input type="text" className="form-control" value={name} id="exampleFormControlInput1" placeholder="Enter  Name" onChange={e => setName(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Address</label>
                    <input type="text" className="form-control" value={address} id="exampleFormControlInput1" placeholder="Enter Address" 
                    onChange={e => setaddress(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Gender</label>
                         <select value={gender} className="form-control" id="exampleFormControlInput1" rows="3" onChange={e => setgender(e.target.value)} required>
                            <option value = "" selected disabled>--Select gender--</option>
                            <option value = "Female" >Female</option>
                            <option value = "Male">Male</option>
                         </select>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Date of Birth</label>
                    <input type="date" className="form-control" value={dob} id="exampleFormControlInput1" placeholder="mm/dd/yy" 
                    onChange={e => setdob(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Age</label>
                    <input type="text" className="form-control" value={age} id="exampleFormControlInput1" placeholder="Enter age" 
                    onChange={e => setage(e.target.value)} required/>
                </div>
    
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Contact Number</label>
                    <input type="text" className="form-control" value={contactNumber} id="exampleFormControlInput1" pattern="[0-9]{10}" placeholder="0767087223" 
                    onChange={e => setcontactNumber(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email</label>
                    <input type="text" className="form-control" value={email} id="exampleFormControlInput1" placeholder="Enter email" 
                    onChange={e => setemail(e.target.value)} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">NIC</label>
                    <input type="text" className="form-control" value={NIC} pattern="[0-9]{12}" id="exampleFormControlInput1" placeholder="Enter NIC" 
                    onChange={e => setNIC(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Password</label>
                    <input type="password" className="form-control" value={password} id="exampleFormControlInput1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                    onChange={e => setpassword(e.target.value)} required role="alert" />
                    <div class="alert alert-danger" role="alert">
                    Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
                    </div>
                </div>
                
                <div class="d-grid gap-2 col-2 mx-auto">
                        <button type="submit" class="btn btn-primary btn-block mb-3"  >Register</button>
                </div>
    
            </form>
        </div>
    </div>
</div> 
</div> 


       
);

}   