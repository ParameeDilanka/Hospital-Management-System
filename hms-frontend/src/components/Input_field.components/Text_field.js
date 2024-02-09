import React from "react";
import { ErrorMessage, useField } from "formik";
import "./uiComponentsStyles.css";

export const TextField = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className="form-group mb-3">
            <strong><label htmlFor={field.name} className="form-label">{label}</label></strong>
            <input 
                className={`form-control
                    ${meta.touched && ((meta.error && "invalid  is-invalid") || (!meta.error && "valid  is-valid"))}`}
                {...field} {...props}
                autoComplete="off"/>
            <ErrorMessage component="div" name={field.name} className="invalid-feedback"/>
            {meta.touched && !meta.error && <p className="valid-feedback">Looks good!</p>}    
            
        </div>
    )
}