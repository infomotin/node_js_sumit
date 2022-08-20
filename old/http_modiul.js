const _http = require('http');
const server = _http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('This is my Home Page');
        res.end();
    }
    else if (req.url === '/about') {
        res.write("Hrllo About");
        res.end();
    } 
    else {
        res.write('404 Not Found');
        res.end();
    }
    
});
// server.on('connection', (socket) => { 
//     console.log('a new connection was made');
// });
server.listen(3001);
console.log('Server is running on port 3001');