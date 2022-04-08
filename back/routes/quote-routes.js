const { addQuote } = require('../controllers/quoteControllers');
const { check,body } = require('express-validator');

express = require('express');
const router = express.Router();

router.post("/addQuote",[check("test","my message").isEmail(),check("pass").isLength({ min: 5 })],addQuote);

module.exports = router