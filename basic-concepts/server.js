const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    const superHero = {
        name: "Virat",
        Surname: "Kohli"
    }

    const name = 'Vipin';

    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end(JSON.stringify(superHero));

    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end(JSON.stringify(superHero));

    res.writeHead(200, {'Content-Type': 'text/html'});

    let html = fs.readFileSync('./index.html', 'utf-8');
    html = html.replace("{{name}}", name);
    res.end(html);

    // or 

    // fs.createReadStream(__dirname + "/index.html").pipe(res);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});