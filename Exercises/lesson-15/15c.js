
const dayjs = require('dayjs')

const today = dayjs();
const newDate = today.subtract(1,'month');

const newDateFormat = newDate.format("MMMM dddd");

console.log(newDateFormat);