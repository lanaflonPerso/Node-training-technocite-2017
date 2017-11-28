const express = require('express');
const hbs = require('express-hbs');
const path = require('path');
const promisify = require('es6-promisify');
const routes = require('./routes/index');
const helpers = require('./helpers');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const errorHandlers = require('./handlers/errorHandlers');
const expressValidator = require('express-validator');
const sessionStore = new session.MemoryStore;
const passport = require('passport');
const mongoose = require('mongoose')
const User = mongoose.model('User');
// create our Express app
const app = express();

// view engine setup
app.engine('hbs', hbs.express4({
    partialsDir: [`${__dirname}/views/partials`],
    defaultLayout: `${__dirname}/views/layouts/main.hbs`
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

helpers.registerHelpers(hbs);
// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

// Take the raw requests and turn them into usable properties of req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Validation engine
app.use(expressValidator());

// Cookie management
app.use(cookieParser('secret'));
// Session management

app.use(session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}));
// Init passport
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());
// Flash message management
app.use(flash());

app.use((req, res, next) => {
    res.locals.flash = req.session.flash;
    delete req.session.flash;
    next();
})
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
    /* Development Error Handler - Prints stack trace */
    app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app;