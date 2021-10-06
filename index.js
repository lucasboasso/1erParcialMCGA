const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//const router = require('./api/routes');
require('dotenv/config')

const PORT = process.env.PORT || 3030

app.use(cors());
app.use(bodyParser.json());
//Body Parser deprecated ??

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
), (req, res) => {
    console.log('Conectado a la Base de Datos');    
}

app.get('/', (req, res) => {
    res.send('Servidor OK')
});

//app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})