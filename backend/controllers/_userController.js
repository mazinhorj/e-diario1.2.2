const User = require('../models/User');
const bcrypt = require('bcryptjs')

module.exports = class userController {

  static register(req, res) {
    res.render('users/register')
  }

  static async registerPost(req, res) {
    const { name, email, password, confirmpassword, cpf, ac_level, stat } = req.body

    //validação de senha
    if (password != confirmpassword) {
      req.flash('message', "As senhas não conferem! Tente novavmente.")
      res.render('users/register')
      return
    }

    //validar usuario existente
    const checkIfUserExists = await User.findOne({ where: { email: email } })
    if (checkIfUserExists) {
      req.flash('message', "E-mail já registrado.")
      res.render('users/register')
      return
    }
    
    //validar usuario existente
    const checkIfUserCpfExists = await User.findOne({ where: { cpf: cpf } })
    if (checkIfUserCpfExists) {
      req.flash('message', "CPF já registrado.")
      res.render('users/register')
      return
    }

    //criar senha
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = {
      name,
      email,
      password: hashedPassword,
      cpf,
      ac_level,
      stat
    }

    try {
      const createdUser = await User.create(user)

      //inicializar sessão
      req.session.userid = createdUser.id

      req.flash('message', "Registro efetuado com sucesso!")

      req.session.save(() => {
        res.redirect('/')
      })
    } catch (err) {
      console.log(err)
    }
  }


  // inserir dados no banco
  // create: async (req, res) => {
  //   try {
  //     const user = {
  //       name: req.body.name,
  //       email: req.body.email,
  //       password: req.body.password,
  //       cpf: req.body.cpf,
  //       ac_level: req.body.ac_level,
  //       stat: req.body.stat,
  //     };
  //     const response = await UserModel.create(user);
  //     res.status(201).json({ response, msg: "Usuário cadastrado com sucesso!" });
  //   } catch (error) {
  //     console.log(`Erro ao cadastrar usuário: ${error}`);
  //   };
  // },

  // // resgatar todos os dados
  // getAll: async (req, res) => {
  //   try {
  //     const services = await ServiceModel.find();
  //     res.json(services);
  //   } catch (error) {
  //     console.log(`Xiiii... Não sei de nada: ${error}`)
  //   };
  // },

  // // resgatar com filtro
  // get: async (req, res) => {
  //   try {
  //     // id => URL === GET
  //     const id = req.params.id
  //     const service = await ServiceModel.findById(id);
  //     if (!service) {
  //       res.status(404).json({ msg: "Não achei o que você procura" });
  //       return;
  //     };
  //     res.json(service);
  //   } catch (error) {
  //     console.log(`Xiiii... Tem certeza: ${error}`)
  //   };
  // },

  // // deletar do banco
  // delete: async (req, res) => {
  //   try {
  //     const id = req.params.id
  //     const service = await ServiceModel.findById(id);
  //     if (!service) {
  //       res.status(404).json({ msg: "Não achei o que você procura para deletar" });
  //       return;
  //     };
  //     const deleteService = await ServiceModel.findByIdAndDelete(id);
  //     res.status(200).json({ deleteService, msg: "Serviço excluído com sucesso" });
  //   } catch (error) {
  //     console.log(`Xiiii... Não apagou: ${error}`)
  //   };
  // },

  // // atualizar registro
  // update: async (req, res) => {
  //   const id = req.params.id
  //   const service = {
  //     name: req.body.name,
  //     description: req.body.description,
  //     price: req.body.price,
  //     image: req.body.image,
  //   };
  //   const updatedService = await ServiceModel.findByIdAndUpdate(id, service);
  //   if (!updatedService) {
  //     res.status(404).json({ msg: "Não achei o que você procura para editar" });
  //     return;
  //   };
  //   res.status(200).json({ service, msg: "Atualizado com sucesso" });
  // }
};

// module.exports = userController;