import React, { useEffect, useState } from "react";
import './cardStyles.css'
import Repo from '../../../images/rr.png'
import axios from 'axios';
import banner from '../../../images/canvas.png';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { toast } from "react-toastify";




export default function Report() {

    let genPDF = () => {
        const doc = new jsPDF()
        doc.setFontSize(20);
        doc.text("Doctors details report", 70, 10)

        doc.autoTable({
            html: '#details'
        })
        doc.save("StaffReport.pdf");

        toast.info("Report generated!!!", {
            position: toast.POSITION.TOP_CENTER
        });

    }


    const [docs, setDocs] = useState([]);
    const [searchData, setSearchData] = useState("")
    useEffect(() => {
        axios
            .get("http://localhost:8070/staff/")
            .then(res => setDocs(res.data))
            .catch(error => console.log(error));
    });
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    return (

        <div class="grid-container">
            <div className="left-6">
                <img className="DocImg" src={Repo} height="490" alt="DocImg" />
            </div>
            <div class="grid-item-0 item-1">
                <div className="scroll-item-1">
                    <form encType="multipart/form-data"  >
                        <h1>Doctor's Specialization Report</h1>
                        <div class="card3" >
                            <b><label for="outline-floating-label-help1" >Enter Specialization</label></b>
                            <input type="text" name="field1" className="form-control" autoComplete="off" onChange={(e) => { setSearchData(e.target.value); }} required />
                            <small id="inputhelptext" class="form-text text-muted">Enter valid Specialization(example:Surgeon).</small>
                            <br /> <br />

                        </div>

                    </form>  <br />

                    <table className="table table-striped table-hover table-bordered" id="details" style={{ border: "1px solid black" }}>

                        <thead>
                            <tr className="trow">
                                <th colspan="6"><img src={banner} width="640" height="190"></img> </th>
                            </tr>
                            <tr>
                                <th className="cent" scope="col">Doctor&nbsp;Image</th>
                                <th className="cent" scope="col" >Title</th>
                                <th className="cent" scope="col">First&nbsp;Name</th>
                                <th className="cent" scope="col">Last&nbsp;Name</th>
                                <th className="cent" scope="col">NIC</th>
                                <th className="cent" scope="col">Phone&nbsp;Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {docs.filter(val => {
                                if (searchData === '') {
                                    return val;
                                } else if (
                                    val.specialization.toLowerCase().includes(searchData.toLowerCase())
                                ) {
                                    return val;
                                }

                            }).map((doc, key) => (
                                <tr key={key}>
                                    <td className="cent"><img src={'/images/' + doc.img} width="100"></img></td>
                                    <td className="cent">{doc.gender}</td>
                                    <td className="cent">{doc.fname}</td>
                                    <td className="cent">{doc.lname}</td>
                                    <td className="cent">{doc.nic}</td>
                                    <td className="cent">{doc.number}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="submit" className="button-71" onClick={(genPDF)} role="button"><i className="fa fa-file-pdf"></i> Download as PDF</button>
                </div>
            </div>
        </div>








    );
}