const { singer } = require('../models');

const singerController = {};

singerController.getProfile = async (req, res) => {

    res.send("Esta api está funcionando correctamente, el endpoint devuelve algo...");

}

module.exports = singerController;