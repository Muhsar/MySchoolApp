var mongo = require('mongodb')
var mongoose = require('mongoose')
var db = mongoose.connection
// require('./models/data')
var Data = mongoose.model('Data')
mongoose.Promise = global.Promise

exports.getData = async (req, res)=> {
    const creches = await Data.find({class: 'creche'})
    res.render('creche.pug', {title: 'Creche Class', creches})
}
exports.findAll = async (req, res)=> {
    const datas = await Data.find()
    res.render('students.pug', {title: 'Student List', datas})
}