var express = require('express'),
    router = express.Router();

var gameController = require('../Controllers/GameController'),
    indexController = require('../Controllers/IndexController')


router.get('/', gameController.game_render_create_get);
router.get('/game/create', gameController.game_render_create_get);
router.post('/game/create', gameController.game_create_post);

router.get('/game/:id/play', gameController.game_render_play);

router.post('/game/:id/delete', gameController.game_delete_post);

router.post('/game/:id/update', gameController.game_delete_post);