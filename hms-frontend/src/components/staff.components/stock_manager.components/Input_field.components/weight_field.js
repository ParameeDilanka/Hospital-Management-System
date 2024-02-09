import React from "react";
import { SelectField } from "../../../Input_field.components/Select_field";
import { TextField } from "../../../Input_field.components/Text_field";

export const WeightField = () => {

    return (
        <div>

            <div className="input-group">
                    <TextField label="Dose" name="generweicName" type="text" placeholder="Enter Generic Name"/>
                    <div className="input-group-prepend">
                        <SelectField label="Category" name="category">
                            <option value="" label="--Select Category--" disabled selected hidden/>
                            <option value="One" label="One"/>
                            <option value="Two" label="Two"/>
                            <option value="Three" label="Three"/>
                            <option value="Five" label="Five"/>
                        </SelectField> 
                    </div>
            </div>  

              
        </div>
    )
}