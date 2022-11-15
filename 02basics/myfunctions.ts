//num이 any 타입이라서 오류 없이 실행이 된다.
// 굉장히 않좋은 방법이다.
function addTwo(num) {
  //   num.toLowerCase();
  return num + 2;
}

addTwo(5);

// 맞게 function을 수정
function addNumber(num: number) {
  // num.toUpperCase() <- 에러
  //
  return num + 2;
}
addNumber(2);

function getUpper(val: string) {
  return val.toUpperCase();
}
// getUpper(4); <- 에러
getUpper("calvin");

function signUpUser(name: string, email: string, isPaid: boolean) {
  return { name, email, isPaid };
}

console.log(signUpUser("Calvin", "dev.calvinpark@gmail.com", false));

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  return { name, email, isPaid };
};

console.log(loginUser("c", "c@g.com"));

export {};
