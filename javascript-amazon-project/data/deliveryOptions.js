import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { isWeekend } from '../scripts/utils/isweekend.js';

export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0
},{
    id: '2',
    deliveryDays: 3,
    priceCents: 499
},{
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;

  deliveryOptions.forEach((option)=>{
    if(option.id === deliveryOptionId){
      deliveryOption = option;
    }
  })
  return deliveryOption;
}

export function calculateDeliveryDate(deliveryOption){
  const today = dayjs();
 
  let remainingDays = deliveryOption.deliveryDays;
  let day = 1;
  while(remainingDays != 0){
    const nextDay = today.add(day,'day');
    if(isWeekend(nextDay)){
      day++;
    }else {
      day++;
      remainingDays--;
    }
  }

  const newDate = today.add(day-1,'day');
  const dateString = newDate.format("dddd, MMMM D");

  return dateString;
}