//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');
const routes = require('./route/express-route');
const adminroutes = require('./route/express-admin-route');
const utility = require('./utility/utility');

const app = express();
//This tells which engine to use
app.engine('hbs', expressHbs({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: "views/layouts",
})); // we can use 'handlebars' also
//This sets the view engine
app.set('view engine', 'hbs');
app.set('views', 'views');
//Used to read body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(utility.getCurrentPath, 'public')));

//mysql





app.use(routes.router);
app.use('/admin', adminroutes.router);
app.use((req, res, next) => {
    console.log(utility.getCurrentPath);
    //console.log(path.join(__dirname,"/views","404.html"));

    //res.status(404).sendFile(path.join(utility.getCurrentPath,'views','404.html'));
    res.status(404).render('404', { pageTitle: 'Not Found!!' });

    // res.status(404).sendFile(path.join(__dirname,"views","404.html"));
    // res.status(404).send('Route is not founded!')
    //passes it to next request in pipeline
    //next();
})
app.set('HomeTitle', 'Welcome to my home!');
console.log(app.get('HomeTitle'));
app.listen(routes.port);
// const server = http.createServer(app);
// server.listen(routes.port);
