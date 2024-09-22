
function CheckWordInMessage(message) {
    return message.length >= 200 ? false : true
}


function CheckEmail(email = 'foysalhossain324@gmail.com') {
    const regexPatten = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    
}


export { CheckWordInMessage };

                                                  