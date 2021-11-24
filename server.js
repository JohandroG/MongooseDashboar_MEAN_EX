const { render } = require('ejs');
const express = require('express');
require('./server/config/database');
const {AnimalRouter} = require( './server/routes/animalsRoute' );

const app = express();

app.set( 'views', __dirname + '/client/views' );
app.set( 'view engine', 'ejs' );
app.use( express.urlencoded({extended:true}) );
app.use( '', AnimalRouter );

app.listen( 8080, function(){
    console.log( "The users server is running in port 8080." );
});

