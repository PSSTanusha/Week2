var fs = require('fs');
var text="writing using fs module";
    fs.writeFile( 'write.txt',text, (err) => {  
      if (err) throw err;
  });
