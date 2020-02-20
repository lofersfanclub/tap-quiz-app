var correctAnwers =[];
var playerAnswers= [];

var currentGame= false;

document.getElementById("playButton").addEventListener("click", function () {
       gameStart();
});


function gameStart(){
var currentGame = true;
    if(currentGame){
        
        console.log("play game");
        document.getElementById('questions').style.display = "block"
        document.getElementById('scoreboard').style.display = "none"
        loopAllQuestions();
    }
    else{

    }

}

