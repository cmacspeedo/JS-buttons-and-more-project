// BIG RED BUTTON
var buttonTarget = document.getElementsByClassName("btn")[0];
var counter = 1;
var inter = counter;

function incrementer() {
  document.getElementById("btn").innerHTML = counter.toString();
  buttonTarget.innerHTML = counter.toString();
  counter++;
  return counter;
}

function setInter() {
  inter = setInterval(incrementValue, 100);
}

function unsetInter() {
  clearInterval(inter);
}

function incrementValue() {
  counter = counter + 1;
  document.getElementById("btn").innerHTML = counter;
}

// COLOR CHANGING SLIDERS

// var red = document.getElementById("rangeRed");
// console.log(red);
//     // red.addEventListener('onchange',(=> [console.log red.value]))
// red.onAddEventListener("onchange", () => {
//   console.log(red.value);
// });

function changeColor() {
  var red = document.getElementById("rangeRed").value;
  var green = document.getElementById("rangeGreen").value;
  var blue = document.getElementById("rangeBlue").value;
  var color = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = color;
  document.getElementById("colorOutput").innerHTML = color;
  console.log.color;
}
document.getElementById("rangeRed").addEventListener("input", changeColor);
document.getElementById("rangeGreen").addEventListener("input", changeColor);
document.getElementById("rangeBlue").addEventListener("input", changeColor);
