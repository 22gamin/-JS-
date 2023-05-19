``` 'use strict'; ```
- 바닐라로 코딩할 때 써주는 것이 좋음
- 선언이 되지 않은 변수에 값이 할당되거나 기존의 프롭트타입을 변경한다든지
- ECMAScript5에 포함되어 있기 때문에 위의 같은 일이 일어나지 않음
<br>


### 1. variable 변경될 수 있는 값, rw(read/write)
##### let (added in ES6)
```javascript
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
}
// blockscope -> 밖에서 값이 보이지 않음

// var (dont ever use this!)
name = 4;
let name;   //에러: 값을 선언하기도 전에 값을 넣음

age = 4;    //하지만 var는 에러가 나지 않음
console     //var hoisting이라고 함(어디에 선언하든 선언을 항상 젤 위로 끌어올려줌)
var age;    //block scope가 먹히지 않음
```
<br>

### 2.constant, r(read only)
##### 한 번 할당하면 값이 절대 바뀌지 않음
##### use const whenever possible
##### only use let if variable needs to change.
```javascript
//favor immutable data type always for a few reasons:
// - seurity
// - thread safety
// - reduece human mistakes

const dayInWeek = 7;
const maxNumber = 5;

//값이 계속 변경될 수 있는 Mutable data type -> let
//immutable data type -> const
```

### Note!
- Immutable data types: premitive types, frozen objects (i.e. object.freeze())
- Mutable data types: all objects by default are mutable in JS
- favor immuable data type always for a few reasons:
##### - security
##### - thread safety
##### - reduce human mistakes
<br>

### 3. Variable types
- primitive, single item(더이상 작은 단위로 나누어질 수 없는)
- :umber,string,boolean, null, underfied,symbol
- object(이러한 single item들을 여러개 묶어서 한 박스로 관라할 수 있게 해줌), box container
- function, first-class function 
```javascript
const count = 17;   //integer
const size = 17.1;  //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numeric values: Infinity, -Infinity, NaN(not a number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
// 연산할 때 그 값을 제대로 확인하지 않고 한다면 infinity나 NaN 같은 값이 나올 수 있으므로 
// 항상 확인하고 연산한다.

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;  //over (-2**53) ~ 2**53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;
//n을 붙이면 bigInt로 인식

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const heeloBob = `ji ${brendan}!`;  //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
//백틱을 사용하지 않으면
console.log('value: ' +'helloBob'+ 'type: '+'typeof helloBob');
//이렇게 번거로워짐
//백틱을 사용하면 안에 스페이스나 문자들이 그대로 출력됨, 간편함

//boolean
//false : 0, null, underfined, NaN, ''(비어져있는 string)
//true: any other value
const canRead = true;
const test = 3 < 1;   //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
//비어있는 값

//undefined
let x; //(=undefined)
console.log(`value: ${x}, type: ${typeof x}`);
//선언은 되었지만 아무 값도 지정되어 있지 않음

//symbol, create unique identifiers for objects
// 간혹 고유한 식별자가 필요할 때 사용
// 동시에 다발적으로 코드를 작성할 때 우선순위를 주고 싶을 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// 둘은 서로 다른 symbol임
console.log(symbol1 === symbol2);  // => false 나옴
// string이 똑같아 동일한 symbol을 만들고 싶다면
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);  //=> true
//symbol은 바로 출력하면
console.log(`value: ${symbol1}, type: ${typeof gsymbol1}`); //에러뜸
console.log(`value: ${symbol1.description}, type: ${typeof gsymbol1}`);
// description을 이용해 string으로 변환해서 출력해야함

//object, real-life object, data structure
const ellie = { name:'ellie', age:20};
ellie.age = 21;  
// 객체가 const로 정의되어 있지만 그 안에 있는 name이나 age는 변경할 수 있음
```
<br>

### 4. Dynamic typing: dynamically typed language 
##### 선언할 때 어떤 타입인지 선언하지 않고 런타임할 때 할당된 값에 따라 타입이 변경될 수 있음
```javascript
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); // string
text = '1';
console.log(`value: ${text}, type: ${typeof text}`); // number로 변경됨
text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`); // string 출력값 75
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`); // number 출력값 4
//런타임에서 타입이 정해지기 때문에 이것 때문에 에러가 발생하는경우도 많음
//-> 자바스트립트 위에 타입이 얹혀진 것이 타입스크립트
```
