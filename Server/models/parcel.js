const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parcelSchema = new Schema({
    parcel_id: Number,
    name: String,
    surname: String,
    date: Date,
    statusDelivered: Boolean,
    returnDelivered: Boolean
  },
  {timestamps: true, versionKey: false}
);

const ParcelModel = mongoose.model('Parcel', parcelSchema);

module.exports = ParcelModel;

