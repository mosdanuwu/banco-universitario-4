export function hasEmptyField(form, fieldsExcluded = []) {
    let binaryAnd = 1;
    for (let key in form) {
        if (fieldsExcluded.includes(key))
            continue;
        binaryAnd &= isDirtyField(form[key])
        if (!binaryAnd)
            break;
    }
    return !binaryAnd;
}

export function hasArrayEmptyField(array) {
    let binaryAnd = 1;
    for (let item of array) {
        binaryAnd &= !hasEmptyField(item)
        if (!binaryAnd)
            break;
    }
    return !binaryAnd;
}

export function isValidEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// isNotEmptyField
export function isDirtyField(field) {
    return !!String(field).length && field != null && field != undefined;
}

/*const messagesDefault = {
    required: "Campo requerido",
    email: "Debe ser un correo válido",
    minLength: (value) => `Mínimo ${value} caracteres`,
    maxLength: (value) => `Máximo ${value} caracteres`,
    sameAs: "Campo no coincide",
    minValue: (value) => `Valor mínimo ${value}`,
    maxValue: (value) => `Valor máximo ${value}`
};*/

export function hasFieldError(field, validators = [], form = {}) {
    let isValid = true;
    let message = "";

    for (let validator of validators) {
        let value = null;
        let key = validator;
        if (typeof validator === "object") {
            key = Object.keys(validator)[0];
            value = validator[key];
        }
        switch (key) {
            case "required":
                isValid = isDirtyField(field);
                message = "Campo requerido";
                break;
            case "email":
                isValid = isValidEmail(field);
                message = "Debe ser un correo válido";
                break;
            case "minLength":
                isValid = field.length >= value;
                message = `Mínimo ${value} caracteres`;
                break;
            case "maxLength":
                isValid = field.length <= value;
                message = `Máximo ${value} caracteres`;
                break;
            case "sameAs":
                isValid = field === form[value];
                message = "Campo no coincide";
                break;
            case "minValue":
                isValid = Number(field) >= value;
                message = `Valor mínimo ${value}`;
                break;
            case "maxValue":
                isValid = Number(field) <= value;
                message = `Valor máximo ${value}`;
                break;
            case "accountNumber":
                isValid = isValidAccountNumber(field);
                message = `Debe ser de 20 digitos positivos `;
                break;
        
        }
        if (!isValid) return message;
    }
    return null;
}


export function isValidAccountNumber(accountNumber) {
    const regex = /^[0-9]{20}$/; 
    return regex.test(accountNumber); 
  }
  
  
export function hasFieldsErrors(fields, validators) {
    let result = {};
    for (const fieldName in fields) {
        result[fieldName] = hasFieldError(fields[fieldName], validators[fieldName], fields);
    }
    return result;
}

export function isObjNotEmpty(obj = {}) {
    return Object.values(obj).some(isDirtyField);
}

export function hasArrayOfFieldsErrors(arrayfields, validators) {
    let result = [];
    for (const fields of arrayfields) {
        result.push(hasFieldsErrors(fields, validators));
    }
    return result;
}

export function isArrayOfObjNotEmpty(arrayObj) {
    return arrayObj.some(isObjNotEmpty);
}
