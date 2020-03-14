var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(4400, function(){
    console.log('Server running on port 4400. http://localhost:4400/');
});

