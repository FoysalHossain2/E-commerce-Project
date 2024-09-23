import { Bounce, toast } from 'react-toastify';


function CheckWordInMessage(message) {
    return message.length >= 200 ? false : true
}

function checkEmail(email = 'foysal3ri@gmail.com'){
    const regexPatten = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

    let isEmailValidate = regexPatten.test(email.toLocaleLowerCase());
    return isEmailValidate
}


function SuccessMessage(
    SuccessMessage = 'Email is Successfully done',
    position= 'top-right',
    delay = 4000,
) {
    toast.success(SuccessMessage, {
        position: position,
        autoClose: delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}

function ErrorMessage(
    errorMessage = 'Something is Wrong',
    position= 'top-left',
    delay = 4000,
) {
    toast.error(errorMessage, {
        position: position,
        autoClose: delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}


export { checkEmail, CheckWordInMessage, ErrorMessage, SuccessMessage };

