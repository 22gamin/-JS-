## 데이터를 정리하는 법
-> 데이터 구조

- 가장 기본적인 데이터 구조: array(배열)


``` const daysOfWeek = ["mon","tue","wed","thu", "fri", "sat"]; ```

??: daysOfWeek의 5번째 원소를 알려줘 (fri)


``` console.log(daysOfWeek[5]);``` 결과는 sat

-> 컴퓨터는 1부터 세지 않고 0부터 세기 때문

- 따라서 fri를 얻고 싶다면 

``` console.log(daysOfWeek[4]);``` 하면 됨.


- 배열에 원소 추가
```
const daysOfWeek = ["mon","tue","wed","thu", "fri", "sat"];

//get item from Array
console.log(daysOfWeek);

//Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);
```

- 배열의 목적은 하나의 변수 안에 데이터의 리스트를 가지는 것.

***
## object

```
const player = {
	name: "nico",
	points: 10,
	fat:true,
};
```
- console.log(player);
- console.log(player.name);
 
  xx.xx      /  xx.xx
 
  콘솔에 로그  /    플레이어의 이름

- console.log(player["name"]);  -> 3개 모두 같은 결과 : nico


```
const player = {
	name: "nico",
	points: 10,
	fat:true,
};
console.log(player);
player.fat = false;
console.log(player);
```
- 결과

{name: 'nico', points: 10, fat: true}

{name: 'nico', points: 10, fat: false}

---------------------------------------------------------------

- ??: const는 수정할 수 없는데?

  위에서 한 것은 object 안의 것을 수정한 것이고 object는 아직 동일하다. 

  만약 player.fat=false; 말고 player.fat=false; 라고한 경우는 에러발생!

  object안의 것을 추가하는 것 또한 상관 없음

- player를 배열이 아닌 object에 정리한 이유는 배열에 정리하면 각각의 값, "nico", 10, true가 무엇을 의미하는지 알 수 없다. 
  하지만 object에 정리하면 옆에 설명을 붙인채 정리 가능.

