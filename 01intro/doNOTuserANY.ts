let hero;
function getHero() {
  return "Black Panther";
}
hero = getHero();

export {};
// ***** any를 사용하게 될경우 TS의 장점을 사용하지 않는 것이다.
// from Doc(공식문서)
// TS에는 스페셜한 타입이 있다. 그것이 any라는 타입인데, any는 입력 검사 오류를 생기지 않도록 한다.
// 값이 any유형일 때, 모든 속성에 접근할 수 있고, 함수처럼 호출할 수 있다. 어떤 유형의 값에 할당할 수 있다.
// 모든 것에 할당할 수 있다.
// any 타입은 TS에서 긴 유형을 쓰고 싶지 않을 떄 유용하다.
// ---*****---
// You usually want to avoid this, though, because any isn’t type-checked.
// 하지만, any사용을 일반적으로 사용하지 않는것이 좋다, 왜냐하면 any는 유형검사 즉 type check이 안되기 떄문이다.
// Use the compiler flag noImplicitAny to flag any implicit any as an error
// ts.config에서 noImplicitAny설정해서 any는 에러가 나오도록 해야한다.
