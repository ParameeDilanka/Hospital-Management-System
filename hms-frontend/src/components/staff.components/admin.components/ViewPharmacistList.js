import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';






export default function ViewPharmacistList() {

    const [pharmacists, setPharmacists] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8070/pharmacist/viewPharmacist/")
            .then(res => setPharmacists(res.data))
            .catch(error => console.log(error));
    });

    return (
        <div className="grid-container">
            <div className="grid-item-6 item-1">
                <div className="scroll-item-1">
                    <h1 style={{ textAlign: 'center' }}>Pharmacist List</h1>
                    <table className="table table-striped table-hover table-condensed" >
                        <thead>
                            <tr>
                                <th scope="col" className="cent">Pharmacist Image</th>
                                <th scope="col" className="cent">Title</th>
                                <th scope="col" className="cent">First&nbsp;Name</th>
                                <th scope="col" className="cent">Last&nbsp;Name</th>
                                <th scope="col" className="cent">View</th>
                                <th scope="col" className="cent">Modify</th>
                                <th scope="col" className="cent">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pharmacists.map((pharmacist, key) => (
                                <tr key={key}>
                                    <td className="cent"><img src={'/images/' + pharmacist.img} width="100"></img></td>
                                    <td className="cent">{pharmacist.gender}</td>
                                    <td className="cent">{pharmacist.fname}</td>
                                    <td className="cent">{pharmacist.lname}</td>

                                    <td className="cent"><Link to={'/staff/admin/view-pharmacist/' + pharmacist._id}><i class='far fa-file-alt fa-big'></i></Link></td>
                                    <td className="cent"><Link to={'/staff/admin/update-pharmacist/' + pharmacist._id}><i class='fas fa-edit fa-big fa-green'></i></Link></td>
                                    <td className="cent"><Link to={'/staff/admin/delete-pharmacist/' + pharmacist._id}><i class="fa-solid fa-trash-can fa-big fa-red"></i></Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>







    );

}
