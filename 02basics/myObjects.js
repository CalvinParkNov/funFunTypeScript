"use strict";
exports.__esModule = true;
var User = {
    name: "calvin",
    email: "calvinpark@gmail.com",
    isActive: true
};
// the most basic function of typeScript
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({
    name: "calvin",
    isPaid: false
});
// bad syntax
var newUser = { name: "calvin", isPaid: false, email: "something@gmail.com" };
// it is a bad syntax because it pass more then function createUser
// also this is not typescript syntax.
createUser(newUser);
// Exactly the same as the easrlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
function createUser1(user) {
    return { name: "", email: "", isActive: true };
}
createUser1({ name: "", email: "", isActive: true });
// this is a function parameter, return type, and definition
function createCourse() {
    return { name: "typescript", price: 400 };
}
var myUser = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUser.email = "h@gmail.com";
