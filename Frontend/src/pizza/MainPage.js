
var Templates = require('../Templates');

function showActiveOrders(active_orders){
    var $active_order_list = $(".active_orders");

    $active_order_list.html("");

    function showOneActiveOrder(order){
        var html_code = Templates.Active_order_cart({order: order});
        var $node = $(html_code);




        $active_order_list.append($node);
    }

    active_orders.forEach(showOneActiveOrder);
}

function showBirthday(birthday){

}

function showTimeEnded(time_ended){

}

function initialiseMenu(active_orders,birthday,time_ended) {
//    showActiveOrders(active_orders);
//    showBirthday(birthday);
//    showTimeEnded(time_ended);
}

exports.initialiseMenu = initialiseMenu;