var fs = require('fs');

console.log("Synchronous way");
var data = fs.readFileSync('File1.txt');
 console.log(data.toString());

 var data = fs.readFileSync('File2.txt');
 console.log(data.toString());

 var data = fs.readFileSync('File3.txt');
 console.log( data.toString());
