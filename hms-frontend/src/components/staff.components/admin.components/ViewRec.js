import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Images from '../../../images/updateR.png';
import './tab.css'
import Bee from '../../../images/bee.png'





export default function ViewRec() {

    let { id } = useParams();

    const [rec, setRec] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8070/receptionist/getRec/" + id)
            .then(res => setRec(res.data))
            .catch(error => console.log(error));
    });





    return (
        <div className="grid-container">
            <div className="left-10">
                <img className="DocImg" src={Bee} height="480" alt="DocImg" />
            </div>
            <div className="grid-item-3 item-1">
                <div className="scroll-item-1">
                    <h1 style={{ textAlign: 'center' }}>Receptionist Details</h1>
                    <table className="table">


                        <tr>
                            <th scope="col">Receptionist&nbsp;Image</th>
                            <center>
                                <td><img src={'/images/' + rec.img} width="200"></img></td>
                            </center>
                        </tr>
                        <tr>
                            <th scope="col" >Title</th>
                            <td align>{rec.gender}</td>
                        </tr>
                        <tr>
                            <th scope="col">First&nbsp;Name</th>
                            <td>{rec.fname}</td>
                        </tr>
                        <tr>
                            <th scope="col">Last&nbsp;Name</th>
                            <td>{rec.lname}</td>
                        </tr>
                        <tr>
                            <th scope="col">NIC</th>
                            <td>{rec.nic}</td>
                        </tr>
                        <tr>
                            <th scope="col">Qualifications</th>
                            <td>{rec.qualifications}</td>
                        </tr>
                        <tr>
                            <th scope="col">Phone&nbsp;Number</th>
                            <td>{rec.number}</td>
                        </tr>
                        <tr>
                            <th scope="col">E-&nbsp;mail</th>
                            <td>{rec.email}</td>
                        </tr>
                        <tr>
                            <th scope="col">Province</th>
                            <td>{rec.province}</td>

                        </tr>
                        <tr>
                            <th scope="col">City</th>
                            <td>{rec.city}</td>
                        </tr>
                        <tr>
                            <th scope="col">Street</th>
                            <td>{rec.street}</td>

                        </tr>
                        <tr>
                            <th scope="col">Postal&nbsp;Code</th>
                            <td>{rec.pcode}</td>
                        </tr>


                    </table>

                </div>
            </div>
        </div>








    );

}
