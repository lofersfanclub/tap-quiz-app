var playerScore = 0;
var playerAnswered = 0;

//Get number of questions
var numQ = quizQuestions.length;

//loop through all questions
for (i = 0; i < numQ; i++){

  //create outer container for modal
  qModalOuter = document.createElement('div');
    qModalOuter.setAttribute("id","modal-q" + quizQuestions[i]['id'] );
    qModalOuter.setAttribute("class", "modal fade");
    qModalOuter.setAttribute("role","dialog");
    qModalOuter.setAttribute("aria-labelledby","modalLabel-" + quizQuestions[i]['id']);
    qModalOuter.setAttribute("aria-hidden","true");

  //create inner container for modal
  qModalInner = document.createElement('div');
    qModalInner.setAttribute("class", "question-modal modal-dialog");
    qModalInner.setAttribute("role","document");

  //create main container for modal
  qModalMain = document.createElement('div');
    qModalMain.setAttribute("class", "modal-content c" + quizQuestions[i]['category']);

  //create modal content areas
  qModalHeader = document.createElement('div');
    qModalHeader.setAttribute("class", "modal-header");

  qModalBody = document.createElement('div');
    qModalBody.setAttribute("class", "modal-body");

  qModalFooter = document.createElement('div');
    qModalFooter.setAttribute("class", "modal-footer");

  //fill modal content areas with question contents
  qModalHeader.innerHTML = "<h4>" + quizQuestions[i]['title'] +"</h4>";
  qModalBody.innerHTML += '<p class="lead">' + quizQuestions[i]['question'] +"</p>";

  //fill modal footer with options
  for (n = 0; n < quizQuestions[i]['choices'].length; n++){
    qModalOption = document.createElement('button');
      qModalOption.setAttribute("id","q"+i+"a"+n );
      qModalOption.setAttribute("class", "btn btn-light");
      qModalOption.setAttribute("type","button");
      qModalOption.setAttribute("onclick",'validateChoice('+i+','+n+',q'+i+'a'+n+')');

      //Add option text
      qModalOptionContent = document.createTextNode(quizQuestions[i]['choices'][n]);
      qModalOption.appendChild(qModalOptionContent);

      //send option button to document
      qModalFooter.appendChild(qModalOption);
  }

  //send modals to container
  document.getElementById('questions').appendChild(qModalOuter);
    qModalOuter.appendChild(qModalInner);
    qModalInner.appendChild(qModalMain);
    qModalMain.appendChild(qModalHeader);
    qModalMain.appendChild(qModalBody);
    qModalMain.appendChild(qModalFooter);


  //create buttons
  qBtn = document.createElement('button');
    qBtn.setAttribute("id","modal-b" + quizQuestions[i]['id'] );
    qBtn.setAttribute("class", "btn c"+ quizQuestions[i]['category']);
    qBtn.setAttribute("type","button");
    qBtn.setAttribute("data-toggle","modal");
    qBtn.setAttribute("data-target","#modal-q" + quizQuestions[i]['id'] );

  //populate buttons
  qBtn.innerHTML = quizQuestions[i]['title'];

  //send buttons to test menu
  document.getElementById('qButtons').appendChild(qBtn);
    qButtons.innerHTML += '<br/><br/>';
}

function validateChoice(a,b,qid){
  if (quizQuestions[a]['correctAnswer'] === b) {
    //toggle classes to make btn green on correct (needs to update other buttons on click)
    qid.classList.remove('btn-light');
    qid.className += " btn-success";

    //check if qustion has been answered
    if (document.getElementById('modal-b'+a).disabled != true) {

      //add score to scorevariable
      playerScore ++;

      //update score counter
      document.getElementById('pscore').innerHTML = playerScore;
    }
  } else{
    //toggle classes to make btn red on correct (needs to update other buttons on click)
    qid.classList.remove('btn-light');
    qid.classList += " btn-danger";
  }

  //disable access to question when answered
  document.getElementById('modal-b'+a).disabled = true;

  //hide question when answered
  setTimeout(function(){
    $('#modal-q'+a).modal('hide');
  },1500);


  //add answered
  playerAnswered ++;

  //check if game over
  if (playerAnswered == numQ){
    setTimeout(function(){
      $('#modal-q'+a).modal('hide');
    },1500);
    setTimeout(function(){
      finalScore = document.getElementById("fscore");
      finalScoreText = document.createTextNode(playerScore);
      finalScore.appendChild(finalScoreText);

      $('#modal-end').modal('show');
    },2000);

  }
}


//add function to end game (move to scoreboard) when all questions are disabled
