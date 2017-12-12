let express = require('express');
let path = require('path');


module.exports = function route(app){
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    })
    app.get('/*', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    })
}
