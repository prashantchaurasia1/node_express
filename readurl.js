const express = require('express');
const route = express.Router();
const fs = require('fs');

// creating route to listen /Details 
route.get('/Details', ( req, res, next ) => {
    res.locals.paramFromReq = "This text is from middlewear";  
    next();
}, ( req, res ) => {
    console.log(res.locals.paramFromReq);
    res.status(200).send("Inside Details Page and the text '" + res.locals.paramFromReq + "'");
});


// creating route to listen /Details 
route.get('/About', ( req, res, next ) => {
    next();
},( req, res, next ) => {
    readFile( "about.txt" , "./text_file/" ).then( ( data ) => {
        res.status(200).send(data);
    }).catch( (e) => {
        console.log(e)
    })
})

// creating route to listen /Menu 
route.get('/Menu', ( req, res, next ) => {
    res.send("Inside Menu Page");
});

// creating route to listen /Appreciation 
route.get('/Appreciation', ( req, res, next ) => {
    res.send("Inside Appreciation Page");
});

// creating route to listen /User 
route.get('/User', ( req, res, next ) => {
    res.send("Inside User Page");
});

// fuucntion to read async file
function readFile( _fileName, path ) {
    return new Promise( ( res, rej ) => {
        fs.readFile( path + _fileName, 'utf8', function(err, data) {
            res(data);
            if (err) {
                throw err
            };
        });
    })
}


module.exports = route;