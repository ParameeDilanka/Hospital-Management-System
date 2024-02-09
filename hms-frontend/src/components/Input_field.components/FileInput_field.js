import React, { useRef } from "react";
import { ErrorMessage } from "formik";
import "./uiComponentsStyles.css";
import PreviewImage from "./UploadingImagePreview";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';


export const FileField = ({ label, fileVar, name, values }) => {

    const fileRef = useRef(null);

    

    return (
        <div className="form-group mb-3">
            <strong><label htmlFor={name} className="form-label">{label}</label></strong>
            <input type="file" 
                 ref={fileRef}
                 hidden
                 onChange={(event) => {fileVar("image", event.target.files[0]);}}

            /> 
            <br/>
            
            <tr>
                <td>
                    <Tippy content="Click the button to choose a item image">
                    <button className="btn btn-outline-primary mb-1" onClick={() => {
                        fileRef.current.click();
                     }}>Choose Image</button></Tippy> &emsp;&emsp;&emsp;
                </td>
                <td>
                    {values.image && <PreviewImage file={values.image}/>} 
                </td>
            </tr>
            
            <div >
                <small className="text-danger">
                    <ErrorMessage  name={name} />
                </small>
            </div>
    
           
            
        </div>
    )
}