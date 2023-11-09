const express = require('express');
const router= express.Router();
const path = require('path');
const rootDir = require('../util/path');
const contactusController = require('../controllers/contactus');
const successController = require('../controllers/success');

router.use('/contactus',contactusController.getContact);
router.use('/success',successController.getSuccess);




module.exports = router

