var should = require("should"),
	letters = require('../letters.js'),
	trie = require('../trie.js'),
	express = require('express'),
	database = require('../model/db.js');

var app = express();

//testing functions in 'letters'

describe('LetterScoring', function(){

  describe('letterScore', function(){
  	var letterString1 = "asdfghjk";
    it('should return 27', function(){
      should.equal("27", letters.letterScore(letterString1));
	})
	var letterString2 = '90982347(&$(*&$(*&$%'
    it('should return 0', function(){
      should.equal("0", letters.letterScore(letterString2));
	})
   var letterString3 = 'a Y&*888'
    it('should return 5', function(){
      should.equal("5", letters.letterScore(letterString3));
	})
	})
})

describe('LetterSorting', function(){

  describe('letterSort', function(){
  	var sortString1 = "esaemuti";
    it('should return aeeimstu', function(){
      should.equal("aeeimstu", letters.letterSort(sortString1));
	})

 })
})

describe('AnagramFinding', function(){

  describe('anagramsFound', function(){
  	var anagramString1 = "aeeimstu";
    it('should return aeeimstu', function(){
      should.equal("aeeimstu", letters.anagramFind(anagramString1));
	})
 })
})

// testing functions in 'database'

describe('wordFinding', function(){

  describe('wordlist', function(){
  	var testLetters = "aeeimstu";
    it('should return amuse tie', function(){
      should.equal("[amuse, tie]", database.wordlist(testLetters));
	})
	})
})

