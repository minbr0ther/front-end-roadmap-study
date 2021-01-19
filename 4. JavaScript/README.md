# Front-end Roadmap 2021

## 4. JavaScript

### 1. Syntax and Basic Constructs [#](https://www.w3schools.com/js/default.asp)

#### >> 01.18 Introduction ~ String Method

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

#### >> 01.19 String Method ~ Array Sort



------

### 2. Learn DOM Manipulation

------

### 3. Learn Fetch API / Ajax (XHR)

------

### 4. ES6+ and modular JavaScript

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



### 6. Event Bubbling

------

### 7. Scope

------

### 8. Prototype

------

### 9. Shadow DOM

------

### 10. Strict