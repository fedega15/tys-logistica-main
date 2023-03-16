export const validacionSignUp = (obj) => {
    console.log(obj)
    let errors = {
        'useremail': null,
        'password': null,
    }
    let correct = true;

    if (!obj.useremail) {
        console.log(' falta mail')
        correct = false
        errors.useremail = 'Ingrese un mail.'
    }

    if (!obj.password) {
        correct = false
        errors.password = 'Ingrese una contraseña.'
    }
    return {correct, errors}
}