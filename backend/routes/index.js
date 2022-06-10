var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
    res.send({
        image: 'Minecraft Cake',
        url: 'http://localhost:3000/images/Minecraft_Cake.png'
    });
});

module.exports = router;
