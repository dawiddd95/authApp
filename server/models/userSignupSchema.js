const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signschema = new Schema({
   surname: {type: String, required: true},
   name: {type: String, required: true},
   email: {type: String, required: true},
   password: {type: String, required: true},
   active: {type: Boolean, required: true}
 });

module.exports = mongoose.model('signmodel', signschema);
