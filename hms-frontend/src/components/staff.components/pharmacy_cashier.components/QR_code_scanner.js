import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import QrReader from 'react-qr-reader';
import axios from 'axios';


export default function QRcodeScanner(){

  let history = useHistory();
  let histo = useHistory();
 
  const [scanResultWebCam, setScanResultWebCam] =  useState(null);

  const [item, setItem] = useState([]);
  const [stock, setStocks] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [list, setList] = useState([]);
 

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
      setScanResultWebCam(result);

      axios.get("http://localhost:8070/pharmacyStock/get/"+result).then((res) => {
        setStocks(res.data);
        getItem(res.data.item_code);
      }).catch((error) => {
        alert(error.message);
      });

      function getItem(itemCode) {
          axios.get("http://localhost:8070/pharmacyItem/get/"+itemCode).then((res) => {
              setItem(res.data);
          }).catch((error) => {
              alert(error.message);
          });
      };
      
    }
  }

  function addToCart(e){
    e.preventDefault();
    


    if(sessionStorage.getItem('pharmacy_cart') != null){
      let cart = sessionStorage.getItem('pharmacy_cart');
      cart = JSON.parse(cart);
      setList(cart);
    }

    const totAmount = stock.unit_price * quantity;
  

    const data={item,stock,quantity,totAmount}
    if(item && stock && quantity && totAmount){
       setList((ls)=>[...ls,data])
       setItem([]);
       setStocks([]);
       setQuantity(1);
       setScanResultWebCam(null);
       history.push("/staff/pharmacy-cashier");
    }
  }

  useEffect(()=>{
    histo.push("/staff/pharmacy-cashier/shopping-cart");

    sessionStorage.setItem('pharmacy_cart',JSON.stringify(list));

  },[list,histo])

  return (
    <div>
      <center>
      <QrReader
        delay={300}
        style={{width: "200px"}}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
        />
        {(!scanResultWebCam && <h4 className="blue-hedding mt-3">Scan QR code</h4>)}
        </center>
        
        {scanResultWebCam && 
        <div className="mt-3">
        <center>
           <h4 className="blue-hedding">Stock ID : {stock.stock_id}</h4>
           <img className="itemImageInCashier" src={item.imageURL} alt="Item"/>
           <div>
           <form onSubmit={addToCart}>
           
                <div class="form-group row mt-2 quantity">
                  <label for="quantity" class="col-sm-6 col-form-label"><strong>Quantity :</strong></label>
                  <div class="col-sm-6">
                    <input className="form-control" name="quantity" type="number" value={quantity} autoComplete="off" onChange={(e)=>{setQuantity(e.target.value)}}/>
                  </div>
                  
                  
                </div>
                
                <button className="btn btn-primary mt-3" type="submit">Add to Cart</button>

            </form>    
           
           </div>
           
        </center>
    </div>}
    

    </div>
  );
}


