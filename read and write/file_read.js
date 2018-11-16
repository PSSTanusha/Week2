var fs = require('fs');
fs.readFile('read.txt', function (err_file, buffer)
 {
   if (err_file) return console.error(err_file);
   console.log(buffer.toString());
});

output:
C:\Users\tanus\.vscode\extensions>node week2_node.js
Reading file through fs module
