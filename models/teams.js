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


// 1)Schema: Schema is a blueprint 
//for what our documents (the objects we put into mongodb) should look like, we define the keys,
//and the types of the values
// 2)Model: The model is the object that stores our documents/collections
// 3) Relationship is the model can store the documents that are created through requirements of schema
// 4) Schema gives parameters of what is required for data to be created into a document and then the model stores, 
// or acts like a container, for many documents

