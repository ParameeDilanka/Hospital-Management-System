import React, {useState, useEffect} from 'react';
import axios from "axios";
import Remove from '../../../images/Remove.png';

export default function ShoppingCart(){

  const [list, setList] = useState([]);
  const [totPrice, setTotPrice] = useState("");
  const [cash, setCash] = useState(0);
 

  useEffect(()=>{
    if(sessionStorage.getItem('pharmacy_cart') != null){
      let cart = sessionStorage.getItem('pharmacy_cart');
      cart = JSON.parse(cart);
      setList(cart);
    }
   
   },[])
  
  

   const handleRemove=(e)=>{
    let id = e.target.getAttribute("getId");
    const newList = [...list];
    newList.splice(id, 1);
    setList(newList);
  };

  useEffect(()=>{
    
    sessionStorage.setItem('pharmacy_cart',JSON.stringify(list));
    
   },[list])
   
  function ViewTotal(){

    setTotPrice("");

    if(sessionStorage.getItem('pharmacy_cart') != null){
      let cart = sessionStorage.getItem('pharmacy_cart');
      cart = JSON.parse(cart);
      setList(cart);
    }

    let tot = 0;

    list.map((cart) => (
      tot += cart.totAmount
    ))
    setTotPrice(tot)
  } 

  function CancelCart(){
    setList([]);
    setTotPrice("");
    setCash(0);
    sessionStorage.removeItem('pharmacy_cart');
  }

  function PayCart(){

    if(sessionStorage.getItem('pharmacy_cart') != null){
      let cart = sessionStorage.getItem('pharmacy_cart');
      cart = JSON.parse(cart);
      setList(cart);
    }

    list.map((cart) => (

      axios.post("http://localhost:8070/pharmacySale/add",cart).then(()=>{
          
          })
     
    ));
      
    setList([]);
    setTotPrice("");
    setCash(0);
    sessionStorage.removeItem('pharmacy_cart');
  }

    return(
        <div className="grid-container grid-container-1">
            <div className="grid-item item-1">
              <h2 className="blue-hedding" >Cart</h2>
                <div className="scroll-item scroll-item-1">


                  <table class="table table-1">
                    <thead>
                      <tr className="blue-hedding">
                        <th>Index</th>
                        <th>Code</th>
                        <th>Image</th>
                        <th>Generic&nbsp;Name</th>
                        <th>Brand&nbsp;Name</th>
                        <th>Dosage/ Weight</th>
                        <th>Unit&nbsp;Price<br/>Rs/=</th>
                        <th>Quantity</th>
                        <th>Total&nbsp;Amount<br/>Rs/=</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                      
                    {list.map((cart, key) => (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <th>{cart.stock.stock_id}</th>                        
                        <td><img className="itemImage" src={cart.item.imageURL} alt="Item"/></td>
                        <td>{cart.item.generic_name}</td>
                        <td>{cart.item.brand_name}</td>
                        <td>{cart.item.dosage}</td>
                        <td>{cart.stock.unit_price}</td>
                        <td>{cart.quantity}</td>
                        <td>{cart.totAmount}</td>
                        <td><img getId={key} onClick={handleRemove} className="imagebutton" src={Remove} alt="Remove"/></td>
                      </tr>
                    ))}
                    </tbody>
                  </table>    
                </div>            
            </div>
            <div className="grid-item item-2">
              <div className="scroll-item scroll-item-2">
                <tr>
                  <td><button className="btn btn-primary" onClick={ViewTotal}>Total</button></td>
                  <td><h3 className="text-danger">&emsp;Total Rs/= {totPrice}</h3></td>
                  <td ><strong><p className="blue-hedding">&emsp;Cash Rs/=</p></strong></td>
                  <td><input className="form-control" name="quantity" type="number" value={cash} autoComplete="off" onChange={(e)=>{setCash(e.target.value)}}/></td>
                  <td><strong><p className="blue-hedding">&emsp;&emsp;Balance Rs/= {cash - totPrice}&emsp;</p></strong></td>
                  <td><button className="btn btn-success" onClick={PayCart}>Pay</button>&emsp;&emsp;</td>
                  <td><button className="btn btn-danger" onClick={CancelCart}>Cancel</button></td>
                </tr>
              </div>
            </div>
        </div>
    );
}