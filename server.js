const express = require('express');
const app = express();
const methodOverride = require('method-override')
const bodyParser = require('body-parser');
require('./db/db');
const Teams = require('./models/teams.js')

//middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))









const teamsController = require('./controllers/teams');

app.use('/teams', teamsController);





app.listen(3000, () => {
    console.log('I am listening');
});