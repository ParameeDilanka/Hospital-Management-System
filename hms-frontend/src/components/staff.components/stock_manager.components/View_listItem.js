import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import View from '../../../images/view1.png';
import Edit from '../../../images/edit.png';
import Delete from '../../../images/delete.png';


export default function ViewListItem(){
 
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    function getItems() {
      axios.get("http://localhost:8070/pharmacyItem/").then((res) => {
        console.log(res.data);
        setItems(res.data);
      }).catch((error) => {
        alert(error.message);
      })
    }
    getItems();
  }, []);

    
        return(
          <div className="grid-container grid-container-2">
            <div className="grid-item item-3">
              <h2 className="blue-hedding" >Registered Pharmaceutical Items</h2>
              <tr>
                <td>
                  <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}/>
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fas fa-search text-primary"></i>
                    </span>
                  </div>
                </td>
                <Link className="addNewStockBtn" to={"/staff/stock-manager/add-item"}><button className="btn btn-primary"> <i class="fa-solid fa-plus addNewStockBtnI"/>Add New Item</button></Link>
              </tr>
                <div className="scroll-item scroll-item-3">


                  <table class="table table-1">
                    <thead>
                      <tr className="blue-hedding">
                        <th>Item Code</th>
                        <th>Image</th>
                        <th>Generic Name</th>
                        <th>Brand Name</th>
                        <th>Category</th>
                        <th>Dosage/ Weight</th>
                        <th>View Stock</th>
                        <th>Modify</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                      
                    {items.filter(val => {
                      if(searchTerm === ""){
                        return val;
                      }else if(
                        val.item_code.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                        val.generic_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
                        val.brand_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
                        val.category.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
                        val.dosage.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                      ){
                        return val
                      }  
                      }).map((item, key) => (
                      <tr key={key}>
                        <th>{item.item_code}</th>                        
                        <td><img className="itemImage" src={item.imageURL} alt="Item"/></td>
                        <td>{item.generic_name}</td>
                        <td>{item.brand_name}</td>
                        <td>{item.category}</td>
                        <td>{item.dosage}</td>
                        <td><Link to={"/staff/stock-manager/list-item/list-stock/" + item.item_code }><img className="imagebutton" src={View} alt="View"/></Link></td>
                        <td><Link to={"/staff/stock-manager/list-item/edit-item/" + item.item_code }><img className="imagebutton" src={Edit} alt="Edit"/></Link></td>
                        <td><Link to={"/staff/stock-manager/delete-item/" + item.item_code }><img className="imagebutton" src={Delete} alt="Delete"/></Link></td>
                      </tr>
                    ))}
                    </tbody>
                  </table>    
                    
                    
                    
    
                </div>              
            </div>
          </div>
        );
}