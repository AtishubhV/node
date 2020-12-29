const express = require('express');
const router = express.Router();
const path = require('path');
const os = require("os");
const mysql = require('mysql');
const utilitis = require('../utility/utility');
const products = [];
var connection = mysql.createConnection({
    host: 'mysqldb.c8zwxcxtn6tj.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'bobobobo',
    database: 'Hogwarts'
});

connection.connect();


router.use('/test', (req, res, next) => {
    res.send('Test');
});
// router.use does not match exact path .get matches the exact path 
router.get('/', (req, res, next) => {
    res.send('Home ' + os.hostname());
});
router.use('/about', (req, res, next) => {
    res.send('About');
});
router.use('/home', (req, res, next) => {
    res.send('Home');
});
router.get('/products', (req, res, next) => {
    connection.query('SELECT * from Students', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.render('Products', { prds: results, hasProducts: true });
        // connection.end();
    });



    //res.sendFile(path.join(utilitis.getCurrentPath,'views','Products.html'));

})
router.use('/add-product', (req, res, next) => {
    res.send("<form method='POST' action='/product'><input name='product' type='text'></input><input value='ADD' type='submit'/></form>");
});
router.post('/products', (req, res, next) => {
    //res.send('Your product '+ req.body.product + ' is added!');
    let { product } = req.body;
    if (product)
        products.push({ prd: product });
    let doesProductsExist = false;
    if (products.length)
        doesProductsExist = true;
    res.render('Products', { prds: products, hasProducts: doesProductsExist });
});
module.exports = {
    router: router,
    port: 3001
}