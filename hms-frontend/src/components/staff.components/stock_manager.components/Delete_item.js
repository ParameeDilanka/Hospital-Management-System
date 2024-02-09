import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";


export default function DeleteItem(){

    let { id } = useParams();
    let history = useHistory();


    useEffect(() => {
        function getItem() {
            axios.delete("http://localhost:8070/pharmacyItem/delete/"+id).then(() => {
                history.push("/staff/stock-manager/list-item");
                alert("Item deleted successfully");
            }).catch((err) => {
                alert(err.message);
            })
        }
        getItem();
    });

    return(

        <div>
            
        </div>
    );

}    
