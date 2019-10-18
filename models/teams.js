const mongoose = require ('mongoose');

//bluepring for our documents that go into collections
const teamsSchema = new mongoose.Schema ({
    name: { type: String, required: true},
    title: {type: Number, required: true},
});


//colltion teams
//the value of this method is our model that we saved into variable Teams
//powerful variable
const Teams = mongoose.model('Teams', teamsSchema);

module.exports = Teams;