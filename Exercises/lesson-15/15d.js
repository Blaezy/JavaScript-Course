
const dayjs = require('dayjs')

const today = dayjs();

const someDay = dayjs().day(4);

const someDayFormat = someDay.format('dddd')

console.log(someDayFormat)