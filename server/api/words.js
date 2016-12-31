//default string
var word = 'err';

function getWords(req, res) {
  var words = {
    boyWord: 'not boy'
  }

  var child = require('child_process').spawn('java', ['Main', 'boy']
  ,{ cwd: '/server/api/wordgen'
     //env: process.env + '/server/api/wordgen'
   }
  );
  child.stdout.on('data', (data) => {
     //console.log(data.toString());
     word = data.toString();
   });

  words.boyWord = word;
  res.json(words);
}

function createWord(type) {
  //var child = child_process.spawn('java', ['Main', 'boy'], ['stdio']);
 var child = require('child_process').spawn('java', ['Main', 'boy']);

 child.stdout.on('data', (data) => {
    //console.log(data.toString());
    word = data.toString();
  });
}

module.exports = getWords;
