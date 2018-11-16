var fs = require('fs');

function Readappend(file,appendfile)
{
    fs.readFile(appendfile, function (err_file, buffer)
    {
      if (err_file) return console.error(err_file);

      fs.appendFile(file,buffer,function(err_file)
      {
          if(err_file) return console.error(err_file);
      });

    });
}

//Even if we call the function in a specific order the output will not be in the same order as it is asynchronous reading
file='./input.txt';
appendfile='./File1.txt';
Readappend(file,appendfile);
appendfile='./File2.txt';
Readappend(file,appendfile);
appendfile='./File3.txt';
Readappend(file,appendfile);
