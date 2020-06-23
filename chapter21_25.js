var time = prompt("Enter time (24h):")
if(time>=1 && time<=12 ){
    document.write("Its AM")
}else if(time>=12 && time<=24){
    document.write("Its PM")
}

var FirstName = prompt("Enter your First Name:")
var LastName = prompt("Enter Your Last Name:")
var FullName = FirstName + LastName 
document.write("<br>")
document.write("Mrs " + FullName + " work very hard.")


var model = prompt("My Favorite Phone:")
var  mo = model.length;
document.write("<br>")
document.write("My Favorite Phone is:" + model)
document.write("<br>")
document.write("Length of String:" + mo)


var City = "Hyderabad"
var replace = City.replace("Hydera" ,"Islama")
document.write("<br>")
document.write("City:" + City)
document.write("<br>")
document.write("After Replacement:" + replace)

var some = "Pakistan"
var s =some.search("n")
document.write("<br>")
document.write("String:" + some)
document.write("<br> index of 'n':" + s)


var som = "hallo world"
var s =som.lastIndexOf("l")
document.write("<br>")
document.write("String:" + som)
document.write("<br> index of 'n':" + s)

var str = "pakistan"
var n = str.indexOf(3)
document.write("<br>")
document.write(n)

var name = "pakistan"
var n = name.charAt(3)
document.write("<br>")
document.write("<b>String: " + name)
document.write("<br>")
document.write("<b>Charater at index '3':" + n)
  

var message = "“Ali and Sami are best friends. They play cricket and football together.”;"
var repla = message.replace(/and/g , "&")
document.write("<br>")
document.write(repla)

var index = "472";
  var result = (typeof index);
document.write("<br>")
  document.write("<b>Value:" + index)
  document.write("<br>")
document.write("Type:" + result);
document.write("<br>")
var index = 472;
  var result = (typeof index);
  document.write("Value:" + index)
  document.write("<br>")
document.write("Type:" + result);

var str = prompt("enter lowercase string:")
var res = str.toUpperCase();
document.write("<br>")
document.write("User input:" + str)
document.write("<br>")
document.write("Uper case convert:" + res)

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
 titleCase(prompt("Enter Lowercase String"));
