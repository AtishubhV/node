const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
// res.write('Hello World');
const body = [];
res.setHeader('Content-Type','text/html');
res.write('<h1>Hello World</h1>');
const {url,method}= req;
req.on('data',(chunk)=>{
body.push(chunk);
})
req.on('end',()=>{
    const message = Buffer.concat(body).toString();
    if(message)
    //fs.writeFileSync('message.txt',message);
    fs.writeFile('message.txt',message, ()=>{

    }) 
})
if(url==='/message'){
    res.write('<h2>Welcome !!!</h2>');
    res.write("<form action='/addmsg' method='POST'><input name='message' type='text' value=''><input type='submit' value='ADD'></form>")
}
else if (url==='/addmsg' && method == 'POST'){
    res.write('<h3>Added !!!</h2>');
}
res.end();
})
server.listen(1000);