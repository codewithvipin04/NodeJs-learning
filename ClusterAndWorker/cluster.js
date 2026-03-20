const cluster = require('node:cluster');
const http = require('node:http');
const OS = require('node:os');

console.log('How many workers i can create:', OS.cpus().length);

if(cluster.isPrimary) {
  console.log(`master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
    console.log(`worker process ${process.pid} is running`);
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
}