export function isWeekend (date){
    if(date.day() === 0 ){
        console.log("this is sunday");
    }
    else if (date.day() === 6 )
        console.log("this is saturday");
    else 
        console.log("This is not weekend day")
}

export default isWeekend;