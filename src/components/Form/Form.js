import React, { Component } from 'react'
import Input from '../Input/Input';
export class Form extends Component {

    render() {
        console.log('I am render');
        return (
            <form>
            <Input></Input>
            </form>
        )
    }
}

export default Form;
