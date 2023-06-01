const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello World\n');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('About Page\n');
  } else {
    res.statusCode = 404;
    res.end(`<h1>${req.url} doesn't exist</h1><br><a href="/">Home</a>`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
