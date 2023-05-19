- 프로그램은 각각의 기능을 하는 함수로 이루어짐
- 절차적인 언어같은 경우는 함수가 매우 중요한 기능을 담당해서 
- sub-program으로 불리기도 함

## Function
- fundamental building block in the program
- subprogram can be used multiple times (여러번 재사용 가능)
- performs a task or calculates a value (한가지의 일을 한다)

### 1. Function declaration
- function name(param1, param2) { body ... return; }
- one function === one thing
- naming: doSomething, command, verb
- e.g. createCardAndPoint -> createCard, createPoint
- function is object in JS 
- 함수는 객체이기 때문에 나중에 변수에 할당할 수 있고 파라미터로 전달도 되고 함수를 리턴할 수 도 있음.
```javascript
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);
// JS에서는 타입이 없기 때문에 숫자를 문자열로 변화되어서 1234가 출력됨
// 지금은 상관이 없지만 타입이 중요한 다른 함수에서는 자바스크립트는 조금 난해하다.
// 그렇기에 typescript를 쓰면 조금 더 명확하고 개발일을 쉽게 만들어준다.
```
<br>

### 2. Parameters
- premitive parameters: passed by value
- object parameters: passed by reference
- object는 메모리에 value가 아닌 reference가 저장되기 때문에 reference가 전달됨
```javascript
function changeName(obj){
    obj.name ='coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);
```
<br>

### 3. Default parameters(added in ES6)
```javascript
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
// ...args --> 배열형태로 전달함
function printAll(...args){
    for (let i =0; i<args.length; i++){
        console.log(args[i]);
    }
    // for of 문법
    // args에 있는 값들이 차례대로 넘어오면서 출력함
    for (const arg of args){
        console.log(arg);
    }
    // 이것도 가능
    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie');
```
<br>

### 5. Local scope
- 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
```javascript
let globalMessage = 'global';   // global variable
function printMessage(){
    let message = 'hello';
    console.log(message);    //지역변수 : 안에서만 접근 가능
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
        // 자식은 부모에서 정의된 변수를 사용할 수 있지만
        // 자식에서 정의된 변수는 부모가 사용할 수 없음
    }
}
printMessage();
```
<br>

### 6. Return a value
```javascript
function sum(a,b){
    return a+b;
}
const result = sum(1,2);  //3
console.log(`sum: ${sum(1,2)}`);
```
<br>

### 7. Early return, early exit
```javascript
// bad
function upgradeUser(user){
    if (user.point > 10){
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
    //long upgrade logic...
}
```
<br>

### 8. First-class function
- functions are treated like any other variable
- can be assigned as a value to variable
- can be passed as an argument to other functions.
- can be returned by another function
<br>
------------------
<br>

### 1. Function expression
- a function declaration can be called earlier than it is defined. (hoisted)
- a function expression is created when the execution reaches it.
```javascript
const print = function(){   //anoymous function(함수에 이름이 없음)
// const print = function print(){   named function 이건 있는거
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));
```
<br>

### 2. callback function using function expression
```javascript
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong',printTes,printNo);
randomQuiz('love you',printYes, printNo); 

// Arrow function
// always anonymous
const simplePrint = function(){
    console.log('simplePrint! ');
};

const simplePrint = () => console.log('simplePrint! ');
const add = (a, b) => {
    //do something more 블럭을 사용하면 return은 꼭 사용해야 함
    return a + b;
};

// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 호출
(function hello(){
    console.log('IIEF');
})();
```

```javascript
// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b){
    switch(command){
        case 'add':
            return a+b;
        case 'substract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
        default:
            throw Error('unknown command');
```
    }
}
