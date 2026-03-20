const http = require('node:http');

// pmw start noCluster.js -i 0 => command to run in cluster mode

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {"Content-Type": 'text/plain'});
        res.end('Hello world !!');
    }else if(req.url === '/slow-page') {
        for(let i=0; i<6000000000; i++) {}
        res.writeHead(200, {"Content-Type": 'text/plain'});
        res.end('Slow Page');
    }
});
server.listen(8000, () => console.log('Server is running on 8000 port.'));