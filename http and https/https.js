const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

output:
C:\Users\tanus\.vscode\extensions>node https.js
Last Sunday when the Moon was young its sunlit crescent hung low near the western horizon at sunset. With strong earthshine it was joined 
by Saturn shining in the early evening sky for a beautiful conjunction visible to skygazers around our fair planet. On that clear evening 
on a hill near Veszprem, Hungary mother, daughter, bright planet, and young Moon are framed in this quiet night skyscape taken with a 
telephoto lens. Of course the Moon ages too quickly for some, and by tonight the sunlit part has reached its first quarter phase.
This weekend skygazers spending quality time under Moon and stars might expect to see the annual rain of comet dust otherwise known as 
the Leonid meteor shower.   How to: Photograph the Leonid Meteor Shower
