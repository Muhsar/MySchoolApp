var mongo = require('mongodb')
var mongoose = require('mongoose')
var db = mongoose.connection
var Data = mongoose.model('Data')


exports.getData = async (req, res)=> {
    const creche = await Data.find()
    res.render('creche', { creche})
}
exports.createData = async (req, res)=> {
    const data = await (new Data(req.body)).save()
    // await store.save()
    req.flash('success', `Successfully registered ${data.name} to the school `)
    res.redirect('/register')
}