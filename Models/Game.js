var mongoose = require('mongoose'),
	Player = require('./Player');

var Game = new mongoose.Schema({
	id: mongoose.ObjectId,
	code: String,
	roundCount: Number,
	state: Number,
	players: [Player.id]
})

module.exports(Game);

// game state enum
// 0 = start
// 1 = preRound
// 2 = midRound
// 3 = postRound
// 4 = end