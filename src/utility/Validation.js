export const checkValidity = (value, rules) => {

    let validityResult = { isValid: true, errorText: '' };

    if (!rules) {
        return validityResult;
    }

    if (rules.required) {
        validityResult.isValid = value.trim() !== '' && validityResult.isValid;
        validityResult.errorText = !validityResult.isValid ? 'This field is required' : '';
    }

    if (rules.isCharOnly && value !== '') {
        validityResult.isValid = value.match('^([a-zA-Z]+\\s)*[A-Za-z\\s]+$') !== null;
        validityResult.errorText = !validityResult.isValid ? 'This field should contain only letters' : '';
    }

    if (value !== '' && rules.isPhone) {
        validityResult.isValid = value.match("^[6,7,8,9]{1}[0-9]{9}$") !== null;
        validityResult.errorText = !validityResult.isValid ? "Mobile number should be 10-digit number(starting with >5)" : '';
    }
    if(value !== '' && rules.isPassword) {
        validityResult.isValid = value.match(`^(?=.*\\d)(?=.*[@!#$%&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$`);
        validityResult.errorText = !validityResult.isValid ? "Password should have 8-characters atleast (with atleast 1 Uppercase,lowercase and special character[@!#$%&*]) " : '';
    }
    if (value !== '' && rules.isEmail) {
        validityResult.isValid = value.match(`^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,3})$`) !== null;
        validityResult.errorText = !validityResult.isValid ? 'Not a valid email id' : '';
    }

    return validityResult;
};
