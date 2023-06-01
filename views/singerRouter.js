
const router = require('express').Router();
const singerController = require('../controllers/singerController');

router.get('/profile', singerController.getProfile);



module.exports = router;