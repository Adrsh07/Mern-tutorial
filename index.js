const express = require('express');
const path = require('path');
const members = require('./members');

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(logger);

//get all members
app.get('/api/members' , (req, res) => {
    res.json(members);
});

//get all members
app.get('/' , (req, res) => {
    res.send("Adarsh");
});

//set static folder

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('Server started at ', PORT));