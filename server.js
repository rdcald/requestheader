var express = require('express');
var userAgent = require("useragent");
var app = express();
var port = process.env.PORT;

app.listen(port || 8080, process.env.IP || "0.0.0.0", function(){
    console.log("Header parser server listening at:" + port);
});

app.get("/", function(req, res){
    var agent = userAgent.parse(req.headers['user-agent']);
    var operatingSystem = agent.os.toString();
    res.json({
        "software": operatingSystem  
    });
})
