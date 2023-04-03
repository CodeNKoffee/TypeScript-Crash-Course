// Basic Types
let i: number = 5;
let company: string = "Splanda Media";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hatem"];


// Tuple
let person: [number, string, boolean] = [18, "Amr", true];
// Tuple Array
let employee: [number, string] []

employee = [
  [1, "Hatem"],
  [2, "Fam"],
  [3, "Aly"]
]


// Union
let productId: string | number;
productId = 22;


// Enum
enum Direction1 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}


// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: "John"
}


// Type Assertion
let cid: any = 1;
/*
let customerId = <number>cid;
*/
let customerId = cid as number;


// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(17, 21));

function log(message: string | number): void {
  console.log(message);
}


// Interfaces

