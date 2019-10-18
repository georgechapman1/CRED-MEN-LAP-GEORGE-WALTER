const express = require('express');
const app = express();
// const methodOverride = require('method-override')
const bodyParser = require('body-parser');
require('./db/db');
app.use(bodyParser.urlencoded({extended: false}))
// app.use(methodOverride('_method'))

//tie data to server
const teams = require('./models/teams.js')


//make a new team page
app.get('/teams/new', (req, res) => {
    res.render('new.ejs')
})



app.post('/teams', (req, res) => {
    // our routes are the final destination
    console.log(req.body, ' this should be the contents of the form')

    // create the teams/ use the model to add it to our db
    // MOdel to add it to the array (in this case we have an array)
    // representing our db, teams is our array
    teams.push(req.body);
    console.log(teams)
    // I'm getting /teams from the url in the index route
    res.redirect('/teams');
})



// display index route
app.get('/teams', (req, res) => {
      res.render('index.ejs', {
        teams: teams, //IndexRouteteams
        index: req.params.id
    });
});

// // display show route
// app.get('/teams/:id', (req, res) => {
//       res.render('show.ejs', {
//         SRteams: teams[req.params.id], //ShowRouteteam
//         index: req.params.id
//     });
// });








app.listen(3000, () => {
    console.log('I am listening');
});