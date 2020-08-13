import React from 'react'

const Input=(props)=> {
    return (
        <div className={"form-group"}>
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className={"form-control"} id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" className={"form-text text-muted"}>{props.inpuData.helperText}</small>
        </div>
        
    )
}

export default Input;
