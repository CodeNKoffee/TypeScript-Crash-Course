"use strict";
// Basic Types
let i = 5;
let company = "Splanda Media";
let isPublished = true;
let x = "Hello";
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hatem"];
// Tuple
let person = [18, "Amr", true];
// Tuple Array
let employee;
employee = [
    [1, "Hatem"],
    [2, "Fam"],
    [3, "Aly"]
];
// Union
let productId;
productId = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "John"
};
// Type Assertion
let cid = 1;
/*
let customerId = <number>cid;
*/
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(17, 21));
function log(message) {
    console.log(message);
}
// Interfaces
