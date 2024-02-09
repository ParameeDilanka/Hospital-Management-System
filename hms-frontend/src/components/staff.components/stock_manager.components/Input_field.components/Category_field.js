import React from "react";
import { SelectField } from "../../../Input_field.components/Select_field";

export const CategoryField = () => {

    return (
        <div>
            <SelectField label="Category" name="category">
                        <option value="" label="--Select Category--" disabled selected hidden/>
                        <option value="Capsule" label="Capsule"/>
                        <option value="Tablet" label="Tablet"/>
                        <option value="Syrup" label="Syrup"/>
                        <option value="Ointment" label="Ointment"/>
                        <option value="Cream" label="Cream"/> 
                        <option value="Spray" label="Spray"/>
                        <option value="Powder" label="Powder"/>
            </SelectField>   
        </div>
    )
}