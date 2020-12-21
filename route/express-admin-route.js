const express = require('express');
const router = express.Router();
router.use('/test',(req,res,next)=>{
res.send('Test');
});
// router.use does not match exact path .get matches the exact path 
router.get('/',(req,res,next)=>{
    res.send('Admin- Home');
    });
router.use('/about',(req,res,next)=>{
  res.send('Admin- About'); 
});
router.use('/home',(req,res,next)=>{
   res.send('Admin-Home');
})
router.use('/add-product',(req,res,next)=>{
    res.send("<form method='POST' action='/product'><input name='product' type='text'></input><input value='ADD' type='submit'/></form>");
});
router.post('/product',(req,res,next)=>{
res.send('Your product '+ req.body.product + ' is added!');
});
module.exports = {
    router :router,
    port: 3001
}