const User = require('../models/User');

const userController = {

  create: async (req, res) => {
    const { name, email, cpf, password, ac_level, stat } = req.body;

    // validações

    // gravar usuario no banco
    try {
      const user = await User.create({ name, email, cpf, password, ac_level, stat })
      res.status(201).json({ msg: 'Usuário cadastrado com sucesso!', user});
      console.log(user);
    } catch (error) {
      console.log(error)
    }

  }, // fim create

  getAll: async (req, res) => {
    try {
      const users = await User.findAll()
      res.status(200).json( {users} )
    } catch (error) {
      console.log(error)
    }
  }
}



module.exports = userController;