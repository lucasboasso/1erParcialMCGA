const express = require('express');
const router = express.Router();
const {getOneProduct, getAllProducts, postProduct, putProduct, delProduct} = require('../../controllers/producto')

router.get('/', getAllProducts);
router.post('/', postProduct);
router.get('/:id', getOneProduct);
router.put('/:id', putProduct);
router.delete('/:id', delProduct);

module.exports = router;
