import React from 'react';
import axios from "axios";
import { TextField } from '../../Input_field.components/Text_field';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CategoryField } from './Input_field.components/Category_field';
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../configs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FileField } from '../../Input_field.components/FileInput_field';
import docImg from '../../../images/docimg1.png';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';


const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg"];
const FILE_SIZE = 1024 * 1024;

toast.configure()


const validate = Yup.object().shape({

  genericName:Yup.string()
    .required("Generic Name is required"),
  brandName:Yup.string()
    .required("Brand Name is required"),
  category:Yup.string()
    .required("Category is required"),
  dosage:Yup.string()
    .required("Dosage is required")
    .min(1, "Dosage should not be zero")
    .matches(/^[0-9]+([m]+[g]|[k]+[g]|[m]+[l]|l|g)$/, "Invalid dosage format (500mg, 15g, 50ml)"),
  image:Yup.mixed()
        .nullable()
        .required("Image is required")
        .test(
            "fileSize",
            "Uploaded file is too big (Max file size is 1Mb)",
            (value) => !value || (value && value.size <= FILE_SIZE) //1Mb
        )
        .test(
            "fileFormat",
            "Upload file has unsupported format (jpg and jpeg files only)",
            (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
        ),
});



function sendData(values){

  const imageRef = ref(storage, `stock_item_images/${values.image.name + v4()}`);

  uploadBytes(imageRef, values.image).then((snapshot) => {

    getDownloadURL(snapshot.ref).then((url) => {

      values.imageURL = url;
      console.log(url);
      
      console.log('Form data:',values);

      axios.post("http://localhost:8070/pharmacyItem/add",values).then(()=>{
          toast.success('Pharmaceutical item registered successfully!!!', { 
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000 
          });
        }).catch((err)=>{
          alert(err)
        });

     });
                    
  });

 

};


export default function AddNewItem(){


    return(
      <div className="grid-container grid-container-1">
        <div className="grid-item item-1">
        <h2 className="blue-hedding" >Register Items</h2>
              <div className="scroll-item scroll-item-1">
                
                
                <Formik
                  initialValues={{
                    genericName: "",
                    brandName: "",
                    category: "",
                    dosage: "",
                    image: null,
                  }}

                  validationSchema={validate}
                  onSubmit={(values,{resetForm})=>{
                      console.log('Form data',values);
                      
                      sendData(values);

                      resetForm();
                  }}>

                      {({values, setFieldValue}) => (
                        <Form>
                          <TextField label="Generic Name" name="genericName" type="text" placeholder="Enter Generic Name"/>
                          <TextField label="Brand Name" name="brandName" type="text" placeholder="Enter Brand Name"/>
                          <TextField label="Dosage/Weight" name="dosage" type="text" placeholder="Enter Dosage/Weight (500mg 60ml)"/>
                          <CategoryField/>
                          
                          <FileField label="Item Image" name="image" fileVar={setFieldValue} values={values}/> 
                          
                          
                          <Tippy content="Click the button to submit item details">
                          <button className="btn btn-primary mx-5 my-2" type="submit">Register Item</button>
                          </Tippy>
                          <Tippy content="Click the button to clear the inputs">
                          <button className="btn btn-secondary mx-5 my-2" type="reset">Clear</button>
                          </Tippy>
                        </Form>
                      )}
                </Formik>
                

              </div>              
        </div>
        <div className="item-2">
          <div className="scroll-item-2">
            <img className="docImgInAddItem" src={docImg} alt="doc"/>
          
            <h5 className="blue-hedding">Register your pharmaceutical items easily...</h5>
         
          </div>
          
          
        </div>
      </div>
    );
}