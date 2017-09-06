var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var clientsSchema = new Schema({
        name            : String,
        phone         : String,
        email          : String,
        birth          :Date,
        status            : String,
        add_Info        : String
});

// methods ======================
clientsSchema.methods.changeStatus = function(status) {
    this.status = status;
    return this.system.status;
};

module.exports = mongoose.model('Clients', clientsSchema);