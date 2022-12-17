const User = {
  name: "calvin",
  email: "calvinpark@gmail.com",
  isActive: true,
};
// the most basic function of typeScript
function createUser({ name: string, isPaid: boolean }) {}

createUser({
  name: "calvin",
  isPaid: false,
});

// bad syntax

let newUser = { name: "calvin", isPaid: false, email: "something@gmail.com" };
// it is a bad syntax because it pass more then function createUser
// also this is not typescript syntax.
createUser(newUser);

// to fix it type alias
// below type is very common thing to do in typescript
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

//official docs
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the easrlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });

function createUser1(user: User): User {
  return { name: "", email: "", isActive: true };
}
createUser1({ name: "", email: "", isActive: true });
// this is a function parameter, return type, and definition
function createCourse(): { name: string; price: number } {
  return { name: "typescript", price: 400 };
}

//if you are using mongoDB
// readonly can use in interface and type.
// readonly can declare but changeable.
type User1 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditcardDetails?: number;
};

let myUser: User1 = {
  _id: "1234",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

myUser.email = "h@gmail.com";

export {};
