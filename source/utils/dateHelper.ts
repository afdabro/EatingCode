const SINGLE_DIGIT = 9;

export function getFormattedDateTime(date = new Date()) {
    return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${padLeadingZero(date.getMinutes())}:${padLeadingZero(date.getSeconds())}`;
}

export function padLeadingZero(value) {
    return value > SINGLE_DIGIT ? value : `0${value}`;
}
