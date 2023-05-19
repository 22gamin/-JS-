### 1. String concatenation
```javascript
console.log('my'+' cat');
console.log('1'+ 2);
console.log(`string literals: 1+2= 
""
${1 +2}`);
//백틱은 중간에 들어간 문자도 그대로 출력함
console.log("ellie\'s book");
//중간에 들어간 ' 특수문자는 백슬러쉬 이용 \n \t 등도 있음
```
<br>

### 2. Numeric operators
```javascript
console.log(1 + 1); //add
console.log(1 -1); // substract
console.log(1 / 1); //divide
console.log(1 * 1); //mulitply
console.log(1 % 1); //remainder
console.log(1 ** 1); //exponentiation
```
<br>

### 3. Increment and decrement operators
```javascript
let counter = 2;
const preIncrement = ++counter;  //3
// counter = counter + 1;
// preIncrement = counter;   이 코드와 같음
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`) //3 3
const postIncrement = counter++;
//postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`) //3 4
//-- 도 같음
const postIncrement = --counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`) //3 3
const postIncrement = counter--;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`) //3 2
```
<br>

### 4. Assingnment operators
```javascript
let x = 3;
let y = 6;
x += y;  //x = x + y;
x -= y;
x *= y;
x /= y;
```
<br>

### 5. Comparison operators
```javascript
console.log(10 < 6);  //less then
console.log(10 <= 6);  //less then or equal
console.log(10 > 6);  //greater then
console.log(10 >= 6);  //greater then or equal
```
<br>

### 6. Logical operators: || (or), && (and), !(not)
```javascript
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value (처음 true가 나오면 멈춤)
console.log(`or: ${value1 || value2 || check() }`);

function check(){
    for (let i =0; i < 10; i++){
        //wasting time
        console.log('gg');
    }
    return true;
}

// &&(and), finds the first falsy value (처음 false가 나오면 멈춤)
// nullableObject && nullableObject.something
if (nullableObject != null) {
    nullableObject.something;
}
console.log(`or: ${value1 && value2 && check() }`);

function check(){
    for (let i =0; i < 10; i++){
        //wasting time
        console.log('gg');
    }
    return true;
}

//!(not)
console.log(!value1);
```
<br>

### 7. Equality
```javascript
const stringFive = '5';
const numberFive = 5;

//== loose equality, with type conversion (타입을 변경해서 비교)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion (타입이 다르면 다름)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  //f 다른 레퍼런스를 가지고 있기 때문
console.log(ellie1 === ellie2); //f
console.log(ellie1 === ellie3); //t
```
<img src=""C:\Users\LG\Desktop\img1.png"/>
<!-- "C:\Users\LG\Desktop\img1.png" -->
```javascript
//equality - puzzler
console.log(0 == false);    // t
console.log(0 === false);   // f  0은 boolean 타입이 아님
console.log('' == false);   // t 
console.log('' === false);  // f  ''은 boolean 타입이 아님
console.log(null == undefined);   // t 
console.log(null === undefined);  // f
```
<br>

### 8. Conditional operators: if
```javascript
// if, else if, else
const name ='ellie';
if (name ==='ellie') {
    console.log('Welcome, Ellie! ');
} else if (name === 'conder'){
    console.log('Yoy are amazing coder');
} else {
    console.log('unknown');
}
```
<br>

### 9. Ternary operator: ?
```javascript
// condition ? value1 : value2;
console.log(name === 'ellie'? 'yes':'no');
```
<br>

### 10. Switch statement
```javascript
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const brower = 'IE';
switch (brower){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}
```
<br>

### 11. Loops
```javascript
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i>0){
    console.log(`while: &{i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition. 블럭을 먼저 실행하고 싶다면 이렇게 사용한다.
do {
    console.log(`do while: ${i}`);
    i--;
} while(i>0);

// for loop, for(begin; condition; step)
for ( i = 3; i >0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i >0; i= i-2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i =0; i < 10; i++){
    for (let j =0; j< 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}
// 이러면 O(n^2)이 되므로 cpu에 좋지않으므로 지양하자.
```
<br>

```javascript
//break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (i=0; i <11; i++){
    if (i%2 !==0){
        continue;
    }
    else{
        console.log(${i});
    }
}
//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i <11; i++){
    if(i>8){
        break;
    }
  ```
    console.log(`q2.${i}`);
}
