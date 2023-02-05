# function

- function은 어떤 코드를 캡슐화해서, 실행을 여러번 할 수 있게 해준다.

```
function sayHello(){
	console.log("Hello!");
}
sayHello();
```

> function에 데이터 보내기
```
function sayHello(nameOfPerson,age){
	console.log("Hello my name is "+nameOfPerson+ " and I'm "+ age);
}
sayHello("nico",10);
```

> function을 이용한 간단한 계산기 만들기

```
fuction plus(firstNumber,secondNumber) {
	console.log(firstNumber + secondNumber); }
function divide(a,b) {
	console.log(a/b);
}
plus(60,8);
divide(98,20);
```

- 참고로 function의 firstNumber은 function안에서만 존재하고 function 밖에서 쓴다면 에러가 발생한다.

> console.log();와 비슷한 형태 만들어보기

```
const player = {
	name: "nico",
	sayHello: function(otherPersonName) {
		console.log("hello!"+otherPersonName+"nice to meet you");
  },
};

console.log(player.name);
player.sayHello("lynn");  --> console.log(); 와 비슷한 형태를 우리가 만듦
```
