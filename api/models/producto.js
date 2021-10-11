const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Producto = new Schema({
    codigo:{
        type: Number,
        required: true,
    },
    nombre:{
        type: String,
        required: true,
    },
    marca:{
        type: String,
        required: true,
    },
    precio:{
        type: Number,
        required: true,
    },
    descripcion:{
        type: String,
        required: false,
    },
    stock:{
        type: Number,
        required: true,
    }
});

const producto = mongoose.model("Producto", Producto);
module.exports = producto;