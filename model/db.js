var mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/words');

var mongoose = require('mongoose'),
 db = mongoose.createConnection('localhost', 'words');
db.on('error', console.error.bind(console, 'connection error:'));

var onErr = function(err,callback){
 mongoose.connection.close();
 callback(err);
};

exports.wordlist = function(letters,callback){
 db.once('open', function(){
 	console.log("got here!");
	var wordSchema = new mongoose.Schema({
		  	hash	  : {type : String, index: true}  
		  , words     : [String]
	});
	var Words = db.model('Words', wordSchema);
	Words.find({'hash':letters}, function (err, words) {
	 	console.log("in find");
	  if(err){
	   onErr(err,callback);
	  }else{
	   console.log(words);
	   callback("",words);
	  }
	 })// end Words.find
});
};

