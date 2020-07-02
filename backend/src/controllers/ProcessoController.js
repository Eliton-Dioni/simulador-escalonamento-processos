const Processo = require('../models/Processo');

module.exports = {
  async index(request, response) {
    const processos = await Processo.find();

    return response.json(processos);
  },

  async store(request, response) {
    const { name, entry_time, duration, quantum, priority} = request.body;

    let processo = await Processo.findOne({ name });

    if (!processo) {
      processo = await Processo.create({
        name,
        entry_time,
        duration,
        quantum,
        priority
      })  
    }
  
    return response.json(processo);
  },

  async destroy(request, response) {
    const { _id } = request.params;
    
    const processo = await Processo.findByIdAndDelete(_id);
  
    if (!processo) {
      return response.status(404).json({
        error: 'Process not found'
      });
    }
    
    return response.json({
      succeeded: 'Process deleted'
    });
  }
};