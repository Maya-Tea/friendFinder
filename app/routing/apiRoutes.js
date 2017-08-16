
var friends = require("../data/friends");

module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    console.log(req.body);
    var newScoreArray=[]

    for(var i=0; i<req.body.scores.length; i++){
      var intVal =parseInt(req.body.scores[i]);
      newScoreArray.push(intVal);
    }
    console.log(newScoreArray);
    var diffArray=[];
    var sumArray=[];
    for(var i=0; i<friends.length-1; i++){

      var currentSum=0;

      for(var j=0; j<(req.body.scores.length); j++){

        currentSum=currentSum+Math.abs(newScoreArray[j]-friends[i]["scores"][j]);

      }
      console.log(currentSum);
      sumArray.push(currentSum);

    }
    //const nums = [1, 2, 3]
//Math.min(...nums)
    console.log(sumArray);
    minNum=Math.min(...sumArray);
    var indexOfMatch=sumArray.indexOf(minNum);
    var match=friends[indexOfMatch];
    console.log(match);
    res.json(match);

  });

};
