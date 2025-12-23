// import { dayjs } from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js
const dayjs = require('dayjs')
// console.log(dayjs);

const today = dayjs();
const newDate = today.add(5,'day');

const newDateFormat = newDate.format("MMMM dddd");

console.log(newDateFormat);