export function changeMoney(cent) {
  return (Math.round(cent) / 100).toFixed(2);
}

export default changeMoney;