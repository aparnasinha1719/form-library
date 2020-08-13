import React, { useState } from 'react'
import Input from '../Input/Input';
import Select from '../Select/Select';
import {formConfigData} from './FormConfig';
import { updateObject } from '../../utility/UpdateObject';
import classes from './Form.module.css';
const Form=()=>{
    const[formData,setFormData]=useState(formConfigData);
    const[formValid,setFormValid]=useState(false);
    const inputChange=(updatedData)=>{
        const updatedForm=updateObject(formData,updatedData);
        isFormValid(updatedForm);
    }
    const isFormValid = (updatedFormData) => {
        let formIsValid ;
        for (let inputIdentifier in updatedFormData) {
            formIsValid = updatedFormData[inputIdentifier].valid ;
        }
        setFormData({ ...updatedFormData });
        setFormValid(formIsValid);
    }
    const selectionChange=(updatedSelection)=>{
        const updatedForm=updateObject(formData,updatedSelection);
        setFormData({ ...updatedForm});

    }
    const submitForm=()=>{
        let formObject={};
        for (let inputIdentifier in formData) {
            formObject[inputIdentifier] = formData[inputIdentifier].value ;
        }
    }
        return (
            <form onSubmit={submitForm}className={classes.formDiv}>
            {Object.keys(formData).map((key,index)=>(  
                formData[key].isSelect?
                <Select selectData={formData[key]} key={index} onSelection={selectionChange}></Select>:
                <Input inputData={formData[key]} key={index} onChange={inputChange}></Input>
            ))}
            <button type="submit" className={`btn btn-info ${classes.submitBtn}`} disabled={!formValid}>Submit</button>
            </form>
        )
    
}

export default Form;
