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
    var device = agent.device.type;
    
    var vendor = agent.device.vendor;
    var cpu = agent.cpu.architecture;
    var system = vendor + " " + cpu;
    
    JSON.stringify(operatingSystem);
    JSON.stringify(browser);
    JSON.stringify(device);
    JSON.stringify(system);
    
    res.json({
        "device": device,
        "system": system,
        "browser": browser,
        "software": operatingSystem
    });

});
