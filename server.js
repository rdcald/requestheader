var express = require('express');
var userAgent = require("useragent");
var app = express();

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    var addr = app.address();
    console.log("Chat server listening at", addr.address + ":" + addr.port);
});

app.get("/", function(req, res){
    var agent = userAgent.parse(req.headers['user-agent']);
    var operatingSystem = agent.os.toString();
    var device = agent.device.toString();
    
    res.json({
        "software": device + " " + operatingSystem,  
    });
})
