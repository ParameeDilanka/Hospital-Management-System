import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

export default function DeleteUsers(){

    let {id} = useParams();

    useEffect(() => {
        axios
            .delete("http://localhost:8070/register/delete/"+id)
            .then(res => {alert("User deleted")})
            .catch(error => {console.log(error)});
    });

    return(

        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <center>
				<br/>
                <h4>User deleted</h4>
            </center>
            
        </div>
    );

}    