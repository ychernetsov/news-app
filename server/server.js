const http = require("http");
const fs = require("fs");

let rawdata = fs.readFileSync('news.json', 'utf8');


const host = 'localhost';
const port = 8000;

const listNews = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case '/news':
            res.writeHead(200);
            res.end(JSON.parse(JSON.stringify(rawdata)))
            break;
        case '/':
            res.writeHead(200);
            res.end('this is home page');
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error: 'No such page'}));
    }
    
};

const server = http.createServer(listNews);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});