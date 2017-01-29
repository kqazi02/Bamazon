var Shapes = require ("./index.js");
var Square = require ("./square.js");
var Triangle = require ("./triangle.js");
var Pentagon = require ("./pentagon.js");

var tri1 = new Triangle(3,4,5);
var sq1 = new Square (4);
var pent1 = new Pentagon(9,11,9,11,9);

console.log(tri1 instanceof Triangle);
console.log(tri1 instanceof Shapes);
console.log(sq1 instanceof Square);
console.log(sq1 instanceof Shapes);
console.log(pent1 instanceof Pentagon);
console.log(pent1 instanceof Shapes);
