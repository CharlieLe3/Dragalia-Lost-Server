const db = require('../connection');
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    level: Number,
    rupies: Number,
    materials: {
        eventMaterial: Number
    }
}, {collection: 'event'} );

var Event = mongoose.model('Event', eventSchema);

function getAllEvents() {
    return Event.find((err, events) => {
        if (err) return console.error(err);
    });
}

module.exports = {
    getAllEvents,
};