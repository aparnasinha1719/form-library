import React from 'react';
import { checkValidity } from '../../utility/Validation';
import { updateObject } from '../../utility/UpdateObject';
const Input = (props) => {
	const changeHandler = (event) => {
		const validatedData = checkValidity(event.target.value, props.inputData.validation);
		console.log(props.inputData.valid);
		const updatedObject = updateObject(props.inputData, {
			value: event.target.value,
			helperText: validatedData.errorText,
			valid: validatedData.isValid,
			touched: true,
    });
   
    props.onChange({[props.inputData.name]:updatedObject});
	};
	return (
		<div className={'form-group mb-4'}>
			<input
				className={`form-control ${(props.inputData.touched && !props.inputData.valid)?'is-invalid':''}`}
				aria-describedby="emailHelp"
				autoComplete="on"
				placeholder={props.inputData.placeholder}
				type={props.inputData.type}
				defaultValue={props.inputData.value}
				required={true}
				onChange={changeHandler}
			/>
<div  className={"invalid-feedback"}>
{props.inputData.helperText}
      </div>
			
		</div>
	);
};

export default Input;
