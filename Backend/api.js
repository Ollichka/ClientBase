
var Clients    = require('./db/clients');

var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/ClientBase";
mongoClient.connect(url, function(err, db){

//        Client_List.forEach(function(value){
//            var client = new Clients();
//            client.name = value.name;
//            client.phone = value.phone;
//            client.email = value.email;
//            client.status = value.status;
//            client.add_Info = value.additional_info;
//
//            db.collection("clients").insert(client, function(err, results){
//
//                console.log(results);
//            });
//        });


  //  Clients.changeStatus(2);

//    Product_List.forEach(function(value){
//        var product = new Clients();
//        client.name = value.name;
//        client.phone = value.phone;
//        client.email = value.email;
//        client.status = value.status;
//        client.add_Info = value.additional_info;
//
//        db.collection("clients").insert(client, function(err, results){
//
//            console.log(results);
//        });
//    });
});











exports.getClients = function (req,res){
    mongoClient.connect(url, function(err, db) {
        db.collection("clients").find().toArray(function(err, results){

            res.send(results);
            console.log(results);
        });
    });
};

exports.getProductList = function(req, res) {
    res.send(Product_List);
};

exports.createOrder = function(req, res) {
    var order_info = req.body;
    console.log("Creating Order", order_info);
    db.collection("orders").insert(order_info, function(err, results){
                console.log(results);
    });

    res.send({
        success: true,
        data: data,
        signature:signature
    });
};


