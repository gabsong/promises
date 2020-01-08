/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
const http = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, fileData.split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};


// TESTS
pluckFirstLineFromFile('test.txt', (err, firstLine) => { console.log(firstLine) });
getStatusCode('https://www.google.com', (err, data) => {
  if (err) {
    console.log('this is the error ', err);
  } else {
    console.log('THIS IS THE DATA ', data);
  }
});
