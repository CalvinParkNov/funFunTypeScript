"use strict";
exports.__esModule = true;
//num이 any 타입이라서 오류 없이 실행이 된다.
// 굉장히 않좋은 방법이다.
function addTwo(num) {
    //   num.toLowerCase();
    return num + 2;
}
addTwo(5);
// 맞게 function을 수정
function addNumber(num) {
    // num.toUpperCase() <- 에러
    //
    return num + 2;
}
addNumber(2);
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(4); <- 에러
getUpper("calvin");
function signUpUser(name, email, isPaid) {
    return { name: name, email: email, isPaid: isPaid };
}
console.log(signUpUser("Calvin", "dev.calvinpark@gmail.com", false));
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { name: name, email: email, isPaid: isPaid };
};
console.log(loginUser("c", "c@g.com"));
