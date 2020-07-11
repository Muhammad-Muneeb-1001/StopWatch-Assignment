var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
const Button = document.getElementById('button')

var interval;
function timer(){
  msec ++
  msecHeading.innerHTML = msec;
  if(msec >= 100){
    sec ++
     secHeading.innerHTML = sec
  msec = 00

  Button.disabled = true
  Button.disabled = false
  
  }
  else if (sec>= 60){
    min ++
    sec = 00
    minHeading.innerHTML = min
  
Button.disabled = true
Button.disabled = false


  }
}
function start(){

interval = setInterval(timer, 10)

}
function stop(){
  clearInterval(interval)
}
function reset(){
  min = 00;
  sec = 00;
  msec = 00;
  minHeading.innerHTML = min
  secHeading.innerHTML = sec
  msecHeading.innerHTML = msec
stop()  
}

Button.disabled = true
Button.disabled = false















