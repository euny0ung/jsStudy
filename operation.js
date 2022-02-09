//1. String concatenation
console.log('my'+'cat');
console.log('1'+2); // 숫자가 문자열로 바뀜
console.log('string literals: 1+2=${1+2}');

const mark1={name: 'mark'}; // 1과 2는 서로 다른 레퍼런스를 가짐.
const mark2={name: 'mark'};
const mark3=mark1;
console.log(mark1==mark2); // 레퍼런스가 다르므로 f
console.log(mark1===mark2); // 똑같은 타입이든 아니든 레퍼런스 값이 다르므로 f
console.log(mark1===mark3); // mark1이 가진 레퍼런스 값을 mark3으로 할당했기 때문에 1과 3은 같은 레퍼런스를 가짐.


console.log(0==false); //0, null, undefined, empty string은 false로 간주되므로 T
console.log(0===false); // 0은 boolean 타입이 아니므로 F
console.log(''==false); // empty string은 false로 간주되므로 T
console.log(''===false); // empty string은 boolean 타입이 아니므로 F
console.log(null==undefined); // null은 false로 간주되므로 T
console.log(null===undefined); // null은 boolean 타입이 아니므로 F

// 2. ternary operator: ?
// condition ? value1: value2;
const name=markLee;
console.log(name==='mark'? 'yes':'no'); //조건이 맞다면 왼쪽 실행, 아니라면 오른쪽 실행

// 3. for문 과제
for(let i=0; i<11; i++){
    if(i%2==0){
        console.log('q1. ${i}');
    }
    else continue;
}
for(let i=0; i<11; i++){
    if(i>8) break;
    console.log('q2.${i}');
}