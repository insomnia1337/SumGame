

var riddle = {}

function randomNumber(min,max){
    return Math.floor(Math.random() * (max-min+1) + min)
}

function playGame(){
    var field1 = randomNumber(10, 100);
    var field2 = randomNumber(10, 100);
    var result = field1 + field2;

    var resultsArray = generateRandomOptions(result);
    resultsArray.push(result);
    resultsArray.sort(function(){
        return 0.5 - Math.random()
    });
    
    
    riddle = {
        field1: field1,
        field2: field2,
        resultsArray: resultsArray,
        answer: result
    }
    //numbers
    document.getElementById('field1').innerHTML = riddle.field1;
    document.getElementById('field2').innerHTML = riddle.field2;
    
    //cards
    document.getElementById('option1').innerHTML = riddle.resultsArray[0];
    document.getElementById('option2').innerHTML = riddle.resultsArray[1];
    document.getElementById('option3').innerHTML = riddle.resultsArray[2];
    document.getElementById('option4').innerHTML = riddle.resultsArray[3];



    console.log(field1, field2)
   
}
function generateRandomOptions(sum) {
    var resultsArray = [];
   var randomNumberArray = [];
   

    while(randomNumberArray.length < 3) {
        var random = randomNumber(1,10);
        if(randomNumberArray.indexOf(random)> -1) continue;
        randomNumberArray.push(random);
    }

    for ( var i=0; i<3; i++){
        var addSubstract = randomNumber(0,1);
        var result = sum;

        if(addSubstract === 1){
            result += randomNumberArray[i];

        } else {
            result -= randomNumberArray[i];
    
        }
        resultsArray.push(result);
    }
    console.log(resultsArray);
    return resultsArray;

    

}
function checkAnswer(selectedElement){
    var scorenumber = document.getElementById("scorenumber");
    var after = document.getElementById('after');
    
    
    if(selectedElement.innerHTML == riddle.answer){
        after.classList.remove('hide');
        after.classList.add('correct');
        after.classList.add('animated');
        after.classList.add('zoomIn');
        after.innerHTML = "Great job!<br> Hit the button below to play again!☺"
        scorenumber.innerHTML++;
       
        

    } else {
        after.classList.remove('hide');
        after.classList.add('wrong');
        after.classList.add('animated');
        after.classList.add('zoomIn');
        after.innerHTML = "Ooooops maybe next time... ;(<br> Hit the button below to play again!"
        
        
    }
}

function playAgain(){
    var after = document.getElementById('after');
    after.classList.remove('correct');
    after.classList.remove('wrong');
    after.classList.add('hide');

    
    
  
    playGame();
}