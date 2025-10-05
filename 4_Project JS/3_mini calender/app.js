let date=document.getElementById("date")
let day=document.getElementById("day")
let month=document.getElementById("month")
let year=document.getElementById("year")

let today=new Date();

const weekDays=["sunday","Monday","tuesday","wednesday","Thursday","Friday","Saturday"]
const Months=["January","February","march","april","may","june","july","august","September","October","November","December"]
 
date.innerHTML=today.getDate()
day.innerHTML=weekDays[today.getDay()]
month.innerHTML=Months[today.getMonth()]
year.innerHTML=today.getFullYear()


