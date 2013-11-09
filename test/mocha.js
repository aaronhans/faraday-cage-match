var should = require("should"),
	letters = require('../letters.js'),
	express = require('express');

var app = express();

//testing functions in 'letters'

describe('LetterScoring', function(){

  describe('letterScore', function(){
  	letterString1 = "asdfghjk";
    it('should return 27', function(){
      should.equal("27", letters.letterScore(letterString1));
	})
	letterString2 = '90982347(&$(*&$(*&$%'
    it('should return 0', function(){
      should.equal("0", letters.letterScore(letterString2));
	})
   letterString3 = 'a Y&*888'
    it('should return 5', function(){
      should.equal("5", letters.letterScore(letterString3));
	})
	})
})

