var fs = require('fs');
//Using promises and callbacks
function promise_fun(file,appendfile)
{
    //creating a new promise
 let promise1=new Promise((resolve,reject)=>
 {
    fs.readFile(appendfile, function (err, data)
    {
        if (err)
        {
            console.log(err);
        } 
        resolve(data.toString());
    });
 });
//then() for resolving
 promise1.then((res)=>{
    fs.appendFile(file,res,function(err_file)
    {
        if(err_file) return console.log(err_file);
    });
 });
}

file='./output_promise.txt';
appendfile='./File1.txt';
promise_fun(file,appendfile);
appendfile='./File2.txt';
promise_fun(file,appendfile);
appendfile='./File3.txt';
promise_fun(file,appendfile);
