var mongoose = require('mongoose');


exports.wordlist = function wordlist(letters,callback){
 var Words = mongoose.model( 'Words' );
 Words.find({'hash':letters}, function (err, words) {
  if(err){
   console.log(err);
  }else{
   console.log(words);
   callback("",words);
  }
 })// end Words.find
}// end exports.wordlist
