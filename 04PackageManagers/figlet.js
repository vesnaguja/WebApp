// Figlet

var figlet = require('figlet');
 
figlet('Vesna Guja', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
