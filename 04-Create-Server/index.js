const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    if(url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>Hellou There</h1>');
    }
    else if(url === '/about'){
        res.write('About page');
    }
    else if(url === '/contact'){
        res.write('Contact page');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('404 Not Found');
    }
    res.end();
});


const port = 3000;
server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
