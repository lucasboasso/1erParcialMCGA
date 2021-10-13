const mongoose = require('mongoose');
const modeloProducto = require('../models/producto');

const getAllProducts = async (req, res) => {
    try{
        const producto = await modeloProducto.find();
        res.json(producto);
    }
    catch{
        res.json({ message: "error"})
    }
};

const getOneProduct = async (req, res) => {
    try{
        const producto = await modeloProducto.findById(req.params.id);
        res.json(producto);
    }
    catch{
        res.json({ message: "No existe ese producto o no esta cargado"})
    }
};

/* const postProduct = async (req, res) => {
    const producto = new Producto({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        marca: req.body.marca,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        stock: req.body.stock,
    });
    try{
        const dupProduct = await modeloProducto.findOne({codigo: req.body.codigo})
        if (dupProduct == false){
            const saveProducto = await producto.save();
            res.json({saveProducto, message: "Nuevo producto agregado"});        
        }
    }
    catch (error){
        res.json({ message: error})
    }
}; */

const postProduct = async (req, res) => {
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
        res.json({saveProducto, message: "Nuevo producto agregado"});
    }
    catch (error){
        res.json({ message: error})
    }
};

const putProduct = (req, res) => {
    let id = req.params.id
    let update = req.body

    modeloProducto.findByIdAndUpdate(id, update, (err, productoUpdate) => {
        if(err){
            res.status(500).send({message: "No se pudo actualizar el producto"})
        }
        res.status(200).send({producto: productoUpdate, message: "Se actualizo correctamente"})
    })
};

const delProduct = async (req, res) => {
    try{
        const deleteProducto = await modeloProducto.remove({ _id: req.params._id})
        res.json({ message: "Se elimino el producto"})
    }
    catch{
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