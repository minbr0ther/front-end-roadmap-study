# Front-end Roadmap 2021

## 4. JavaScript

### 1. Syntax and Basic Constructs [#](https://www.w3schools.com/js/default.asp)

#### >> 01.18 Introduction ~ String Method

#### >> 01.19 String Method ~ Array Sort



#### Array.map ()

*  `map()`메서드는 각 배열 요소에 대해 함수를 수행하여 새 배열을 만듭니다.
*  `map()`메서드는 값이없는 배열 요소에 대해 함수를 실행하지 않습니다.
* `map()`메서드는 원래 배열을 변경하지 않습니다.

```javascript
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
 return value * 2;
}
```



#### Array.filter ()

* `filter()`메서드는 테스트를 통과 한 배열 요소로 새 배열을 만듭니다.

* 이 예제는 값이 18보다 큰 요소에서 새 배열을 만듭니다.

```javascript
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} // {45, 25}
```



#### Array.reduce ()

* `reduce()`메서드는 각 배열 요소에서 함수를 실행하여 단일 값을 생성 (축소)합니다.

* 이 `reduce()`방법은 배열에서 왼쪽에서 오른쪽으로 작동합니다. 

```js
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
} // {99}
```



#### Array.every ()

이 `every()`메서드는 모든 배열 값이 테스트를 통과하는지 확인합니다.

```js
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} // false
```



#### Array.some ()

이 `some()`메서드는 일부 배열 값이 테스트를 통과하는지 확인합니다.

```js
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} // true
```



#### Array.find ()

이 `find()`메서드는 테스트 함수를 통과하는 첫 번째 배열 요소의 값을 반환합니다.

```js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```



#### Array.findIndex ()

이 `findIndex()`메서드는 테스트 함수를 통과하는 첫 번째 배열 요소의 인덱스를 반환합니다.

```js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```



#### Comparing Different Types

| 2 < "12"       | true     |
| -------------- | -------- |
| **"2" > "12"** | **true** |

* 두 문자열을 비교할 때 "2"는 (알파벳순) 1이 2보다 작기 때문에 "12"보다 큽니다.
* 적절한 결과를 얻으려면 비교 전에 변수를 적절한 유형으로 변환해야합니다.



#### Strict Comparison

Switch cases use **strict** comparison (===).

```js
var x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
} // No value found
```



#### Automatic Type Conversion

```js
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
```



| Original Value   | Converted to Number | Converted to String | Converted to Boolean | Try it                                                       |
| :--------------- | :------------------ | :------------------ | :------------------- | :----------------------------------------------------------- |
| false            | 0                   | "false"             | false                | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_false) |
| true             | 1                   | "true"              | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_true) |
| 0                | 0                   | "0"                 | false                | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_number_0) |
| 1                | 1                   | "1"                 | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_number_1) |
| "0"              | 0                   | "0"                 | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_string_0) |
| "000"            | 0                   | "000"               | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_string_000) |
| "1"              | 1                   | "1"                 | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_string_1) |
| NaN              | NaN                 | "NaN"               | false                | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_nan) |
| Infinity         | Infinity            | "Infinity"          | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_infinity) |
| -Infinity        | -Infinity           | "-Infinity"         | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_infinity_minus) |
| ""               | 0                   | ""                  | false                | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_string_empty) |
| "20"             | 20                  | "20"                | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_string_number) |
| "twenty"         | NaN                 | "twenty"            | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_string_text) |
| [ ]              | 0                   | ""                  | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_array_empty) |
| [20]             | 20                  | "20"                | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_array_one_number) |
| [10,20]          | NaN                 | "10,20"             | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_array_two_numbers) |
| ["twenty"]       | NaN                 | "twenty"            | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_array_one_string) |
| ["ten","twenty"] | NaN                 | "ten,twenty"        | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_array_two_strings) |
| function(){}     | NaN                 | "function(){}"      | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_function) |
| { }              | NaN                 | "[object Object]"   | true                 | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_object) |
| null             | 0                   | "null"              | false                | [Try it »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_type_convert_null) |
| undefined        | NaN                 | "undefined"         | false                |                                                              |

#### >> 01.20 Array Sort ~ RegExp



#### fianlly는 try catch와 상관없이 실행한다

```js
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
```



#### >> 01.21 RegExp ~ Best Practices



------

### 2. Learn DOM Manipulation





------

### 3. Learn Fetch API / Ajax (XHR)





------

### 4. ES6+ and modular JavaScript

#### Arrow Function

```js
hello = function() {
  return "Hello World!";
}
```

Arrow functions allow us to write shorter function syntax:

```js
hello = () => {
  return "Hello World!";
}
```

you can remove the brackets *and* the `return` keyword:

```js
hello = () => "Hello World!";
```



#### Classes

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
```

**자바스크립트에서 클래스는 오브젝트가 아니다.** 자바스크립트 오브젝트를 위한 **템플릿** 이다

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
```





------

### 5. Hoisting [#](https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90)

* 호이스팅(Hoisting)이란, `var` 선언문이나 `function` 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다. 자바스크립트는 ES6에서 도입된 `let`, `const`를 포함하여 모든 선언(`var`, `let`, `const`, `function`, `function*`, `class`)을 호이스팅한다.

```js
console.log(foo); // undefined
var foo;

console.log(bar); // Error: Uncaught ReferenceError: bar is not defined
let bar;
```

* `var` 으로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다. 하지만,

```js
// 스코프의 선두에서 선언 단계와 초기화 단계가 실행된다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.

console.log(foo); // undefined

var foo;
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1
```

* `let` 로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.

```js
// 스코프의 선두에서 선언 단계가 실행된다.
// 아직 변수가 초기화(메모리 공간 확보와 undefined로 초기화)되지 않았다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 없다.

console.log(foo); // ReferenceError: foo is not defined

let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1
```



#### 초기화는 호이스팅 되지 않음

```js
var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y
```



### 6. Event Bubbling





------

### 7. Scope

#### `var` vs `const` vs `let` [#](https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90)

* `var` 은 유연한 변수 선언으로 여러번의 선언이 가능하다.
* `let` 은 변수에 재할당이 가능하다.

```js
let name = 'bathingape'
console.log(name) // bathingape

let name = 'javascript'
console.log(name) 
// Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'react'
console.log(name) //react
```



* `const`는 변수 재선언, 변수 재할당 모두 불가능하다.

```js
const name = 'bathingape'
console.log(name) // bathingape

const name = 'javascript'
console.log(name) 
// Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'react'
console.log(name) 
//Uncaught TypeError: Assignment to constant variable.
```

* 변수 선언에는 기본적으로 `const`를 사용하고, 재할당이 필요한 경우에 한정해 `let` 을 사용하는 것이 좋다.

* 그리고 객체를 재할당하는 경우는 생각보다 흔하지 않다. `const` 를 사용하면 의도치 않은 재할당을 방지해 주기 때문에 보다 안전하다.
  * 재할당이 필요한 경우에 한정해 `let` 을 사용한다. 이때, 변수의 스코프는 최대한 좁게 만든다.
  * 재할당이 필요 없는 상수와 객체에는 `const` 를 사용한다.



#### 예시

```js
const x = 2;       // Allowed
const x = 3;       // Not allowed
x = 3;             // Not allowed
var x = 3;         // Not allowed
let x = 3;         // Not allowed

{
  const x = 2;   // Allowed
  const x = 3;   // Not allowed
  x = 3;         // Not allowed
  var x = 3;     // Not allowed
  let x = 3;     // Not allowed
}
```



------

### 8. Prototype

------

### 9. Shadow DOM

------

### 10. Strict

#### 엄격모드 (use strict) [#](https://ko.javascript.info/strict-mode)

* 지시자 `"use strict"`, 혹은 `'use strict'`는 단순한 문자열처럼 생겼습니다. 하지만 이 지시자가 스크립트 최상단에 오면 스크립트 전체가 “모던한” 방식으로 동작합니다.

* 모던 자바스크립트는 '클래스’와 '모듈’이라 불리는 진일보한 구조를 제공합니다(클래스와 모듈에 대해선 당연히 뒤에서 학습할 예정입니다). 이 둘을 사용하면 `use strict`가 자동으로 적용되죠. 따라서 이 둘을 사용하고 있다면 스크립트에 `"use strict"`를 붙일 필요가 없습니다.

* 결론은 이렇습니다. **코드를 클래스와 모듈을 사용해 구성한다면 `"use strict"`를 생략해도 됩니다. 그런데 아직은 이 둘을 배우지 않았으니 `"use strict"`를 귀한 손님처럼 모시도록 하겠습니다.**