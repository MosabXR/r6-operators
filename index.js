// Core Modules
const http = require('http');
const url = require('url');
const fs = require('fs');

// Custom Modules
const replaceTemplate = require('./modules/replaceTemplate');

// Templates
const overviewTemplate = fs.readFileSync(
  './templates/overview-template.html',
  'utf-8'
);
const operatorTemplate = fs.readFileSync(
  './templates/operator-template.html',
  'utf-8'
);
const cardTemplate = fs.readFileSync('./templates/card-template.html', 'utf-8');

// Data
const data = fs.readFileSync('./data/data.json', 'utf-8');
const parsedData = JSON.parse(data);

// Server
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  // Overview
  if (pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cards = parsedData
      .map((el) => replaceTemplate(cardTemplate, el))
      .join('');
    const output = overviewTemplate.replace(/{%CARDS%}/g, cards);
    res.end(output);

    // Operator?id=X
  } else if (
    pathname === '/operator' &&
    query.id &&
    query.id < parsedData.length
  ) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const { id } = query;
    const output = replaceTemplate(operatorTemplate, parsedData[id]);
    res.end(output);

    // Not Found
  } else {
    res.writeHead(404);
    res.end('Error 404 not found!');
  }
});

// Listener
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to port 8000');
});
