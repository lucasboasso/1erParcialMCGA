const mongoose = require('mongoose');
const modeloProducto = require('../models/producto');

const getAllProducts = async (req, res) => {
    try{
        const producto = await modeloProducto.find();
        res.json(producto);
    }
    catch{
        res.json({ message: "No existe ningun producto cargado"})
    }
};

const getOneProduct = async (req, res) => {
    try{
        const producto = await modeloProducto.findById(req.params.id);
        res.json(producto);
    }
    catch{
        res.status(404).send({ message: "No existe ese producto o no esta cargado"})
    }
};

const postProduct = async (req, res) => {
    const producto = new modeloProducto({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        marca: req.body.marca,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        stock: req.body.stock,
    });
    try{
        const saveProducto = await producto.save();
        res.json({saveProducto, message: "Nuevo producto agregado"});
    }
    catch (error){
        res.json({ message: "No se pudo agregar el producto" })
        console.log(error)
    }
};

const putProduct = (req, res) => {
    const id = req.params.id
    const update = req.body

    modeloProducto.findByIdAndUpdate(id, update, {new: true}, (err, productoUpdate) => {
        if(err){
            res.status(500).send({message: "No se pudo actualizar el producto"})
        }
        res.status(200).send({producto: productoUpdate, message: "Se actualizo correctamente"})
    })
};

const delProduct = async (req, res) => {
    try{
        await modeloProducto.findByIdAndDelete(req.params.id)
        res.json({ message: "Se elimino el producto"})
    }
    catch (error){
        res.json({ message: "No se elimino ningun producto"})
    }
};

module.exports = {
    getAllProducts,
    getOneProduct,
    postProduct,
    putProduct,
    delProduct,
};