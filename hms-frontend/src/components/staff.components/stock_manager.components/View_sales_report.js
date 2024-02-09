import React, { useState } from 'react';
import axios from "axios";
import jsPDF from 'jspdf'
import 'jspdf-autotable'

export default function SalesReport(){

  
 
  const [items, setItems] = useState([]);
  const [month, setMonth] = useState("");
  const [wholeData, setWholeData] = useState([]);
  
  const columns = [
    {title: "Item Code", field: "item_code",},
    {title: "Generic Name", field: "generic_name",},
    {title: "Brand Name", field: "brand_name",},
    {title: "Dosage/ Weight", field: "dosage",},
    {title: "Quantity", field: "quantity",},
    {title: "Total", field: "total",}
  ]
  const colum = [
    {title: "Total Quantity", field: "quantity",},
    {title: "Total Income", field: "total",}
  ]

  const Filter = (e)=>{

    const filterMonth = e.currentTarget.value;

    setMonth(filterMonth);

    if(filterMonth){
      axios.get("http://localhost:8070/pharmacySale/group/"+ filterMonth).then((res) => {
          setItems(res.data);
        }).catch((error) => {
          alert(error.message);
        });
      axios.get("http://localhost:8070/pharmacySale/total/"+ filterMonth).then((res) => {
        setWholeData(res.data);
      }).catch((error) => {
        alert(error.message);
      });
    }  
  }
  
  function Download(){
    
    const doc = new jsPDF()
    doc.text("Monthly Sales Report                               Month : "+month,15,10)
    doc.autoTable({
      columns:columns.map(col=>({...col,dataKey:col.field})),
      body:items
    })
    doc.autoTable({
      columns:colum.map(col=>({...col,dataKey:col.field})),
      body:wholeData
    })

    doc.save("table.pdf")

  };

  return(
    <div className="grid-container grid-container-6">
      <div className="grid-item item-12">
        <h2 className="blue-hedding" >Monthly Sales Report</h2>
        <tr>
          <td className="reportMonth"><input className="form-control" name="quantity" type="month" required pattern="\d{4}-\d{2}" value={month} autoComplete="off" onChange={Filter}/></td>
          <td className="reportDownloadBtn"><button className="btn btn-primary" onClick={Download} on>Download Reort</button></td>
        </tr>
    
          <div className="scroll-item scroll-item-12">

            <table class="table table-1"  id="my-table">
              <thead>
                <tr className="blue-hedding">
                  <th>Item Code</th>
                  <th>Image</th>
                  <th>Generic Name</th>
                  <th>Brand Name</th>
                  <th>Dosage/ Weight</th>
                  <th>Total Quantity</th>
                  <th>Total income Rs/=</th>
                </tr>
              </thead>
              
              <tbody>
                
              {items.map((item, key) => (
                <tr key={key}>
                  <th>{item.item_code}</th>                        
                  <td><img className="itemImage" src={item.imageURL} alt="Item"/></td>
                  <td>{item.generic_name}</td>
                  <td>{item.brand_name}</td>
                  <td>{item.dosage}</td>
                  <td>{item.quantity}</td>
                  <td>{item.total}</td>
                  
                </tr>
              ))}
              </tbody>
            </table>    
          </div> 
          {wholeData.map((quant) => (
            <tr className="blue-hedding">
              <th className="totalQuantity"><strong>Total quantity : </strong>{quant.quantity}</th>
              <th className="totalIncome"><strong>Total income Rs/= : </strong>{quant.total}</th>
            </tr>
          ))}            
      </div>
    </div>
  );        
}