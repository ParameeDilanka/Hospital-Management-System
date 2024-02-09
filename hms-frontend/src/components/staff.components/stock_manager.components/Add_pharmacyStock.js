import React, {useState, useEffect} from 'react';
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


export default function AddNewStock(){

    let {id} = useParams();
    let history = useHistory();

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




    const [item, setItem] = useState([]);
  
    useEffect(() => {
        function getItem() {
            axios.get("http://localhost:8070/pharmacyItem/get/"+id).then((res) => {
                console.log(res.data);
                setItem(res.data);
            }).catch((error) => {
                alert(error.message);
            });

        }
        getItem();
     }, [id]);



    return(
        <div className="grid-container grid-container-4">
            <div className="grid-item item-6">
                <div className="scroll-item scroll-item-6">
                    <tr><th><h3 className="blue-hedding">Item Code : {item.item_code}</h3></th></tr>
                    <br/>
                    <tr><td><img className="itemImageInAddStock" src={item.imageURL} alt="Item"/></td></tr>
                </div>    

            </div>
            <div className="grid-item item-7">
                <h2 className="blue-hedding" >Add New Stock</h2>
        
                <div className="scroll-item scroll-item-7">
                
                
                    <Formik
                        initialValues={{
                            itemCode: id,
                            manufactureDate: "",
                            expiryDate: "",
                            unitPrice: "",
                            addedQuantity: "",
                        
                        }}

                        validationSchema={validate}
                        onSubmit={(values,{resetForm})=>{
                            console.log('Form data',values);
                            
                            axios.post("http://localhost:8070/pharmacyStock/add",values).then(()=>{

                                toast.success('New stock added successfully!!!', { 
                                    position: toast.POSITION.TOP_CENTER,
                                    autoClose: 8000 
                                 });
                                history.push("/staff/stock-manager/list-item/list-stock/"+id);
                                
                            }).catch((err)=>{
                                alert(err)
                            });

                            resetForm();
                        }}
                    >

                        {formik => (
                            <Form>
                                <DatePicker/>
                                <SymbolTextField  label="Unit Price" symbol="Rs." name="unitPrice" type="text" placeholder="Enter Unit Price"/>
                                <TextField label="Added Quantity" name="addedQuantity" type="text" placeholder="Enter Added Quantity"/>
                                
                                
                                <button className="btn btn-primary add-btn" type="submit">Add Stock</button>
                                <button className="btn btn-secondary clear-btn" type="reset">Clear</button>
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