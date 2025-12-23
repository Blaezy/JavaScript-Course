
const dayjs = require('dayjs')

const today = dayjs();
const newDate = today.add(1,'month');

const newDateFormat = newDate.format("MMMM dddd");

console.log(newDateFormat);