//class = 붕어빵을 만들 수 있는 틀. 데이터는 없고 틀만 있는 것. 정의만 한 것이라 메모리에 올라가지 않음
//클래스를 이용하여 새 인스턴스를 생성하면 오브젝트가 됨. 얘는 메모리에 올라감.
'use strict';

//1. class
class Person{
    constructor(name,age){ //생성자
        this.name=name;
        this.age=age;
    }
    
    speak(){
    console.log('${this.name}: hello!');
    }
}

const mark=new Person('MarkLee','24');
console.log(mark.age);
console.log(mark.name);
mark.speak();

const Jobs=new Person('Jobs', '-1');

console.log(Jobs.name);
