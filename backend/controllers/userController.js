const User = require('../models/User');

const userController = {
  create: async (req, res) => {
    try {
      const { name, email, cpf, password, ac_level, stat } = req.body;
      await User.create({ name, email, cpf, password, ac_level, stat })
        // .then(res.staus(201).jason({ msg: 'Usuário cadastrado com sucesso!' }));
        console.log(req.body);
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = userController;