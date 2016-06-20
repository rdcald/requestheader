var express = require('express');
var parser = require("ua-parser-js");
var ip = require("ip");
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
    var ipAddress = ip.address();
    var locale = req.headers['accept-language'];
    
    JSON.stringify(ipAddress);
    JSON.stringify(locale);
    JSON.stringify(operatingSystem);
    JSON.stringify(browser);
    
    res.json({
        "ipaddress": ipAddress,
        "language": locale,
        "software": operatingSystem,
        "browser": browser
    });

});
