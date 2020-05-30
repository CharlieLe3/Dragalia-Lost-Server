const db = require('../connection');
const mongoose = require('mongoose');

const mineSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    level: Number,
    rupies: Number,
    materials: {
        bronzeOrb: Number,
        silverOrb: Number,
        goldOrb: Number,
        platinumOrb: Number
    }
});

var Mine = mongoose.model('Mine', minesSchema);

function getAllMines() {
    return Mine.find((err, mines) => {
        if (err) return console.error(err);
    });
}


module.exports = {
    getAllMines,
};