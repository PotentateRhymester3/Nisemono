var mongoose = require('mongoose'),
	Game = require('./Game')

var Player = new mongoose.Schema({
	id: mongoose.ObjectId,
	gameId: Game.id,
	username: String,
	score: Number,
	isNisemono: Boolean
})

module.exports(Player);