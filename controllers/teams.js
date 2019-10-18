const express = require('express');
const router = express.Router();
const Teams = require('../models/teams.js')


// make a new team page
router.get('/new', (req, res) => {
    res.render('new.ejs')
})
 

// Post data of new team
router.post('/', (req, res) => {
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

//edit
router.get('/:id/edit', (req, res) => {

  Teams.findById(req.params.id, (err, foundTeams) => {
    if(err){
      res.send(err);
    } else {
      res.render('edit.ejs', {
        teams: foundTeams,
      })
    }
  })

});


//putting form back into index
router.put('/:id', (req, res) => {
  console.log(req.body, 'contents of the form')

  Teams.findByIdAndUpdate(
    req.params.id, // first is identifier of object we want to update
    req.body,  // second is object we want to update to
    {new: true}, // do we want the updated document returned? Yes
    (err, updatedTeams) => {

    if(err){
      res.send(err);
    } else {
      console.log(updatedTeams);
       res.redirect('/teams')
    }

  });
});





// Show route
router.get('/:id', function(req, res){

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
router.get('/', (req, res) => {
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
router.delete('/:id', (req, res) => {
    
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


module.exports = router;









// // display show route
// router.get('/teams/:id', (req, res) => {
//       res.render('show.ejs', {
//         SRteams: teams[req.params.id], //ShowRouteteam
//         index: req.params.id
//     });
// });

