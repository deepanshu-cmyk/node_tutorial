const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request received');
    res.end('Hello, World!');

    if (req.url === '/error') {
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});

const PORT = 4000

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});