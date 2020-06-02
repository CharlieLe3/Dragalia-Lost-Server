const db = require('../connection');
const mongoose = require('mongoose');

const dojoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    level: Number,
    rupies: Number,
    materials: {
        bronzeDyrenell: Number,
        silverDyrenell: Number,
        goldDyrenell: Number,
        silverInsignia: Number,
        goldInsignia: Number
    }
}, {collection: 'dojo'} );

var Dojo = mongoose.model('Dojo', dojoSchema);

function getAllDojos() {
    return Dojo.find((err, dojos) => {
        if (err) return console.error(err);
    });
}

module.exports = {
    getAllDojos,
};