var fs = require('fs'),
	catPicture = require('cat-picture'),
	polyImage = require('lightning-image-poly'),
	electronRemote = require('electron').remote,
	src = catPicture.src,
	viz = new polyImage('#visualization', null, [src], {hullAlgorithm: 'convex'});

     catPicture.remove();

     function save () {
            electronRemote.getCurrentWindow().webContents.printToPDF({
              portrait: true
            }, function (err, data) {
              fs.writeFile('annotation.pdf', data, function (err) {
                if (err) alert('error generating pdf! ' + err.message)
                else alert('pdf saved!')
              })
            })
          }
          window.addEventListener('keydown', function (e) {
                 if (e.keyCode == 80) save()
               })