var Game = require('../models/Game');

//// CRUD  Functions //////

//Create Game - POST
exports.game_create_post = function (req, res) {
    res.send('not yet implemented');
}

//Render Game Create - GET
exports.game_render_create_get = function (req, res) {
    res.render('../Views/Game/create');
}

//Render Game Create - GET
exports.game_render_create_get = function (req, res) {
    res.render('../Views/Game/{id}/lobby');
}

//Render Game Play - GET
exports.game_render_play = function (req, res) {
    res.render('../Views/Game/{id}/play');
}


//Update Game - POST
exports.game_update_post = function (req, res) {
    res.send('not yet implemented')
}

//Delete Game - POST
exports.game_delete_post = function (req, res) {
    res.send('not yet implemented');
}


///// Game logic Functions //////

//Add Player
function addPlayer(gameId, playerId) {
    Game.update(
        { id: gameId },
        {}
    )
}

//Change State
function changeState(gameId, newState) {
    Game.update(
        { id: gameId},
        { 'state': newState},
        callback
    )
}

//GivePoints

//Assign Roles

//End Game