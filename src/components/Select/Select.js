import React from 'react'

const Select=(props)=> {
    return (
        <div className={"form-group"}>
        <label for="exampleFormControlSelect1">Example select</label>
        <select className={"form-control"} id="exampleFormControlSelect1">
          {props.items.map((value,index)=>(
            <option>{value}</option>
          ))}
        </select>
      </div>
    )
}

export default Select;
