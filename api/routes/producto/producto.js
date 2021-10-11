const express = require('express');
const router = express.Router();
const Producto = require('../../models/producto');

router.get('/', async (req, res) => {
    try{
        const producto = await Producto.find();
        res.json(producto);
    }
    catch{
        res.json({ message: error})
    }
});

router.get('/:_id', async (req, res) => {
    try{
        const producto = await Producto.findById(req.params._id);
        res.json(producto);
    }
    catch{
        res.json({ message: "No existe ese producto o no esta cargado"})
    }
});

router.post('/', async (req, res) => {
    const producto = new Producto({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        marca: req.body.marca,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        stock: req.body.stock,
    });
    try{
        const saveProducto = await producto.save();
        res.json(saveProducto);
    }
    catch (error){
        res.json({ message: error})
    }
});

router.put('/:_id', (req, res) => {
    let id = req.params._id
    let update = req.body

    Producto.findByIdAndUpdate(id, update, (err, productoUpdate) => {
        if(err){
            res.status(500).send({message: "No se pudo actualizar el producto"})
        }
        res.status(200).send({producto: productoUpdate})
    })
})

router.delete('/:_id', async (req, res) => {
    try{
        const deleteProducto = await Producto.remove({ _id: req.params._id})
        res.json({ message: "Se elimino el producto"})
    }
    catch{
        res.json({ message: "No se elimino ningun producto"})
    }
})

module.exports = router;
