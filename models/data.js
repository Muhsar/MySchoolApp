var passport = require('passport')
var localStrategy = require('passport-local').Strategy
var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')
mongoose.connect('mongodb://localhost/Students-list')
mongoose.Promise = global.Promise
var db = mongoose.connection
var DataSchema = mongoose.Schema({
name: {
    type: String
     
},
surname: {
    type: String
     
},
class: {
    type: String
     
},
Gender: {
    type: String
     
},
Religion: {
    type: String
     
},
DOB: {
    type: String
     
},
Disabilities: {
    type: String
     
},
address: {
    type: String
     
},
Nationality: {
    type: String
     
},
SOG: {
    type: String
     
},
LGA: {
    type: String
     
},

PreSchoolsName: {
    type: String
     
},
PreSchoolsAddress: {
    type: String
     
},
ParentsName: {
    type: String
     
},
ParentsNumber: {
    type: String
     
},
ParentsSurname: {
    type: String
     
},

email: {
    type: String
     
},
ParentsAddress: {
    type: String
     
}
})
var Data = module.exports = mongoose.model('Data', DataSchema)
module.exports.createData = function(newData, callback){
    newData.save(callback)
//     bcrypt.genSalt(10, function(err, salt){
//         bcrypt.hash(newUser.password, salt, function(err, hash){
//             newUser.password = hash
//             newUser.save(callback)
// })
//     })
}