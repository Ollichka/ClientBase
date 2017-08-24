
var fs = require('fs');
var ejs = require('ejs');


exports.active_order_cart = ejs.compile(fs.readFileSync('./Frontend/templates/Active_order_cart.ejs', "utf8"));

exports.birthday_of_client_cart = ejs.compile(fs.readFileSync('./Frontend/templates/birthday_of_client_cart.ejs', "utf8"));

exports.client_one_cart = ejs.compile(fs.readFileSync('./Frontend/templates/client_one_cart.ejs', "utf8"));

exports.product_in_order_cart = ejs.compile(fs.readFileSync('./Frontend/templates/product_in_order_cart.ejs', "utf8"));

exports.product_in_order_frame_cart = ejs.compile(fs.readFileSync('./Frontend/templates/product_in_order_frame_cart.ejs', "utf8"));

exports.product_in_order_one_cart = ejs.compile(fs.readFileSync('./Frontend/templates/product_order_one_cart.ejs', "utf8"));

exports.time_ended_cart = ejs.compile(fs.readFileSync('./Frontend/templates/time_ended_cart.ejs', "utf8"));