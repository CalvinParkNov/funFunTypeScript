//num이 any 타입이라서 오류 없이 실행이 된다.
// 굉장히 않좋은 방법이다.
function addTwo(num) {
  //   num.toLowerCase();
  return num + 2;
}

addTwo(5);

// 맞게 function을 수정
function addNumber(num: number): number {
  // num.toUpperCase() <- 에러
  //
  // return "Hello"; <-에러
  return num + 1;
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

// union 사용
function getValue(myVal: number): string | boolean {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

// arrow function 사용 예
const getHello = (s: string): string => {
  return "";
};

const heros = ["Black Panther", "Thor", "Batman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  // return 1 <- 에러.
  return `hero is ${hero}`;
});

// void 예시
function consoleError(errmsg: string): void {
  console.log(errmsg);
  // return 1 <- void 이기 떄문에 return을 해주면 에러.
}

// never, error사용 예.
// The never type represents values which are never observed. In a return type, this means that the function throws an exception or
// terminates execution of the program.
// never also appears when TypeScript determines there is nothing left in a union
// Never 타입은 반환 형식에서 함수가 예외를 발생시키거나 프로그램 실행을 종료함을 의미한다.
// TypeScript에 union이 아무것도 남아 있지 않다고 판단할 때도 나타난다.
function handleError(errmsg: string): void {
  throw new Error(errmsg);
}

export {};
