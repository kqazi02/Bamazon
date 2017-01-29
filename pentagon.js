'use strict';

var Shape = require("./index.js");

function Pentagon (side, side1, side2, side3, side4) {
	if (!(this instanceof Pentagon)){
		return new Pentagon (side, side1, side2, side3, side4)
	}

	this.shapename = "Pentagon";
	this.side = side;
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
}

Pentagon.prototype = new Shape();
Pentagon.prototype.constructor = Pentagon;

module.exports = Pentagon;