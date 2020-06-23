var scor = 3.45214
var numberofstar = Math.round(scor)
document.write(" <b> Number: " + scor)
document.write("<br>")
document.write("ROund of value: " + numberofstar)
document.write("<br>")
var numberofstar = Math.floor(scor)
document.write("floor of value: " + numberofstar)
document.write("<br>")
var numberofstar = Math.ceil(scor)
document.write("ceil of value: " + numberofstar)
document.write("<br>")
 


var scor = -2.673
var numberofstar = Math.round(scor)
document.write("<br>")
document.write("<br>")
document.write(" <b> Number: " + scor)
document.write("<br>")
document.write("ROund of value: " + numberofstar)
document.write("<br>")
var numberofstar = Math.floor(scor)
document.write("floor of value: " + numberofstar)
document.write("<br>")
var numberofstar = Math.ceil(scor)
document.write("ceil of value: " + numberofstar)
document.write("<br>")
 

var num = -4
var absolute = Math.abs(num)
document.write("<br>")
document.write("<b> Absolute value of -4 is: " + absolute)

var a = Math.round(Math.random()*6) + 1;
document.write("<br>")
document.write("<b> Random Dice value is : " + a)
  

var x = (Math.floor(Math.random() * 2) == 0);
if(x){
    document.write("<br>")
    document.write("Random coin value is:<b> Heads");
}else{
    document.write("<br>")
    document.write("Random coin value is:<b> Tails");
}


var a = Math.round(Math.random()*100) + 1;
document.write("<br>")
document.write("<b> Random Number between 1 to 100 is : " + a)


var weight =prompt("Enter Your Weight:")
document.write("<br>")
document.write("The Weight of user is " + weight + " Kilograms")


var num = Math.ceil(Math.random() * 10);

 var  gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num){
    document.write("<br>")
   document.write("<b> Congrajulations");
  } else{
    document.write("<br>")
   document.write('Not matched, the number was '+gnum);
  }