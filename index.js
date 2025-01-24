// Import the 'http' module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1'; // localhost
const port = 3000;           // Port number

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200; // HTTP status code
  res.setHeader('Content-Type', 'text/plain'); // Response content type

  // Send a response
  res.end('Hello, World! Welcome to my Node.js server!');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

