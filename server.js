var express = require('express');
var parser = require("ua-parser-js");
var app = express();
var port = process.env.PORT;

app.listen(port || 8080, process.env.IP || "0.0.0.0", function(){
    console.log("Header parser server listening at:" + port);
});

app.get("/", function(req, res){
    var agent = parser(req.headers['user-agent']);

    res.end(JSON.stringify(agent, null, ''));

});
