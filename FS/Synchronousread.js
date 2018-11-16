var fs = require('fs');

console.log("Synchronous way");
var data = fs.readFileSync('File1.txt');
 console.log(data.toString());

 var data = fs.readFileSync('File2.txt');
 console.log(data.toString());

 var data = fs.readFileSync('File3.txt');
 console.log( data.toString());

output:
C:\Users\tanus\.vscode\extensions>node sync.js
Synchronous way

Starting 1st File

File1---file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1---
---file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1---
---file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1---
---file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1---
---file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1------file1---
---file1------file1------file1------file1------file1------file1---


End of 1st file

Starting 2nd file

---file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2---
---file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2---
---file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2---
---file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2---
---file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2---
---file2------file2------file2------file2------file2------file2------file2------file2------file2------file2------file2---
---file2------file2------file2------file2------file2------file2------file2---

End of 2nd file

Starting 3rd File

---file3------file3------file3------file3------file3------file3------file3------file3------file3------file3------file3------file3------file3---
---file3------file3------file3------file3------file3------file3------file3------file3------file3------file3------file3------file3------file3---
---file3------file3------file3---

End of 3rd file
