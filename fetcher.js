const request = require('request');

const fs = require('fs');

request('http://www.example.edu/', (error, response, body) => {
  if (!error) {
    fs.writeFile('./index.html', body, (err) => {
      if (!err) {
        console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
      }
    });
  }
});
