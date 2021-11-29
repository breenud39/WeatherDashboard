// Create a variable that gets the textArea field
var textArea = document.querySelector("#txtarea")
var searchEl = document.querySelector("#Search")
var hum = document.querySelector("#humidity")
var currentDay = (moment().format("(Do/MMM/YYYY)"));

// fetch("https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=4bc6d3c69bc94925aa42b9b19ac90107")
// .then(response => response.json())
// .then(data => console.log(data));
function searchCity()
{
fetch("https://api.openweathermap.org/data/2.5/forecast?q="+textArea.value+"&appid=4bc6d3c69bc94925aa42b9b19ac90107")
.then(response => response.json())
.then(data =>{
  console.log(data)
  let theDay = $("<h1 id = #theDay>"+currentDay+"</h1>")
  $("#container").append(theDay);
  // hum.innerHTML = data.list.main.humidity 
}
);
}

function showHistory()
{
  console.log("This works")

//   localStorage.setItem(""+i,textArea.val());
}

showHistory()
// localStorage

searchEl.addEventListener("click", searchCity)