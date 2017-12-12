let express = require('express');
let path = require('path');
let friends = require('../data/friends.js');
var fs = require('fs');
let bodyParser = require('body-parser');


module.exports = function route(app){
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.post('/api/friends', function(req, res){
        let user = {};
        user = req.body;
        user.scores = user['scores[]'];
        let match = findMatch(user);
        friends.push(user);
        res.send(match);
    })

    app.get('/api/friends', function(req, res){
        res.send(friends);
    })
}

// function updateFriends(){
//     console.log(friends)
//     fs.writeFile(path.join(__dirname + "/../data/friends.js"), friends, function(err) {
//     if(err) {
//         return console.log(err);
//     }
// }); 
// }

function findMatch(user){
    let topScore = 1000;
    let match = {};

    for(let i = 0; i < friends.length; i++){
        let score = 0;

        for(let j = 0; j < friends[i].scores.length; j++){
            if(friends[i].scores[j] - user.scores[j] < 0){
                score -= friends[i].scores[j] - user.scores[j];
            }
            else{
                score += friends[i].scores[j] - user.scores[j];
            }
        }

        if(score < topScore){
            topScore = score;
            match.name = friends[i].name;
            match.pic = friends[i].photo; 
        }

        console.log(topScore);
    }

    return match;
}