const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://TestUser:xAWVqfaJXfV3WXLT@dragalia-ria0s.mongodb.net/Facilities?retryWrites=true&w=majority';

mongoose.connect(connectionString,  {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to Facilities database');
});
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;