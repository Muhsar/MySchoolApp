// Full Documentation - https://www.turbo360.co/docs
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})

const app = vertex.express() // initialize app
const passport = require('passport')

/*  
	Apps can also be initialized with config options as shown in the commented out example below. Options
	include setting views directory, static assets directory, and database settings. To see default config
	settings, view here: https://www.turbo360.co/docs 

const config = {
	views: 'views', 		// Set views directory 
	static: 'public', 		// Set static assets directory
	db: { 					// Database configuration. Remember to set env variables in .env file: MONGODB_URI, PROD_MONGODB_URI
		url: (process.env.TURBO_ENV == 'dev') ? process.env.MONGODB_URI : process.env.PROD_MONGODB_URI,
		type: 'mongo',
		onError: (err) => {
			console.log('DB Connection Failed!')
		},
		onSuccess: () => {
			console.log('DB Successfully Connected!')
		}
	}
}

const app = vertex.app(config) // initialize app with config options

*/


// import routes
const index = require('./routes/index')
const users = require('./routes/users')
const api = require('./routes/api')
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
// var passport = require('passport')
var localStrategy = require('passport-local').Strategy
var expressValidator = require('express-validator')
var multer = require('multer')
var upload = multer({dest:'./uploads'})
var flash = require('connect-flash')
var bcrypt = require('bcryptjs')
var mongo = require('mongodb')
var mongoose = require('mongoose')
var db = mongoose.connection
mongoose.Promise = global.Promise
// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes
app.use(flash())

app.use((req, res, next)=>{
	res.locals.flashes = req.flash()
	next()
})
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret:'secret',
    saveUninitialized: true,
    resave: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(expressValidator({
    errorFormatter: function(param, msg, value){
        var namespace =param.split('.')
        , root = namespace.shift()
        , formParam = root
        while(namespace.length) {
            formParam += '[' + namespace.shift()
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        }
    }
}))
app.use(function (req, res, next){
    res.locals.messages = require('express-messages')(req, res)
    next()
})
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('view engine', 'ejs');
// app.set('view engine', 'pug')
// require('./models/data')
module.exports = app