import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

toast.configure()

export default function DeleteStock(){

    let { itemId, stockId } = useParams();
    let history = useHistory();


    useEffect(() => {
        function getItem() {
            axios.delete("http://localhost:8070/pharmacyStock/delete/"+stockId).then(() => {
                history.push("/staff/stock-manager/list-item/list-stock/"+itemId);
                toast.error('Stock deleted successfully!!!', { 
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000 
                 });
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
