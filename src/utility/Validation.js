const checkValidity = (value, rules) => {

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
        validityResult.errorText = !validityResult.isValid ? 'Name should contain only letters' : '';
    }

    if (value !== '' && rules.isValidColor) {
        validityResult.isValid = value.match("^([a-zA-Z]*[\\s]?[&,-]?[\\s]?)+([A-Za-z]+[\\s]*)$") !== null;
        validityResult.errorText = !validityResult.isValid ? "Only characters(with '-' ',' '&') & characters after '-' ',' '&' are allowed" : '';
    }

    if (value !== '' && rules.isEmail) {
        validityResult.isValid = value.match(`^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$`) !== null;
        validityResult.errorText = !validityResult.isValid ? 'Not a valid email id' : '';
    }

    return validityResult;
};

export default checkValidity;