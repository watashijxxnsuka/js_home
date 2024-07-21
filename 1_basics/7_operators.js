// 산술 연산자

let num = 1;

num++;
console.log(num);

let sample = '99';

console.log(5 == '5');
console.log(0 == '');

// 실제 실무에서는 비교할 때 무조건 ===.
console.log(5 === '5');
console.log(5 !== '5');

// 삼항 조건 연산자
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다')

// 논리 연산자
// && 조건은 모두 true 여야 true 를 반환한다.
console.log(true && true);
console.log(true && false);
// || 는 하나만 true 여도 true 를 반환한다.
console.log(true || false);
console.log(false || false);

// null 연산자
let name;

name = name ?? '한서준';
console.log(name);