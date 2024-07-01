const express = require('express');
const { getProducts } = require('../conrollers/productController');
const router = express.Router();

router.route('/products').get(getProducts);






module.exports = router;