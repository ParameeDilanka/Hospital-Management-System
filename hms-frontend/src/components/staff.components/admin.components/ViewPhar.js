import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './tab.css'
import Bee from '../../../images/bee.png'





export default function ViewPhar() {

    let { id } = useParams();

    const [phar, setPhar] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8070/pharmacist//getPharmacist/" + id)
            .then(res => setPhar(res.data))
            .catch(error => console.log(error));
    });





    return (
        <div className="grid-container">
            <div className="left-10">
                <img className="DocImg" src={Bee} height="480" alt="DocImg" />
            </div>
            <div className="grid-item-3 item-1">
                <div className="scroll-item-1">
                    <h1 style={{ textAlign: 'center' }}>Pharmacist Details</h1>
                    <table className="table">


                        <tr>
                            <th scope="col">Pharmacist&nbsp;Image</th>
                            <center>
                                <td><img src={'/images/' + phar.img} width="200"></img></td>
                            </center>
                        </tr>
                        <tr>
                            <th scope="col" >Title</th>
                            <td align>{phar.gender}</td>
                        </tr>
                        <tr>
                            <th scope="col">First&nbsp;Name</th>
                            <td>{phar.fname}</td>
                        </tr>
                        <tr>
                            <th scope="col">Last&nbsp;Name</th>
                            <td>{phar.lname}</td>
                        </tr>
                        <tr>
                            <th scope="col">NIC</th>
                            <td>{phar.nic}</td>
                        </tr>
                        <tr>
                            <th scope="col">Phone&nbsp;Number</th>
                            <td>{phar.number}</td>
                        </tr>
                        <tr>
                            <th scope="col">E-&nbsp;mail</th>
                            <td>{phar.email}</td>
                        </tr>
                        <tr>
                            <th scope="col">Province</th>
                            <td>{phar.province}</td>

                        </tr>
                        <tr>
                            <th scope="col">City</th>
                            <td>{phar.city}</td>
                        </tr>
                        <tr>
                            <th scope="col">Street</th>
                            <td>{phar.street}</td>

                        </tr>
                        <tr>
                            <th scope="col">Postal&nbsp;Code</th>
                            <td>{phar.pcode}</td>
                        </tr>


                    </table>

                </div>
            </div>
        </div>







    );

}
