const router = require('express').Router();

const singerRoutes = require('./views/singerRouter');

router.use('/singer', singerRoutes);

module.exports = router;