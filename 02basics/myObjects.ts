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

// to fix it

// this is a function parameter, return type, and definition
function createCourse(): { name: string; price: number } {
  return { name: "typescript", price: 400 };
}

export {};
