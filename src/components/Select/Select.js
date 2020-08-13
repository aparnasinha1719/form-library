import React from 'react'
import { updateObject } from '../../utility/UpdateObject';

const Select=(props)=> {
  const changeOption=(event)=>{
    const updatedObject =updateObject(props.selectData,{
      value:event.target.value
    })
    props.onSelection({[props.selectData.name]:updatedObject});
  }
    return (
        <div className={"form-group text-left mb-4"}>
        <label className={"ml-3"}>{props.selectData.placeholder}:</label>
        <select className={"form-control"} id="exampleFormControlSelect1" onChange={changeOption}>
          {props.selectData.options.map((value,index)=>(
            <option key={index}>{value}</option>
          ))}
        </select>
      </div>
    )
}

export default Select;
