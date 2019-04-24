var querystring = require('querystring');
var fs = require('fs');

function loadHtml(path, res) {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(path).pipe(res);
}

exports.handleRequest = function(req, res) {
    // console.log(req.url);
    var path = req.url;
    switch(path) {
        case '/':
            res.end("Hello World!");
            break;
        case '/home':
            loadHtml('./pages/home.html', res);
            break;
        case '/about':
            loadHtml('./pages/about.html', res);
            break;
        default:
            res.end("path not found!");    
    }    
}