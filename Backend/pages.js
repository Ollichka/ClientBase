
exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Головна сторінка'
    });
};

exports.orderPage = function(req, res) {
    res.render('orderPage', {
        pageTitle: 'Оформлення замовлення'
    });
};

exports.clientPage = function(req, res) {
    res.render('clientPage', {
        pageTitle: 'Клієнти'
    });
};


exports.productPage = function(req, res) {
    res.render('productPage', {
        pageTitle: 'Продукція'
    });
};