const express = require('express');
const app = express();
// const methodOverride = require('method-override')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))
// app.use(methodOverride('_method'))

//tie data to server
const teams = require('./models/teams.js')

app.get('/teams/new', (req, res) => {
    res.render('new.ejs')
})









app.listen(3000, () => {
    console.log('I am listening');
});