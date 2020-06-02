const db = require('../connection');
const mongoose = require('mongoose');

const altarSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    level: Number,
    rupies: Number,
    materials: {
        bronzeOrb: Number,
        silverOrb: Number,
        goldOrb: Number,
        platinumOrb: Number,
        rainbowOrb: Number
    }
});

var Altar = mongoose.model('Altar', altarSchema);

function getAllAltars() {
    return Altar.find((err, altars) => {
        if (err) return console.error(err);
    });
}

module.exports = {
    getAllAltars,
};