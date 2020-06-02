const db = require('../connection');
const mongoose = require('mongoose');

const dragontreeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    level: Number,
    rupies: Number,
    materials: {
        talonstone: Number
    }
}, {collection: 'dragontree'} );

var Dragontree = mongoose.model('Dragontree', dragontreeSchema);

function getAllDragontrees() {
    return Dragontree.find((err, dragontrees) => {
        if (err) return console.error(err);
    });
}

module.exports = {
    getAllDragontrees,
};