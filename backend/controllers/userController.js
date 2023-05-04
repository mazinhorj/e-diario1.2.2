const { User: UserModel } = require('../models/User');

const userController = {
  add: async (req, res) => {
    try {
      const { name, email, cpf, password, ac_level, stat } = req.body;
      //console.log(req.body);
      await UserModel.create({ name, email, cpf, password, ac_level, stat });
    } catch (error) {

    }
  }
}

module.exports = userController;