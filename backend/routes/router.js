const express = require('express');

const router = express.Router();

// Users router
const usersRouter = require('./users');
router.use("/", usersRouter);





module.exports = router;