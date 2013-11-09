var should = require("should"),
	letters = require('..letters.js'),
	express = require('express');

var app = express();

//testing functions in 'letters'

describe('LetterScoring', function(){

  describe('letterScore', function(){
  	letterString1 = "asdfghjk";
    it('should return 27', function(){
      should.equal("27", letters.letterScore(letterString1));
	})
   //  it('should return a short month, day for m,d', function(){
   //  	should.equal("Jun 18", tools.formatDate('m, d', date));
	  // })
   //  it('should return yyyy/m/dd with any other parameter', function(){
   //  	should.equal("2012/6/18", tools.formatDate('foo', date));
   //  })
	})
})

