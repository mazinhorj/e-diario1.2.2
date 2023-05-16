const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');


router.route("/users/create").post((req, res) => userController.create(req, res));

router.route("/users").get((req, res) => userController.getAll(req, res));

// router.route("/users/:id").get((req, res) => userController.get(req, res));

// router.route("/users/:id").delete((req, res) => userController.delete(req, res));

// router.route("/users/edit/:id").patch((req, res) => userController.update(req, res));


module.exports = router;