var mongo = require('mongodb')
var mongoose = require('mongoose')
var db = mongoose.connection
// require('./models/data')
var Data = mongoose.model('Data')
mongoose.Promise = global.Promise

exports.getData = async (req, res)=> {
    const creche = await Data.find()
    res.render('creche.mustache', creche)
}
exports.findAll = (req, res)=> {
    Data.find()
    .then(users => {
        res.send(users);
    })
}