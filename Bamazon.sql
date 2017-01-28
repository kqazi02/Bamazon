CREATE DATABASE IF NOT EXISTS bamazon;

USE bamazon;

CREATE TABLE IF NOT EXISTS products (
  item_id INT(10) AUTO_INCREMENT PRIMARY KEY NOT NULL
, product_name VARCHAR(100) NOT NULL
, author_name VARCHAR(100) NULL
, department_name VARCHAR(30) NULL
, price FLOAT(12) NOT NULL
, stock_quantity INT(30) NOT NULL
);

INSERT INTO products (product_name, author_name, department_name, price, stock_quantity) 
VALUES ( "Hamilton", "Jeremy McCarter", "Award Winners", 45.00, 2000)
, ( "The Invention of Wings", "Sue Monk", "Bargain Books", 12.99, 400)
-- , ( "Thermodynamics: An Engineering Approach", NULL, "Textbook", 254.47, 1200)
, ( "Goodnight Moon", "Margaret Wise Brown", "Children's Books", 7.49, 600)
, ( "The Food Lab", "J. Kenji López-Alt", "Award Winners", 49.95, 2000)
, ( "The Odyssey", "Homer", "Bargain Books", 3.73, 400)
-- , ( "Applied Statistics and Probability for Engineers", NULL, "Textbook", 203.16, 1200)
, ( "They All Saw a Cat", "Brendan Wenzel", "Children's Books", 12.14, 600)
, ( "Where the Sidewalk Ends", "Where the Sidewalk Ends", "Children's Books", 19.99, 600)
, ( "All the Light We Cannot See", "All the Light We Cannot See", "Award Winners", 27, 2000)
, ( "Harry Potter and the Goblet of Fire", "J. K. Rowling", "Award Winners", 29.99, 2000)
, ( "The Girl on the Train", "Paula Hawkins", "Award Winners", 29.95, 2000)
, ( "Harry Potter Y La Piedra Filosofal", "J. K. Rowling", "Books in Spanish", 13.05, 500);

SELECT * FROM products;

-- ALTER TABLE products ADD COLUMN author_name VARCHAR(100) NOT NULL AFTER product_name;