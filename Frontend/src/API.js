
var API_URL = "http://localhost:5050";

function backendGet(url,data, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'GET',
        contentType : 'application/json',
        data: JSON.stringify(data),
        success: function(data){
            callback(null, data);
        },
        fail: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

function backendPost(url, data, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'POST',
        contentType : 'application/json',
        data: JSON.stringify(data),
        success: function(data){
            callback(null, data);
        },
        fail: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

exports.createOrder = function(order_info, callback) {
    backendPost("/api/createOrder/", order_info, callback);
};


exports.getClients = function(callback) {
    backendGet("/api/get-clients/", callback);
};

exports.getProductList = function(callback) {
    backendGet("/api/get-product-list/", callback);
};

