import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Bee from '../../../images/bee.png'








export default function ViewDoc() {

    let { id } = useParams();

    const [doc, setDoc] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8070/staff/get/${id}`)
            .then(res => setDoc(res.data))
            .catch(error => console.log(error));
    });





    return (
        <div className="grid-container">
            <div className="left-10">
                <img className="DocImg" src={Bee} height="480" alt="DocImg" />
            </div>
            <div className="grid-item-3 item-1">
                <div className="scroll-item-1">
                    <h1 style={{ textAlign: 'center' }}>Doctor Details</h1>
                    <table className="table" style={{ border: "0" }}>


                        <tr>
                            <th scope="col">Doctor&nbsp;Image</th>
                            <center>
                                <td><img src={'/images/' + doc.img} width="200" /></td>
                            </center>
                        </tr>
                        <tr>
                            <th scope="col" >Title</th>
                            <td align>{doc.gender}</td>
                        </tr>
                        <tr>
                            <th scope="col">First&nbsp;Name</th>
                            <td>{doc.fname}</td>
                        </tr>
                        <tr>
                            <th scope="col">Last&nbsp;Name</th>
                            <td>{doc.lname}</td>
                        </tr>
                        <tr>
                            <th scope="col">NIC</th>
                            <td>{doc.nic}</td>
                        </tr>
                        <tr>
                            <th scope="col">Specialization</th>
                            <td>{doc.specialization}</td>
                        </tr>
                        <tr>
                            <th scope="col">Phone&nbsp;Number</th>
                            <td>{doc.number}</td>
                        </tr>
                        <tr>
                            <th scope="col">E-&nbsp;mail</th>
                            <td>{doc.email}</td>
                        </tr>
                        <tr>
                            <th scope="col">Province</th>
                            <td>{doc.province}</td>

                        </tr>
                        <tr>
                            <th scope="col">City</th>
                            <td>{doc.city}</td>
                        </tr>
                        <tr>
                            <th scope="col">Street</th>
                            <td>{doc.street}</td>

                        </tr>
                        <tr>
                            <th scope="col">Postal&nbsp;Code</th>
                            <td>{doc.pcode}</td>
                        </tr>


                    </table>

                </div>
            </div>
        </div>







    );

}
