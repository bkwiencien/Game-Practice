var ComputerWins = 0;
var Userins = 0;
var Ties    = 0;
function rock() {
var computerchoice="";
var result;
   console.log("R");
   updateYouChoose("R");
   computerchoice = computerChose();
   updatecomputerChoose(computerchoice);
   result = "R" + computerchoice;
   return("R");
}
function paper(){
  updateYouChoose("P");
  console.log("P");
  return("P");
}
function scissors(){
 updateYouChoose("S");
 console.log("S");
 return("S");
}
function computerChose(){
var tempnum = 0;
var gener   = 0;
var compchoice = " ";
tempnum = Math.round(Math.random()*10)+1;
gener = tempnum % 3;
if (gener == 0){
 return("R");
}
if (gener == 1) {
 return("P");
}
if (gener == 2){
 return("S");
}
}
function updateYouChoose(x) {
var YourChoice = x;
var element = document.getElementById("youchoose");
element.innerHTML = "You Chose: " + x;
console.log(element);
}
function updatecomputerChoose(x) {
var element = document.getElementById("computerchose");
element.innerHTML = "Computer choce: " + x;
}
