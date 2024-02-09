import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from "axios";
import { TextField } from '../../Input_field.components/Text_field';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CategoryField } from './Input_field.components/Category_field';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import capsulepillsimg from '../../../images/capsulepillsimg1.png';





toast.configure()


const itemValidate = Yup.object().shape({

  genericName:Yup.string()
    .required("Generic Name is required"),
  brandName:Yup.string()
    .required("Brand Name is required"),
  category:Yup.string()
    .required("Category is required"),
  dosage:Yup.string()
    .required("Dosage is required")
    .min(1, "Dosage should not be zero")
    .matches(/^[0-9]+([m]+[g]|[k]+[g]|[m]+[l]|l|g)$/, "Invalid dosage format (500mg, 15g, 50ml)")
});





export default function ModifyItem(){


    let {itemId} = useParams();

    const [item, setItem] = useState([]);

   
  
    useEffect(() => {
        function getItemStock() {
            axios.get("http://localhost:8070/pharmacyItem/get/"+itemId).then((res) => {
                setItem(res.data);
            }).catch((error) => {
                alert(error.message);
         });
        }
        getItemStock();
    }, [itemId]);

    
    function updateData(values){

      axios.put("http://localhost:8070/pharmacyItem/update/"+itemId, values).then(()=>{
        toast.success('Pharmaceutical item updated successfully!!!', { 
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000 
        });
      }).catch((err)=>{
        alert(err)
      });
    
    };


      
      
    return(
      <div className="grid-container grid-container-5">
        <div className="grid-item item-9">
          <div className="scroll-item scroll-item-9">
            <tr><th><h4 className="blue-hedding">Item Code : {item.item_code}</h4></th></tr>
            <br/>
            <tr><td><img className="itemImageInAddStock" src={item.imageURL} alt="Item"/></td><td><button className="btn btn-secondary mx-5 my-2" type="">Change Image</button></td></tr>
          </div> 
        </div>
        <div className="grid-item item-10">
          <h2 className="blue-hedding" >Modify Item</h2>
          <div className="scroll-item scroll-item-10">
            <Formik
              initialValues={{
                genericName: item.generic_name,
                brandName: item.brand_name,
                category: item.category,
                dosage: item.dosage,
              } || {
                genericName: "",
                brandName: "",
                category: "",
                dosage: "",
              }}
                enableReinitialize={true}
                validationSchema={itemValidate}
                onSubmit={(values)=>{
                      
                updateData(values);
            }}>

              {({values}) => (  
                <Form>
                  <TextField label="Generic Name" name="genericName" type="text" placeholder="Enter Generic Name"/>
                  <TextField label="Brand Name" name="brandName" type="text" placeholder="Enter Brand Name"/>
                  <TextField label="Dosage/Weight" name="dosage" type="text" placeholder="Enter Dosage/Weight (500mg 60ml)"/>
                  <CategoryField/>
                        
                  <Tippy content="Click the button to save changes">
                    <button className="btn btn-primary mx-5 my-2" type="submit">Save Changes</button>
                  </Tippy>

                  <Tippy content="Click the button to go back">
                    <Link to={"/staff/stock-manager/list-item/"}>
                      <button className="btn btn-secondary mx-5 my-2" type="">Back</button>
                    </Link>  
                  </Tippy>

                </Form>
              )}        
            </Formik>
          </div>              
        </div>
        <div className="grid-item item-11">
          <div className="scroll-item-11">
            <img className="capsulepillsimgInAddStock" src={capsulepillsimg} alt="capsulepillsimg" /> 
              <h5 className="blue-hedding">Manage the pharmacy easily...</h5>     
          </div>
        </div>
        
      </div>
    );
}