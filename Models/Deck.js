var mongoose = require('mongoose');

var Deck = new mongoose.Schema({
	id: mongoose.ObjectId,
	title: String,
	word1: String,
	word2: String,
	word3: String,
	word4: String,
	word5: String,
	word6: String,
	word7: String,
	word8: String,
	word9: String,
	word10: String,
	word11: String,
	word12: String
})

module.exports(Deck);