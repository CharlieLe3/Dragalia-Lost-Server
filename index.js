const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/connection');
const Mine = require('./db/facilities/mines');
const Altar = require('./db/facilities/altars');
const Dojo = require('./db/facilities/dojos');
const Event = require('./db/facilities/events');
const Dragontree = require('./db/facilities/dragontree');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 7000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/mines', (req, res) => {
    Mine.getAllMines()
        .exec()
        .then((mines) => { console.log(mines); })
        .catch((err) => { console.log(`There was an error retrieving the mines: ${err}`); });
});

app.get('/altars', (req, res) => {
    Altar.getAllAltars()
        .exec()
        .then((altars) => { console.log(altars); })
        .catch((err) => { console.log(`There was an error retrieving the altars: ${err}`); });
});

app.get('/dojos', (req, res) => {
    Dojo.getAllDojos()
        .exec()
        .then((dojos) => { console.log(dojos); })
        .catch((err) => { console.log(`There was an error retrieving the dojos: ${err}`); });
});

app.get('/events', (req, res) => {
    Event.getAllEvents()
        .exec()
        .then((events) => { console.log(events); })
        .catch((err) => {console.log(`There was an error retrieving the events: ${err}`); });
});

app.get('/dragontrees', (req, res) => {
    Dragontree.getAllDragontrees()
        .exec()
        .then((dragontrees) => { console.log(dragontrees); })
        .catch((err) => {console.log(`There was an error retrieving the dragontrees: ${err}`); });
});

app.listen(port, () => {
    
    console.log(`Server started on port ${port}`);
});
