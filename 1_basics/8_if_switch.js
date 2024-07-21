let number = 5;

if (number % 2 === 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}


const eDay = 'tuesday'

let kDay;

switch (eDay) {
  case 'monday' : kDay = '월요일';
    break;
  case 'tuesday' : kDay = '화요일'; 
    break;
  default: kDay = '주말'
    break;
}

console.log(kDay);
