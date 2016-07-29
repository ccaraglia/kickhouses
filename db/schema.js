const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const usersSchema = new Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x

   // example of optional fields
  name:      { type: String },
  campBacked: [{type: Schema.Types.ObjectId , ref: 'Campaign'}],
  createdAt: { type: Date, default: Date.now }

})


const campaignsSchema = new Schema({

    title: { type: String },
    subtitle: { type: String },
    value: { type: Number },
    zipcode: { type: Number },
    description: { type: String },
    backers: [{
        _id: false,
      backerId: { type: String },
      shareValue: { type: Number, default: 0 }
    }],
    imageUrl: {type: String, required: true},
    authorEmail: { type: String, required: true },
    authorId: { type: String, required: true },

    })





module.exports = {
  User: createModel('User', usersSchema),
  Campaign: createModel('Campaign', campaignsSchema)
}
