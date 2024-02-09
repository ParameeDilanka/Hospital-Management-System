import React, {useState,useEffect} from 'react';
import axios from "axios";
import'../../customer.components/registration.components/table.css';
import {Link} from 'react-router-dom';

export default function DisplayUsers() {
    
    const [users, setUserId] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8070/register/getUser")
            .then(res => setUserId(res.data))
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
        <Link to={'/doctor/Search/'+  users._id}><button type="submit">Search</button></Link>
    </form>

            <h1 className="text-center pt-3 text-secondary">Registered Patients</h1>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">NIC</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Gender</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Age</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Email</th>
                    
                    <th scope="col">Password</th>
                    <th scope="col" colSpan="2">Action</th>
                </tr>
            </thead>    
            <tbody>
                {users.filter(val=>{
                    if(searchNIC === ""){
                        return val;
                    }else if(
                        val.email.toLowerCase().includes(searchNIC.toLowerCase()) ||
                        val.NIC.toLowerCase().includes(searchNIC.toLowerCase())
                    ){
                        return val;
                    }
                }).map((User, key) => (
                <tr key={key}>
                    <td>{User.NIC}</td>
                    <td>{User.name}</td>
                    <td>{User.address}</td>
                    <td>{User.gender}</td>
                    <td>{User.dob}</td>
                    <td>{User.age}</td>
                    <td>{User.contactNumber}</td>
                    <td>{User.email}</td>
                    
                    <td>{User.password}</td>
                 
                    <td><Link to={'/doctor/add-admitdetails'}><button className="btn btn-outline-success"><i class="fa-solid fa-calendar-plus"></i>Add</button></Link></td>
                    <td><Link to={'/doctor/delete-user/'+User._id}><button className="btn btn-outline-danger"> <i class="fa-solid fa-trash-can"></i>Delete</button></Link></td>
    </tr>        
                ))}                
            </tbody>      
        </table>
        </div>
        </div>
        </div>
        
    );

}
