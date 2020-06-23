var rightNow = new Date();
 document.write(rightNow)



var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var d = new Date();
alert("The current month is " + monthNames[d.getMonth()]);


var monthNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
var d = new Date();
alert("Today is " + monthNames[d.getDay()]);

/////////////////////////////////////21-6-2020 DAY IS SUNDAY SO MESSAGE SHOW FUNDAY////////////////
var monthNames = ["Funday", "Mon", "Tue", "Wed", "Thur", "Fri", "Funday"]
var d = new Date();
var w = d.setDate(21)
if(d === 6 || d === 0){
alert("Its  " + monthNames[w.getDay()]);
}else{
  alert("Its is  " + monthNames[d.getDay()]);
}
 var d = new Date()
 if (d <= 15){
   document.write("<br>First fifteen days of the month")
 }else{
   document.write("<br> Last days of the month")
 }

var d = new Date("january 1, 1970")
var currMills = d.getTime()
var today = new Date()
var todaymilli = today.getTime()
var dif = todaymilli - currMills
document.write("<b> <br> Current Date: " + d)
document.write("<br>")
document.write("Millisecond since january 1 1970 : " + dif)
var dmilli = d.getTime()
var diff = todaymilli - dmilli
var todayminuts = diff/(1000*60*60)
document.write("<br>")
document.write("Millisecond since january 1 1970 : " + todayminuts)

var d = new Date()
var w = d.getHours()
if(w <= 12){
  document.write("<br> Its AM")
}else{
  document.write("Its PM")
}

var laterdate = new Date("Dec 31, 2020")
document.write("<br> Later Date : " + laterdate)
 

var ram = new Date("june 18 2015")
var rammilli = ram.getTime()
var today =  new Date("Dec 06 2015")
var todaymill = today.getTime()
var dif = todaymill - rammilli 
var days1stramzan = dif/(1000*60*60*24)
var year = ram.getFullYear()
var acut = Math.floor(days1stramzan)
document.write("<b> <br>" + acut + " Days have passed since 1st Ramzan " + year)

var d = new Date("Dec 05 2015")
var currMills = d.getTime()
var today = new Date()
var todaymilli = today.getTime()
var dmilli = d.getTime()
var diff = todaymilli - dmilli
var todayminuts = diff/(1000*60)
var todaymin = Math.floor(todayminuts)
document.write("<br>")
document.write("<b> <br>" + todaymin + " second had passed since Biginning of 2015")

var years = new Date("june 23 1921")
var yearsmilli = years.getTime()
var today = new Date()
var todaymilli = today.getTime()
var differ  = todaymilli - yearsmilli
var dobyear = differ/(1000*60*60*24*30*12)
var accoage = Math.floor(dobyear)
document.write("<b> <br> Current Date " + today)
document.write("<br>")
document.write("<b>" + accoage + " Years back it was " + years)

var d = new Date()
var today = d.getHours()
document.write("<b> <br>" + today + " hours ago it was " + d)

var dob = new Date(prompt("Enter Your Date Of Birth: "))
var dobmilli = dob.getTime()
var today = new Date()
var todaymilli = today.getTime()
var differ  = todaymilli - dobmilli
var dobyear = differ/(1000*60*60*24*30*12)
var accoage = Math.floor(dobyear)
document.write("<br>")
document.write("Date of Birth " + accoage)