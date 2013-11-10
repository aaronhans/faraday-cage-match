var mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/words');

var mongoose = require('mongoose'),
 db = mongoose.createConnection('localhost', 'test');
db.on('error', console.error.bind(console, 'connection error:'));

var onErr = function(err,callback){
 mongoose.connection.close();
 callback(err);
};

exports.wordlist = function(letters,callback){
	console.log("inside function!");
	console.log(letters);
 db.once('open', function(){
 	console.log("db.js: got here!");
	var wordSchema = new mongoose.Schema({
		  	hash	  : {type : String, index: true}  
		  , words     : [String]
	});
	var Words = db.model('Words', wordSchema);
	// Words.find({'hash':letters}, function (err, words) {
	//  	console.log("in find");
	//   if(err){
	//    onErr(err,callback);
	//   }else{
	//    console.log(words);
	//    callback("",words);
	//   }
	//  })// end Words.find
 	Words.find({ hash : letters}).exec(callback);
 	var query = Words.findOne({'hash': letters});
 	query.exec(function (err, words){
 		console.log('%s has %s.', words.hash, words.words); 
 	});
 	Words.findOne({ 'hash': letters }, 'words', function (err, words) {
 		console.log("findone: got here!");
  		if (err) return handleError(err);
  		console.log('%s has %s.', words.hash, words.words); 
})
});
 return(words.words);
 db.close();
};

