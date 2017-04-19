var net = require('net'),
    portNumber = process.argv[2],
    date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,     // starts at 0
    day = date.getDate(),      // returns the day of month
    hour = date.getHours(),
    minutes = date.getMinutes();

if (month < 10) {
    month = '0' + month;
};

if (day < 10) {
    day = '0' + day;
};

date = year + "-" + month + "-" + day + " " + hour + ":" + minutes; //"YYYY-MM-DD hh:mm"

     var server = net.createServer(function(socket) {
       // socket handling logic
         socket.end(date + "\n");
     });

server.listen(portNumber);

