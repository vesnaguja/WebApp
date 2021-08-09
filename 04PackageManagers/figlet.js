// Figlet

var figlet = require('figlet');
 
// figlet('Vesna Guja', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

const printItalicRight = text => {
    figlet.text(text, {
        font: 'Small Slant',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
}


const printItalicLeft = text => {
    figlet.text(text, {
        font: 'Sub-Zero',
        horizontalLayout: 'fitted',
        verticalLayout: 'default',
        width: 200,
        whitespaceBreak: true
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
}


const text = 'Hello World';
printItalicRight(text);
printItalicLeft(text);