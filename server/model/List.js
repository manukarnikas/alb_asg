const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema  = new Schema({
    task: {
        type: 'string',
        required: true
    }
});

const List  = mongoose.model('List',listSchema);

module.exports = List;
