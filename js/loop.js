var playerScore = 0;


//Get number of questions
var numQ = quizQuestions.length;

//loop through all questions
for (i = 0; i < numQ; i++){

  //create modal outer
  qModal1 = document.createElement('div');
  qModal1.setAttribute("id","modal-q" + quizQuestions[i]['id'] );
  qModal1.setAttribute("class", "modal fade");
  qModal1.setAttribute("role","dialog");
  qModal1.setAttribute("aria-labelledby","modalLabel-" + quizQuestions[i]['id']);
  qModal1.setAttribute("aria-hidden","true");

  //create modal inner
  qModal2 = document.createElement('div');
  qModal2.setAttribute("class", "question-modal modal-dialog");
  qModal2.setAttribute("role","document");

  //create modal content
  qModal3 = document.createElement('div');
  qModal3.setAttribute("class", "modal-content c" + quizQuestions[i]['category']);

  //create modal containers
  qModalHeader = document.createElement('div');
  qModalHeader.setAttribute("class", "modal-header");

  qModalBody = document.createElement('div');
  qModalBody.setAttribute("class", "modal-body");

  qModalFooter = document.createElement('div');
  qModalFooter.setAttribute("class", "modal-footer");

  //fill modal with question title and content
  qModalHeader.innerHTML = "<h4>" + quizQuestions[i]['title'] +"</h4";
  qModalBody.innerHTML += '<p class="lead">' + quizQuestions[i]['question'] +"</p>";

  //fill modal footer with options/choices
  for (n = 0; n < quizQuestions[i]['choices'].length; n++){
    //if (n == quizQuestions[i]['correctAnswer']){
    //  qModalFooter.innerHTML += '<button class="btn btn-success" type="button" id="'+quizQuestions[i]['id']+"_"+ n +'">' + quizQuestions[i]['choices'][n] + '</button>';
  //  }else{
      qModalFooter.innerHTML += '<button id="q'+i+'a'+n+'"class="btn btn-light" type="button" onclick="validateChoice('+i+','+n+',q'+i+'a'+n+')">'+ quizQuestions[i]['choices'][n] +'</button>';
  //  }
  }

  //send modals to container
  document.getElementById('questions').appendChild(qModal1);
  qModal1.appendChild(qModal2);
  qModal2.appendChild(qModal3);
  qModal3.appendChild(qModalHeader);
  qModal3.appendChild(qModalBody);
  qModal3.appendChild(qModalFooter);


  //create buttons
  qButton = document.createElement('button');
  qButton.setAttribute("id","modal-b" + quizQuestions[i]['id'] );
  qButton.setAttribute("class", "btn c"+ quizQuestions[i]['category']);
  qButton.setAttribute("type","button");
  qButton.setAttribute("data-toggle","modal");
  qButton.setAttribute("data-target","#modal-q" + quizQuestions[i]['id'] );

  //populate buttons
  qButton.innerHTML = quizQuestions[i]['title'];

  //send buttons to containers
  document.getElementById('qButtons').appendChild(qButton);
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
}


//add function to end game (move to scoreboard) when all questions are disabled
