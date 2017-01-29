'use strict';

var Shape = require("./index.js");

function Triangle (side, side1, side2) {
	if (!(this instanceof Triangle)) {
		return new Triangle(side, side1, side2);
	}

	this.shapename = "Triangle";
	this.side = side;
	this.side1 = side1;
	this.side2 = side2;
}

Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

module.exports = Triangle;