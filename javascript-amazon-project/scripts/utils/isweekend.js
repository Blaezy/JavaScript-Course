

export function isWeekend (date){
    if(date.day() === 0 ){
       return true;
    }
    else if (date.day() === 6 )
        return true;
    else 
        return false;
}
