//Rutas para productos
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// api/Productos
router.post('/', productoController.createProducto);
router.put('/:id', productoController.updateProducto);
router.delete('/:id', productoController.deleteProducto);
router.get('/', productoController.obtenerProductos);
router.get('/:id', productoController.obtenerProducto);

module.exports = router;