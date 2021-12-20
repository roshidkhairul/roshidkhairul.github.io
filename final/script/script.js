  document.getElementById("GuessAnswer").innerHTML='Guess a Number'
  document.getElementById("GuessAnswer").style = 'margin-left: 35%'
  document.getElementById("GuessAnswerLoseH1").style = 'margin-left: 40px'
  document.getElementById("GuessAnswerLoseH5").style = 'margin-left: 40px'
  document.getElementById("GuessAnswerLoseH5MainScore").style = 'margin-left: 40px'
  document.getElementById("GuessAnswerLoseH5HighScore").style = 'margin-left: 40px'
  document.getElementById("YourScore").style = 'margin-left: 60px'
  document.getElementById("tryAgainBTN").style="display:none"

  var MainScore = 10;
  var HighScore = 0;
  var aRandomNumber = Math.floor(Math.random() * 101);
  let pointList = document.querySelector('ul');

  function reset(){    
    document.getElementById("GuessAnswer").innerHTML='Guess a Number'    
    MainScore = 10;
    document.getElementById("MainScore").innerHTML=MainScore;
    document.getElementById("HighScore").innerHTML=HighScore;
    document.getElementById("tryAgainBTN").style="display:none"
    document.getElementById("mainReset").style="display:block"
    document.getElementById('imageMain').src="./image.png";
    document.getElementById("GuessAnswerLoseH1").innerHTML=''
    document.getElementById("GuessAnswer").innerHTML="Guess the number"
    document.getElementById("GuessAnswerLoseH5").innerHTML=``
    document.getElementById("GuessAnswerLoseH5").style='margin-left:150px'
    document.getElementById('firstDiv').style.backgroundColor = 'rgb(253, 144, 1);' ;
    document.getElementById("guessInput").style="display:block" ;
    document.getElementById("checkBtn").style="display:block"
    document.getElementById('secDiv').style.backgroundColor = 'rgb(253, 144, 1)';
  }

    function getInputValue() {
        //guess Input
        var guessInput = document.getElementById("guessInput").value; 
        
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(guessInput+""));
        let link = document.createElement('a');    
        li.appendChild(link);
        pointList.appendChild(li);
        document.getElementById('secDiv').style.backgroundColor = 'rgb(253, 144, 1)';
        document.getElementById("guessInput").value=''; 
        //alert(aRandomNumber)

        if(guessInput > 100 || guessInput < 0 ){
            document.getElementById("GuessAnswer").innerHTML='Wrong Input ';
            document.getElementById("tryAgainBTN").style="display:none"
            document.getElementById("mainReset").style="display:block"
            document.getElementById('secDiv').style.backgroundColor = 'rgb(253, 144, 1)';
        } 
        else if(MainScore <= 0){
            document.getElementById('imageMain').src="./lose.PNG";
            document.getElementById('imageMain').style="margin-bottom: 50px"
            document.getElementById("GuessAnswerLoseH1").innerHTML='Unfortunately You Lost the game! '
            document.getElementById("GuessAnswer").innerHTML="Don't give up and Try again. You can win next time! "
            document.getElementById("GuessAnswerLoseH5").innerHTML=`My number was: ${guessInput}`
            document.getElementById("GuessAnswerLoseH5").style='margin-left:150px'
            document.getElementById('firstDiv').style.backgroundColor = '#99451f' ;
            document.getElementById("guessInput").style="display:none" ;
            document.getElementById("checkBtn").style="display:none"
            document.getElementById("mainReset").style="display:none"
            document.getElementById("tryAgainBTN").style="display:block"

        }
        else if(guessInput > aRandomNumber){
            document.getElementById("GuessAnswer").innerHTML='You Number is High';
            //document.getElementById("guessInput").value='';
            MainScore--;document.getElementById("mainReset").style="display:block"
            document.getElementById("MainScore").innerHTML=MainScore;
            document.getElementById('secDiv').style.backgroundColor = 'rgb(253, 144, 1)';
            //alert(guessInput);
        }else if(guessInput < aRandomNumber){
            document.getElementById("GuessAnswer").innerHTML='You Number is Low';
            //document.getElementById("guessInput").value='';
            MainScore--;document.getElementById("mainReset").style="display:block"
            document.getElementById("MainScore").innerHTML=MainScore;
            document.getElementById('secDiv').style.backgroundColor = 'rgb(253, 144, 1)';
           // alert(guessInput);
        }else if(guessInput == aRandomNumber){
            if(HighScore<MainScore)
                HighScore=MainScore;
                document.getElementById('imageMain').src="./win.PNG";
                document.getElementById('imageMain').style="margin-bottom: 50px"
                document.getElementById('firstDiv').style.backgroundColor = '#32a852' ; 
                document.getElementById("GuessAnswerLoseH1").innerHTML='Congratulation'
                document.getElementById("GuessAnswer").innerHTML='';
                document.getElementById("GuessAnswerLoseH5").innerHTML='You Guess Currect. ' +guessInput+ ' is my secret number'
                document.getElementById("GuessAnswerLoseH5MainScore").innerHTML=`Your Score : ${MainScore}`
                document.getElementById("GuessAnswerLoseH5HighScore").innerHTML=`Best : ${HighScore}`
                document.getElementById("YourScore").innerHTML='Your Score ' + HighScore;
                document.getElementById("MainScore").innerHTML=MainScore;
                document.getElementById("HighScore").innerHTML=HighScore;
                document.getElementById("tryAgainBTN").style="display:none";
                document.getElementById('secDiv').style.backgroundColor = '#b8ffc3' ;
                document.getElementById("guessInput").style="display:none" ;
                document.getElementById("checkBtn").style="display:none"
                document.getElementById("mainReset").style="display:none"
                document.getElementById("tryAgainBTN").style="display:block"
                //alert(guessInput);
                MainScore = 10;document.getElementById("mainReset").style="display:block"
        }
        
    
}


$("button") .on("click" , function () {
    $(".Low") .slideUp() . slideDown() .animate({fontSize: "120%"});
})

  


