const commonFields={
    value:'',
    helperText:'',
    valid:false,
    touched:false,
    required:true

}
export const formData={
    ...commonFields,
    name:{
        type:'text',
        placeholder:'Name',
        validationBy:'text',
        
    },
    gender:{
        ...commonFields,
        placeholder:'Name',
        value:'',
        isSelect:true,
        options:['male','female']
    },
    phone:{
        ...commonFields,
        type:'tel',
        placeholder:'Phone',
        validationBy:'phone',
    },
    country:{
        ...commonFields,
        type:'text',
        placeholder:'Country',
        validationBy:'text',
  
    },
    email:{
        ...commonFields,
        type:'email',
        placeholder:'Email Address',
        validationBy:'email',
    },
    password:{
        ...commonFields,
        type:'password',
        placeholder:'Password',
        validationBy:'password'
    }
}