document.write("<br>") 
document.write("Q.No 1")
document.write("<br>") 

function currentDate(){
    var d = new Date()
    document.write("<b> Current Date: " + d)
}

currentDate()

document.write("<br>") 
document.write("Q.No 2")
document.write("<br>") 

function input(){
    var firstname = prompt("Enter Your first name: ")
    var lastname = prompt("Enter your last name: ")
     document.write("<br>")
    document.write("<b>" + firstname + " " + lastname + " is very prety man.")
}
input()

document.write("<br>") 
document.write("Q.No 3")
document.write("<br>") 

function addition(){
    var firstnumber = +prompt("Enter Your value a : ")
    var secondnumber = +prompt("Enter your value b: ")
    var sum = firstnumber + secondnumber
    document.write("<br>")
    document.write("<b> sum of two number is: " + sum)
}
addition()
document.write("<br>") 
document.write("Q.No 4")
document.write("<br>") 

function showMessage(num1 , num2){
     document.write("<br>")   
    document.write("sum oprater use here:" + (num1 + num2))
    }

   showMessage(12 , 14)

   document.write("<br>") 
   document.write("Q.No 5")
   document.write("<br>") 
   
function square(num){
    document.write("<br>")    
    document.write("Square of " + num + " is " + (num * num))
}
square(2)

document.write("<br>") 
document.write("Q.No 6")
document.write("<br>") 

function fectori() {
    var num = 5;
    var fectorail = num*(num-1) * (num-2) * (num-3) * (num-4)
    document.write("<br>")
    document.write("Fectorial of " + num + " is " + fectorail);
}
fectori()
document.write("<br>") 
document.write("Q.No 7")
document.write("<br>") 

function count(){
    var s = +prompt("Enter Start number: ")
    var w = +prompt("Enter Last number : ")
    for(var i =s; i<=w; i++){
        document.write(i + "<br>")
    }
}
count()
document.write("<br>") 
document.write("Q.No 8")
document.write("<br>") 

function pythagorean(Bise, perpendicular){
    return Math.sqrt(Math.pow(Bise, 2) + Math.pow(perpendicular, 2));
  }
  document.write("<br>")
  document.write("Hypotenuse is : " + (pythagorean(4, 3)));
 
  document.write("<br>") 
  document.write("Q.No 11")
  document.write("<br>") 

function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    document.write("<br>")
    document.write("<b>Example string:" + string)    
 document.write("<br> Expected Output :" + sentence.join(" "));
 return sentence;
 }
 titleCase("the quick brown fox");


 document.write("<br>") 
 document.write("Q.No 12")
 document.write("<br>") 
 
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
 
}
 document.write("<br>")
document.write("<b>Longest word from WEb Development Tutorial : <br>" + find_longest_word('Web Development Tutorial'));

document.write("<br>") 
document.write("Q.No 13")
document.write("<br>") 


function lengt(a , b){
var concate = a + b
var leng = concate.length;
document.write("<br>")
document.write(" <b> Total length of string and latter is : " + leng)
}
lengt("JSResourceS.com" , "o")

document.write("<br>") 
document.write("Q.No 14")
document.write("<br>") 



function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.Circumference = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
document.write("<br>")
document.write('Area of circle=', c.area().toFixed(2));
document.write('<br>Circumference of circle  =', c.Circumference().toFixed(2));