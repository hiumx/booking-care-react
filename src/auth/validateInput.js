
export const checkEmailValid = email => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export const checkPhoneNumber = phone => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
}

export const checkIsEmpty = string => {
    return !string || string.length === 0;
}

export const checkDateValid = date => {
    const dateRex = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
    return date.match(dateRex);
}