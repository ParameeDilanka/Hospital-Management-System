/*Delete pharmacist code*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Del from '../../../images/report.png'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

export default function DeletePharmacist() {

  let { id } = useParams();

  useEffect(() => {
    axios
      .delete("http://localhost:8070/pharmacist/deletePharmacist/" + id)
      .then(res => {
        toast.success("Staff member removed", {
          position: toast.POSITION.TOP_CENTER
        })
      })
      .catch(error => console.log(error));
  });



  return (

    <div className='alert'>
      <div className="del">
        <img className="DocImg" src={Del} height="419" alt="DocImg" />
      </div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />  <br /> <br /> <br /> <br /> <br /> <br />
      <div className="alert alert-success">
        <strong > Success!</strong> Staff member has been successfully removed.
      </div>
      <div className='back'>
        <Link to={'/staff/admin/view-staff/view-pharmacist'} className='back'><button className="btn btn-outline-primary"><i class="fas fa-arrow-alt-circle-left"></i>Back</button></Link>
      </div>
    </div>
  );

}    
