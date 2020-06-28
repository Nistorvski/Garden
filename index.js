'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 8077;
var appex = require('express');

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/garden', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>{
        console.log("Conexión a la base de datos establecida con exito..¡!");

        //settings 
        appex.set(port, process.env.PORT || 3000);

        //Crear el servidor
        app.listen(port, ()=>{
            console.log("EL servidor corriendo en localhost: 8077...¡!");
        })

    }).catch(error => {
        console.log(error);
    });
