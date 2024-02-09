import React, { useState } from "react";
import "../../../Input_field.components/uiComponentsStyles.css";
import { TextField } from "../../../Input_field.components/Text_field";

export const DatePicker = () => {

    const [selectDate, setSelectesDate] = useState(null);
    console.log(selectDate);

    

        var date, dd, mm, yyyy;
        date = new Date();
        dd = date.getDate()+1;
        mm = date.getMonth()+1;
        yyyy = date.getFullYear();
        let disableDates = yyyy+"-"+0+mm+"-"+dd;
  

    return (
        <div>
            <TextField label="Manufacture Date" name="manufactureDate" type="date" max={disableDates}/>
            <TextField label="Expiry Date" name="expiryDate" type="date" min={disableDates}/>
            
        </div>
    );
}