const ifaces = require('os').networkInterfaces();
fs = require('fs');

let address;
//Get Host IP
Object.keys(ifaces).forEach(dev => {
    ifaces[dev].filter(details => {
        if (details.family === 'IPv4' && details.internal === false) {
            address = details.address;
        }   
    }); 
});


//print & save log at every 1s
let i = 0;
let timerId = setInterval(() => {
	console.log('[' + address +'] '+ 'Hello World ' + i); 
	fs.appendFileSync('logs/helloWorldPeriodic.log', i + '\n')
	i++;
}, 1000);
