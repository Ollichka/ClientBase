

$(function(){
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/PizzaMenu');
    var MainPage = require('./pizza/MainPage');
    var API = require('./API');



    activeHeader();


    function timer (){
        var datetime = {
            month: [1,2,3,4,5,6,7,8,9,10,11,12],
            day: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'],
            show: function(node) {
                var _this = this;
                setInterval(function() {
                    var date = new Date();
                    node.innerHTML = [_this.day[date.getDay()], ', ', date.getDate(), '.', _this.month[date.getMonth()],'.',date.getYear()+1900,' ',date.getHours(),':',date.getMinutes()].join('');
                }, 1000);
            }
        };
        window.onload = function() {
            datetime.show(document.getElementById('date'));
        };
        $(".ord").click(function(){
            window.location = "/order.html";
        })
    }

    function activeHeader(){
        timer();

        $(".header_product").click(function(){
            window.location = "/product.html";
        })

        $(".header_client").click(function(){
            console.log("click");
            window.location = "/client.html";
        })

        $(".header_main").click(function(){
            window.location = "/";
        })


    }

    if (window.location.pathname === '/') {
        MainPage.initialiseMenu();
    }
    if (window.location.pathname === '/client.html') {
        API.getClients(function(err,pizza_list) {
            if (err) return console.error(err);
            PizzaMenu.initialiseMenu(pizza_list);
        });
    }







});