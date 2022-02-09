// function: 기본적인 빌딩 블록. 서브 프로그램이라고도 불리며 재사용이 가능. 한가지 task나 값을 계산하기 위해 쓰임
// 하나의 함수는 한가지 일만 하게 만들어야함

function print(message){
    console.log(message);
}

print(1234); //다행히 숫자가 문자로 바뀌어 출력되지만 타입이 중요한 경우 JS를 쓰면 난감함 -> 타입스크립트 사용.


/*function tp_print(message:string):number{ //타입스크립트는 이렇게 타입을 명시해줌. number은 리턴 부분을 말함.

    return 0;
}*/

function ChangeName(obj){
    obj.name='husband';
}


//2. 파라미터
const markLee={name: 'markLee'};
ChangeName(markLee);
console.log(markLee);

//node js와 웹 API 모두 콘솔에 관련된 API가 있기 때문에 콘솔창에 출력 가능한 것.
//API의 인터페이스가 둘 다 동일.

//3. default 파라미터
function showMessage(message, from='unknown'){ //사용자가 from에 파라미터를 전달하지 않았으므로 unknown이 대체되어 출력된다.
    console.log('${message} by {from}');
}
showMessage('Hi!'); 

//4.rest parameters
function printAll(...args){ //...args는 배열이라는 뜻. 배열 형태로 파라미터 전달됨.
    for(let i=0; i<args.length(); i++){
        console.log(args[i]);
    }

    for(const arg of args){ //위와 같다
        console.log(arg);
    }

    args.forEach((args)=>console.log(arg)); //위와 같다
}
printAll('mark','TY','JH');


//5. early return, early exit
function upgradeUser(user){
    if(user.point>10){
        //bllaaaa
    }
} //가독성에 좋지 않음

function upgradeUser(user){
    if(user.point<10){
        return;
    } 
    //bllaaa 
} //이게 더 좋음


//6. anonymous function
const print=function(){
    console.log('print');

};
print();
const printAgain=print;
printAgain();
//참고로 자바스크립트에서는 함수가 호출되기 전에 선언하는게 가능하다. 자바스크립트 엔진이 선언한 것을 제일 위로 올려주기 때문.


//7. 콜백 함수
function randomQuiz(answer, printYes, printNo){
    if(answer==='Love You'){
        printYes();
    }
    else{
        printNo();
    }
}

const printYes=function(){ //anonymous function
    console.log('yes!');
}
const printNo=function print(){
    console.log('No!');
}


randomQuiz('wrong', printYes,printNo);
randomQuiz('Love You', printYes,printNo);


//8.Arrow fuction
 const SimplePrint=function(){
    console.log('SimplePrint');
 }
 const SimplePrint=()=>console.log('simplePrint');

 const Add=function(a,b){
     return a+ b;
 }
const Add=(a,b)=>a+b;
 


//8.IIFE: Immediately Invoked Funtion Expression
(function hello(){
    console.log('IIFE');
})();
//함수를 호출하듯이 묶어주면 바로 호출할 수 있다


/*caculate function (command, a,b). 이때 command는 add, substract,drive, multiply remainder*/ 