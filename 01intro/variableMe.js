"use strict";
exports.__esModule = true;
var greetings = "Hello Calvin";
greetings.toLowerCase();
console.log(greetings);
// number
var userId = 1242135.2;
// userId = "Calvin" => error (Once you declare number, it is just number, number로 선언하면 number이다.)
// boolean
var isLoggedIn = false;
// any
var hero;
function getHero() {
  return "Black Panther: Wakanda Forever";
}
hero = getHero();
// From Docs (공식문서)
// JS에는 일반적으로 사용하는 세가지 기본 요소가 있다. string(문자열), number(숫자), and boolean(Boolean).
// 이 각 유형은 TS에 해당하는 유형이 있다. JS의 typeof를 사용하게 되면 아는거와 같이 이런 값이 예상된다.
// String은 "Hello World";
// Number는 23; 자바스크립트는 정수에 대한 특별한 런타임 값을 가지고 있지 않기 때문에 int나 float와 동등하지 않는다. 모든것은 단숫히 "숫자"이다.(7번 줄에서 볼수 있듯이 단순한 "숫자")
// Boolean은 true || false
// ***** 7번줄에서 let userId: number = 1242135.2; <- 라고 number를 선언을 했다. 하지만 굳이 이렇게 작성을 하지 않아도 된다.
// TS는 생각보다 스마트해서 굳이 string, number, boolean을 안적어도 값으로 알아서 해준다.
// 예)
var userId2 = 1235.5;
console.log(userId2.toFixed()); //문제 없이 잘나옴
