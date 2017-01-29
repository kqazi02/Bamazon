var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	  host: "localhost",
	  port: 3306,
	  user: "root",
	  password: "rxt353",
	  database: "bamazon"
});
connection.connect(function(err) {
	if (err) throw err;
});

connection.query("SELECT * FROM products", function(err, res) {
	console.log(res);
	for (var i = 0; i < res.length; i++) {

		console.log("| Item ID: " + res[i].item_id + " | $" + res[i].price + " | " + res[i].product_name + " by " + res[i].author_name + " | From: " + res[i].department_name + " |" + "\n_____________________________________________________________________________________________________________");
	}
})
purchaserQuery();

function purchaserQuery() {
	inquirer.prompt([
	{
		type: "input",
		name: "query",
		message: "Input the item ID you wish to purchase.",
	},
	{
		type: "input",
		name: "quantity",
		message: "How many of this item will you purchase?",
	}
	]).then(function(info) {
	var item = info.query;
	var quantity = info.quantity;

	connection.query("SELECT * FROM products WHERE item_id = ? ", item, function(err, res) {
			if (err) throw err;
			var stock = res[0].stock_quantity;
			if (stock >= quantity) {
				var total = stock - quantity;
				var cost = res[0].price;

				console.log("Your total comes to $" + (quantity * cost));
				connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: total}, {item_id: item}], function(err, res) {});
				inquirer.prompt([
					{
						type: "confirm",
						name: "complete",
						message: "Have you finished shopping?"
					}
				]).then(function(info){
					var complete = info.complete;

					if (complete) {
						connection.end();
					} else {
						purchaserQuery();
					}
				})

			} else {
				console.log("Insufficient quantity!");
				purchaserQuery();
			}
		});
	});
}