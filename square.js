//USE STRICT
'use strict';

//Working on the Square
var Shape = require("./index.js");

//Declare our square
//Capitalize
function Square (side) {
	if (!(this instanceof Square)) {
		return new Square(side);
	}

	this.shapename = "Square";
	this.side = side;
}

// //The prototype info to tie Square to Shape
Square.prototype = new Shape();
Square.prototype.constructor = Square;

// console.log(Shape);
module.exports = Square;