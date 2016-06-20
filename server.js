var express = require('express');
var parser = require("ua-parser-js");
var app = express();
var port = process.env.PORT;

app.listen(port || 8080, process.env.IP || "0.0.0.0", function(){
    console.log("Header parser server listening at:" + port);
});

app.get("/", function(req, res){
    var agent = parser(req.headers['user-agent']);
    var osName = agent.os.name;
    var osVersion = agent.os.version;
    var operatingSystem = osName + " " + osVersion;
    var browser = agent.browser.name;
    
    JSON.stringify(operatingSystem);
    JSON.stringify(browser);
    
    res.json({
        "browser": browser,
        "software": operatingSystem
    });

});
