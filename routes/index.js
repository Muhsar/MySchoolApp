// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
var express = require('express');
var multer = require('multer')
var upload = multer({dest:'./uploads'})
var Data = require('../models/data')
var passport = require('passport')
const storeController = require('../controllers/dataController')
var localStrategy = require('passport-local').Strategy
var mongo = require('mongodb')
var mongoose = require('mongoose')
var db = mongoose.connection
/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
	res.render('index')
})

/*  This route render json data */
router.get('/json', (req, res) => {
	res.json({
		confirmation: 'success',
		app: process.env.TURBO_APP_ID,
		data: 'this is a sample json route.'
	})
})

/*  This route sends text back as plain text. */
router.get('/send', (req, res) => {
	res.send('This is the Send Route')
})
router.get('/register', (req, res) => {
	res.render('dash')
})
router.get('/creche', (storeController.getData))
router.get('/class', (req, res) => {
	res.render('class')
	
  
})
router.post('/register',(storeController.createData))
/*  This route redirects requests to Turbo360. */
router.get('/redirect', (req, res) => {
	res.redirect('https://www.turbo360.co/landing')
})
router.post('/register', function(req, res, next) {
	var name = req.body.name
	var pname = req.body.pname
	var email = req.body.pemail
	var clas = req.body.clas
	var surname = req.body.surname
	var psurname = req.body.psurname
	var address = req.body.address
	var padd = req.body.padd
	var gender = req.body.gender
	var LGA = req.body.LGA
	var SOG = req.body.SOG
	var pnumber = req.body.pnumber
	var schname = req.body.schname
	var addsch = req.body.addsch
	var religion = req.body.religion
	var date = req.body.date
	var disability = req.body.disability
	var nation = req.body.nation
	
	
	// } else {
	  var newData = new Data({
		name: name,
		ParentsName: pname,
		email: email,
		surname: surname,
		class: clas,
		ParentsSurname: psurname,
		address: address,
		ParentsAddress: padd,
		Gender: gender,
		LGA: LGA,
		SOG: SOG,
		ParentsNumber: pnumber,
		PreSchoolsName: schname,
		PreSchoolsAddress: addsch,
		Disabilities: disability,
		Nationality: nation,
		DOB: date,
		Religion: religion,
	  })
	  Data.createData(newData, function(err, data){
		if(err) throw err
		console.log(data)
	  })
	//   req.flash('success', 'Congratulations You are now registered')
	//   res.location('/')
	//   res.redirect('/')
	}
  );

module.exports = router
