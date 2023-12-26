const http = require('http');

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World!');
})

const PORT = process.env.PORT || 2277;
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);

