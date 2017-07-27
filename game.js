var ComputerWins = 0;
var Userins = 0;
var Ties    = 0;
function rock() {
var computerchoice="";
var result;
   console.log("R");
   computerchoice=computerChose();
   result = "R" + computerchoice;
   console.log(result);
   return("R");
}
function paper(){
  console.log("P");
  return("P");
}
function scissors(){
 console.log("S");
 return("S");
}
function computerChose(){
var tempnum = 0;
var gener   = 0;
tempnum = Math.round(Math.random()*10)+1;
gener = tempnum % 3;
if (gener == 0) return("R");
if (gener == 1) return("P");
if (gener == 2) return("S");
}


