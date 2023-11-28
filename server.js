const http = require('http');

const server = http.createServer((req, res) => {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello Node!!!!</h1>\n');
    res.end();
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});

const fs = require('fs');

const filePath = 'welcome.txt';

// Read the contents of the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file ${filePath}:`, err);
    } else {
        console.log('File contents:');
        console.log(data);
    }
});