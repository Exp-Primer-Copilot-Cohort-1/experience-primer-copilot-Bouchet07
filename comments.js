// Create web server
// Usage: node comments.js
// Note: Make sure you have Node.js installed

// Load the http module to create an http server.
var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    var comment = query.comment;

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "Hello World"
    response.end('Your comment: ' + comment);
});

// Listen on port 8000, IP defaults to