//flexible==dangerous
'use strict'
console.log('hello world');

//2. variable- global scope, block scope
//변수 선언은 let만 쓸 수 있음. var은 변수 선언 전에도 값을 할당할 수 있으므로 더이상 쓰지 않는다. block scope이 없음, hoisting 이유도 있음.
//var hoisting이란? 선언 위치에 상관없이 선언을 맨 위로 올려주는 것.

//3. contant
// const 변수를 써야하는 이유 1. 안전성 2. 쓰레드가 동시에 변수에 접근하여 값을 변경하는 위험을 막기 위해 3. 사람의 실수를 줄이기 위해
// primitive, single item: number, string, boolean, null, undefined, symbol : 값 자체가 메모리에 저장됨
// object, box container : 크기가 너무 커서 한번에 메모리에 못올림. 레퍼런스를 통해 실제로 오브젝트가 담겨있는 메모리를 가리킴. 즉, 오브젝트를 가리키는 레퍼런스가 메모리에 저장되는 것.
// function, first-class function : function도 데이터 타입중 하나. 변수할당, 함수의 파라미터, 리턴에도 쓰일 수 있다.
// 양수를 0으로 나누면 infinity가 나오고 음수를 0으로 나누면 -infinity가 나오고 숫자가 아닌 것을 숫자로 나누면 NaN이 나온다. (not a number)
// 최근에 bigInt라는 데이터 타입 생김. const bigInt=3202932n; 이런식으로 숫자 끝에 n을 붙여야함. 
// null 할당, undefined는 아무것도 할당되지 않은 경우.
// symbol은 우선순위를 주고 싶을때, 정말 고유한 식별자가 필요할 때 사용. 보통 동일한 string이면 같은거라고 보는데
// const symbol1=Symbol('id')와 const symbol2=Symbol('id') 는 다른 것이다
// 그러나 const symbol1=Symbol.for('id')와 const symbol2=Symbol.for('id')는 같은 것이다. id string을 위한 심볼을 만든것.
// symbol은 그냥 출력하면 오류가 뜨고 반드시 symbol.description을 이용해서 string으로 변환하여 출력해야함.
// object-  const mark={name: markLee, age: 24} 이때 다른 오브젝트로 할당할 수 없지만 내부 변수는 변경가능. mark.name=markLee

//4. js는 dynamically typed language라고 불린다. 변수를 선언할 때 타입을 선언하지 않고 런타임때 결정되는 언어. 이거 때문에 변수타입이 숫자인지 string인지 몰라서 런타임 에러 발생. -> 타입스크립트라는 언어 나옴