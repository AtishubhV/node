const routes = (req,res) =>{
const {method,url} = req;
if(url == '/Home' || url === '/'){
res.write('<h1>Homes sweet home</h1>');
}
else if(url == '/About'){
    res.write('<h1>About</h1>');
}
else if(url == '/Test'){
    res.write('<h1>Test</h1>');
}
res.end();
}
module.exports = {
    routes :routes,
    port: 3001
}
