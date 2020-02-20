//Get number of questions
var numQ = quizQuestions.length;

//loop through all questions
function loopAllQuestions(){
  
  for (i = 0; i < numQ; i++) {

    //create question div
    qCont = document.createElement('div');
    qCont.setAttribute("id", "q" + quizQuestions[i]['id']);

    //fill question div with question content
    qCont.innerHTML = "<h3>" + quizQuestions[i]['title'] + "</h3>";
    qCont.innerHTML += "<p>" + quizQuestions[i]['question'] + "</p>";

    //add choices to question div
    for (n = 0; n < quizQuestions[i]['choices'].length; n++) {
      qCont.innerHTML += '<button id="' + n + '">' + quizQuestions[i]['choices'][n] + '</button>';
    }

    //send div to doc
    document.body.appendChild(qCont);
}


}
