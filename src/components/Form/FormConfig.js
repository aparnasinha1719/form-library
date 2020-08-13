const commonFields={
    value:'',
    helperText:'',
    valid:false,
    touched:false,

}
export const formConfigData={
    name:{
    ...commonFields,
        type:'text',
        name:'name',
        placeholder:'Name',
        validation: {
            required: true,
            isCharOnly : true
        },
        
    },
    gender:{
        name:'gender',
        placeholder:'Gender',
        value:'male',
        isSelect:true,
        options:['male','female']
    },
    phone:{
        ...commonFields,
        name:'phone',
        type:'tel',
        placeholder:'Phone',
        validation: {
            required: true,
            isPhone : true
        },
    },
    country:{
        ...commonFields,
        name:'country',
        type:'text',
        placeholder:'Country',
        validation: {
            required: true,
            isCharOnly : true
        },
  
    },
    email:{
        ...commonFields,
        name:'email',
        type:'email',
        placeholder:'Email Address',
        validation: {
            required: true,
            isEmail : true
        },
    },
    password:{
        ...commonFields,
        name:'password',
        type:'password',
        placeholder:'Password',
        validation: {
            required: true,
            isPassword : true
        },
    }
}