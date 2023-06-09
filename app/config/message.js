import colors from "colors";

const message = (message, type) => {
    switch (type) {
        case "danger":
            console.log(message.bgRed);
            break;
        case "warning":
            console.log(message.bgYellow);
            break;
        case "sucess":
            console.log(message.bgGreen);
            break;
        default:
            console.log(message.bgWhite);
            break;
    }
}

export default message;