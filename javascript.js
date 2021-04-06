 function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
     var imageDatabase={
         'rock':document.getElementById('rock').src,
         'paper':document.getElementById('paper').src,
         'scissors':document.getElementById('scissors').src,
     }
     
     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissors').remove();
     var humanDiv=document.createElement('div'); 
     var messageDiv=document.createElement('div');
     var computerDiv=document.createElement('div');

     humanDiv.innerHTML="<img src='"+ imageDatabase[humanImageChoice]+"' height=150px,width=150px >";
     messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+"; font-size:60px;'>"+finalMessage['message']+"</h1>";
     computerDiv.innerHTML="<img src='"+imageDatabase[botImageChoice]+"' height=150px,width=150px >";




     document.getElementById('flexbox-rps-div').appendChild(humanDiv);
     document.getElementById('flexbox-rps-div').appendChild(messageDiv);
     document.getElementById('flexbox-rps-div').appendChild(computerDiv);
     
     

     
 }


 function rpsGame(yourChoice){
     console.log(yourChoice);
     var humanChoice, botChoice;
     humanChoice=yourChoice.id;
     botChoice=numberToChoice(randToRpsInt());
     console.log('computerchoice:',botChoice);
     results=decideWinner(humanChoice,botChoice);
     console.log(results);
     
     message=finalMessage(results);
     console.log(message);
     rpsFrontEnd(yourChoice.id,botChoice,message);
     

 }
 function randToRpsInt(){
     return Math.floor(Math.random()*3);
 }
 function numberToChoice(number){
     return['rock','scissors','paper'][number];
 }
 function decideWinner(yourChoice,botChoice){
     var rpsDatabase={
         'rock':{'paper':0,'rock':0.5,'scissors':1},
         'paper':{'paper':0.5,'rock':1,'scissors':0},
         'scissors':{'paper':1,'rock':0,'scissors':0.5}
     };
     var yourScore,computerScore;
     yourScore=rpsDatabase[yourChoice][botChoice];
     computerScore=rpsDatabase[botChoice][yourChoice];
     return [yourScore,computerScore];

 }
 function finalMessage([yourScore,computerScore]){
     if(yourScore===0)
     return {'message' :'you lost!','color':'red'};
     else if(yourScore===0.5)
     return {'message':'you tied','color':'yellow'};
     else 
     return {'message':'you won','color':'green'};

 }