var passport = require('passport')
var localStrategy = require('passport-local').Strategy
var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')
mongoose.connect('mongodb://localhost/Students-list')
var db = mongoose.connection
var DataSchema = mongoose.Schema({
name: {
    type: String
     
},
surname: {
    type: String
     
},
gender: {
    type: String
     
},
religion: {
    type: String
     
},
date: {
    type: String
     
},
disability: {
    type: String
     
},
nation: {
    type: String
     
},
SOG: {
    type: String
     
},
LGA: {
    type: String
     
},
address: {
    type: String
     
},
schname: {
    type: String
     
},
addsch: {
    type: String
     
},
pname: {
    type: String
     
},
psurname: {
    type: String
     
},

pemail: {
    type: String
     
},
padd: {
    type: String
     
}
})
var Data = module.exports = mongoose.model('Data', DataSchema)