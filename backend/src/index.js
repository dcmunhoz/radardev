const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect("mongodb+srv://omni:123omni123@cluster0-jiamz.mongodb.net/omnistack10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Métodos HTTP: GET, POST PUT, DELETE

// Query params: request.query  ( Filtros, Ordenação, Paginação, ... );
// Route params: request.params ( Identificar um recurso na alteração ou na remoção );
// Body Params:  request.body   ( Dados para criação ou alteração de um registro ).

// MongoDB ( Não-relacional )

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(routes);

console.clear();
app.listen(3333);
