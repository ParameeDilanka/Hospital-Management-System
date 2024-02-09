import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from "react-router-dom";
import Edit from '../../../images/edit.png';
import Delete from '../../../images/delete.png';
import { useHistory } from "react-router-dom";

export default function ViewListStock(){

    let {id} = useParams();
    let history = useHistory();

    const [item, setItem] = useState([]);
    const [stocks, setStocks] = useState([]);
  
    useEffect(() => {
        function getItemStock() {
            axios.get("http://localhost:8070/pharmacyItem/get/"+id).then((res) => {
                console.log(res.data);
                setItem(res.data);
            }).catch((error) => {
                alert(error.message);
            });

            axios.get("http://localhost:8070/pharmacyStock/get/all/"+id).then((res) => {
                console.log(res.data);
                setStocks(res.data);
            }).catch((error) => {
                alert(error.message);
            });

        }
        getItemStock();
     }, [id]);


     function confirmDelete(stock_id) {
        history.push("/staff/stock-manager/delete-stock/"+ id + "/" + stock_id );
     }


    return(
        <div className="grid-container grid-container-3">
            <div className="grid-item item-5">
                <h2 className="blue-hedding">Stock</h2>
                <tr>
                    <td><h3 className="blue-hedding">Item Code : {item.item_code}</h3></td>
                    &emsp;&emsp;&emsp;
                    <td><img className="itemImageInStockList" src={item.imageURL} alt="Item"/></td>
                    <Link className="addNewStockBtn" to={"/staff/stock-manager/list-item/list-stock/add-stock/" + item.item_code }><button className="btn btn-primary"> <i class="fa-solid fa-plus addNewStockBtnI"/>Add New Stock</button></Link>
                </tr>    
                <div className="scroll-item scroll-item-5">
                    <table class="table table-1">
                        <thead>
                            <tr className="blue-hedding">
                                <th>Stock ID</th>
                                <th>Added Date</th>
                                <th>Manufacture Date</th>
                                <th>Expiry Date</th>
                                <th>Unit Price<br/>Rs/=</th>
                                <th>Added Quantity</th>
                                <th>Current Quantity</th>
                                <th>Modify</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        
                            {stocks.map((stock, key) => (
                            <tr key={key}>
                                <th>{stock.stock_id}</th>
                                <td>{stock.added_date}</td>
                                <td>{stock.manufacture_date}</td>
                                <td>{stock.expiry_date}</td>
                                <td>{stock.unit_price}</td>
                                <td>{stock.added_quantity}</td>
                                <td>{stock.added_quantity-stock.sales_quantity}</td>
                                <td><Link to={"/staff/stock-manager/list-item/list-stock/edit-stock/"+ id + "/" + stock.stock_id }><img className="imagebutton" src={Edit} alt="Edit"/></Link></td>
                                {/* <td><Link to={"/staff/stock-manager/delete-stock/"+ id + "/" + stock.stock_id }><img className="imagebutton" src={Delete} alt="Delete"/></Link></td> */}
                                <td><img className="imagebutton" src={Delete} alt="Delete" onClick={() => {if(window.confirm('Delete the item?')){confirmDelete(stock.stock_id)};}}/></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>    
                </div>
            </div> 
        </div>          
    );
}