var http = require('http');
    bl = require('bl');
    results = [];
    count = 0;

function urls() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}

function httpGet(index) {
    
    var url = process.argv[2 + index];
    
    http.get(url, function(response) {
        response.pipe(bl(function(err, data) {
            if (err)
                return console.error(err)
            
            results[index] = data.toString()
            count++
            
            if (count == 3)
                urls()
        }))
    })
}

for (var i = 0; i < 3; i++)
    httpGet(i)

