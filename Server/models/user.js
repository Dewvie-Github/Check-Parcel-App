const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    parcel_id: Number,
    nameTH: String,
    surnameTH: String,
    nameEN: String,
    surnameEN: String,
    email: String,
    password: String,
  },
  { versionKey: false}
);




const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
