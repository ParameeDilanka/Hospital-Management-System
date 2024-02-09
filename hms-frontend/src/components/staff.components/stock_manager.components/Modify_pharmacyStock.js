import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import { TextField } from '../../Input_field.components/Text_field';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {useParams} from "react-router-dom";
import { DatePicker } from './Input_field.components/Datepicker_field';
import { SymbolTextField } from '../../Input_field.components/Symbol_text_field';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import capsulepillsimg from '../../../images/capsulepillsimg1.png';



toast.configure()

const validate = Yup.object().shape({

    manufactureDate:Yup.date()
        .required("Manufacture Date is required"),
    expiryDate:Yup.date()
        .required("Expiry Date is required"),
    unitPrice:Yup.string()
        .min(1, "Price should not be zero")
        .matches(/^[0-9]+[.]+\d{2}$/, "Invalid price format (Rs. 10.00)")
        .required("Unit Price is required"),
    addedQuantity:Yup.number()
        .typeError("Quantity must be a number")
        .min(1, "Quantity should not be zero")
        .required("Added Quantity is required"),
  });


export default function ModifyStock(){

    let { itemId, stockId } = useParams();
    let history = useHistory();

    const [item, setItem] = useState([]);
    const [stock, setStock] = useState([]);
  
    useEffect(() => {
        function getItemStock() {
            axios.get("http://localhost:8070/pharmacyItem/get/"+itemId).then((res) => {
                setItem(res.data);
            }).catch((error) => {
                alert(error.message);
            });

            axios.get("http://localhost:8070/pharmacyStock/get/"+stockId).then((res) => {
                console.log(res.data);
                setStock(res.data);
            }).catch((error) => {
                alert(error.message);
            });

        }
        getItemStock();
     }, [itemId,stockId]);



    return(
        <div className="grid-container grid-container-4">
            <div className="grid-item item-6">
                <div className="scroll-item scroll-item-6">
                    <tr><th><h4 className="blue-hedding">Item Code : {item.item_code} | Stock ID : {stock.stock_id}</h4></th></tr>
                    <br/>
                    <tr><td><img className="itemImageInAddStock" src={item.imageURL} alt="Item"/></td></tr>
                </div>    

            </div>
            <div className="grid-item item-7">
                <h2 className="blue-hedding" >Modify Stock</h2>
        
                <div className="scroll-item scroll-item-7">
                
                
                    <Formik
                        initialValues={{
                            manufactureDate: stock.manufacture_date,
                            expiryDate: stock.expiry_date,
                            unitPrice: stock.unit_price,
                            addedQuantity: stock.added_quantity,
                        } || {
                            manufactureDate: "",
                            expiryDate: "",
                            unitPrice: "",
                            addedQuantity: "",
                        }}
                        enableReinitialize={true}
                        validationSchema={validate}
                        onSubmit={(values)=>{
                            
                            axios.put("http://localhost:8070/pharmacyStock/update/"+stockId, values).then(()=>{
                                console.log(stockId);
                                toast.success('Stock updated successfully!!!', { 
                                    position: toast.POSITION.TOP_CENTER,
                                    autoClose: 8000 
                                 });
                                history.push("/staff/stock-manager/list-item/list-stock/"+itemId);
                                
                            }).catch((err)=>{
                                alert(err)
                            });
                            
                        }}
                    >

                        {formik => (
                            <Form>
                                <DatePicker/>
                                <SymbolTextField  label="Unit Price" symbol="Rs." name="unitPrice" type="text" placeholder="Enter Unit Price"/>
                                <TextField label="Added Quantity" name="addedQuantity" type="text" placeholder="Enter Added Quantity"/>
                                
                                
                                <button className="btn btn-primary add-btn" type="submit">Save Changes</button>
                                <Link to={"/staff/stock-manager/list-item/list-stock/"+itemId}>
                                    <button className="btn btn-secondary mx-5 my-2" type="">Back</button>
                                </Link>
                            </Form>
                        )}
                    </Formik>
                

                </div>              
            </div>

            <div className="grid-item item-8">
                <div className="scroll-item-8">
                    <img className="capsulepillsimgInAddStock" src={capsulepillsimg} alt="capsulepillsimg" /> 
                    <h5 className="blue-hedding">Manage the stock easily...</h5>     
                </div>
            </div>                
        </div>
    );
}