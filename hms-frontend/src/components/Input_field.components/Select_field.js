import React from "react";
import { ErrorMessage, useField } from "formik";
import "./uiComponentsStyles.css";

export const SelectField = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className="form-group mb-3">
            <strong><label htmlFor={field.name} className="form-label">{label}</label></strong>
            <select 
                aria-label="Default select example"
                className={`form-select 
                ${meta.touched && ((meta.error && "invalid  is-invalid") || (!meta.error && "valid  is-valid"))}`}
                {...field} {...props}>
                
            </select>
            <ErrorMessage component="div" name={field.name} className="invalid-feedback"/>
            {meta.touched && !meta.error && <p className="valid-feedback">Looks good!</p>}    
            
        </div>
    )
}

