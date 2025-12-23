
const dayjs = require('dayjs')

const today = dayjs();

const someDay = dayjs().add(5,'day');

// const someDayFormat = someDay.format('dddd')


// console.log(someDay)

function isWeekend (date){
    if(date.day() === 0 ){
        console.log("this is sunday");
    }
    else if (date.day() === 6 )
        console.log("this is saturday");
    else 
        console.log("This is not weekend day")
}

isWeekend(someDay);