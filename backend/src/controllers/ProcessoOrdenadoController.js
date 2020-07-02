const Processo = require('../models/Processo');

module.exports = {
  async index(request, response) {
    let processo = await Processo.find().sort({entry_time: "asc"});

    return response.json(processo);
  }
};