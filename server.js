const express = require('express');
const app = express();
const methodOverride = require('method-override')
const bodyParser = require('body-parser');
require('./db/db');
const Teams = require('./models/teams.js')

//middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))

//tie data to server


// make a new team page
app.get('/teams/new', (req, res) => {
    res.render('new.ejs')
})
 

// Post data of new team
app.post('/teams', (req, res) => {
    // our routes are the final destination
    console.log(req.body, ' this should be the contents of the form')
    // create the teams/ use the model to add it to our db
    Teams.create(req.body, (err, createdTeams) => {
      if(err){
        res.send(err);
      } else {
        console.log(createdTeams);
          // I'm getting /teams from the url in the index route
        res.redirect('/teams');
      }
    })
});


// Show route
app.get('/teams/:id', function(req, res){

    Teams.findById(req.params.id, (err, foundTeams) => {
      if(err){
        res.send(err);
      } else {
         console.log(foundTeams)
         res.render('show.ejs', {
              teams:  foundTeams // foundTeams
              // is the the team from the db
              // we want to show the client
          });
      }
    })



});



// Route to index Posting to Index
app.get('/teams', (req, res) => {
  // empty object says find all the
  // documents
  Teams.find({}, (err, foundTeams) => {
    if(err){
      res.send(err);
    } else {
      res.render('index.ejs', {
        teams: foundTeams // thsi fruits comes from the callback
      });
    } // end of else
  })// end of model query

}); // end of .get


// delete
app.delete('/teams/:id', (req, res) => {
    
    // our logic to delete
    Teams.deleteOne({_id: req.params.id}, (err, response) => {
      if(err){
        res.send(err);
      } else {
        console.log(response);
        res.redirect('/teams');
      }
    })
    // array method to splice the item out of our model
    // look up splice go to array splice on mdn
})












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