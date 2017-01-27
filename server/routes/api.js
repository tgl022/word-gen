'use strict';

var express     = require('express');
var wordOut = 'errOut';

function createWord(type) {
  //var child = child_process.spawn('java', ['Main', 'boy'], ['stdio']);
 var child = require('child_process').spawn('java', ['Main', type]);
 var newWord = 'errIn';

 child.stdout.on('data', (data) => {
    //console.log(data.toString());
    wordOut = data.toString();
  });

  newWord = wordOut;
  return newWord;
}

module.exports = function(app) {

  //Get a User
  app.get('/api/girl', (req, res) => {
    var word = { word: 'girl' }
    word.word = createWord('girl');
    res.json(word);
  });

  app.get('/api/boy', (req, res) => {
    var word = { word: 'boy' }
    word.word = createWord('boy');
    res.json(word);
  });


  app.get('/api/slang', (req, res) => {
    var word = { word: 'slang' }
    // word.word = createWord('slang');
    res.json(word);
  });

  app.get('/api/smart', (req, res) => {
    var word = { word: 'smart' }
    // word.word = createWord('smart');
    res.json(word);
  });

  //CATCH ALL
  app.get("*", function(req, res) {
    // Angular will handle the page changes on front-end
    res.sendFile('index.html', {'root': './'});
  });


  // Use your model on the others routes
};
