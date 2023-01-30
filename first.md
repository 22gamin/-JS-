# 자바스크립트  
- 자바스크립트 
-> 프로트엔드에 쓸 수 있는 유일한 프로그래밍 언어

- 브라우저는 HTML을 열고, HTML은 CSS와 자바스크립트를 가져온다. 

- ```console.log(54545454);```
콘솔에 이 값을 출력하고 있다는 뜻

- ```console.log("hi")  console.log('hi')``` 상관없음

## 변수를 만드는 두 가지 방법

- const -> 바뀌지 않는 값, 계속 유지

- ```const a = 5; ```-> 5대신 a를 쓸 수 있음

- 띄어쓰기대신 일반적으로 다음 단어의 첫 문자를 대문자로 쓴다
my name -> myName

- ```const veryLongVarialeName = 0;```

2. ```const a = 5; ```를 let으로 바꿔도 차이가 없다.
- let은 새로운것을 생성할 때 사용하는 것

### 그렇다면 let과 const의 차이점은?
- const는 constant(상수)라는 것이고, constant는 값이 바뀔 수 없다.

많은 사람들이 const를 기본적으로 사용

만약 변수를 없데이트하고 싶다면 let을 씀

그래서 기본적으로 const를 사용하고 필요할 때만 let을 쓸거임

- var은 어떠한 규칙도 가지고 있지 않음
생성되고 나서 업데이트 될 수도 있음
모두 var를 사용한다면 의미를 알 수 없음

- 따라서 var은 쓰지말것
```const a = 5;
const b = 2;
const myName = "nico";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello "+ myName);

myName = "nicolas";

console.log("your new name is "+myName); 
```

------------------------------------------

- 데이터 타입으로는 숫자 또는 string이 있음

- null은 '아무것도 없음' , 그 변수에 아무것도 없다라는 것을 의미
- false와 다름 false는 false라는 값을 가짐
- null은 아무것도 없는 상태로 채워진 거임

```const amIFat = true;
let something;
console.log(something); 
```
> undefined

- undefined라는 데이터 타입 
- something이라는 변수를 만들고 잇지만 값을 안준거임
 변수는 잇지만 정의되지 않은것.

- null은 절대 자연적으로 발생하지 않음!  -> null은 우리가 변수안에 어떤 것이 없다는 것을 확실히 하기 위해 쓰는 것
  "비어있어요"를 표현

- amIFat은  존재하고 값이 주어졌는데 그 값이 "비어있음"
- something이라는 변수가 존재하는데 값이 주어지지 않은 것.
