var min = 60
var sec = 60
var MiliSecond = 60
var displayMin = document.getElementById("displayMin")
var displaySec = document.getElementById("displaySec")
var displayMiliSecond = document.getElementById("displayMiliSec")

var interval;

function timer(){
    MiliSecond--;
    if(MiliSecond == 0){
        MiliSecond = 10;
        sec--;
        if (sec == 0) {
            sec = 00;
            alert("timeup")
            resetTimer()
            min--
        }
    }
    
    displayMiliSecond.innerHTML = MiliSecond
    displayMin.innerHTML = min
    displaySec.innerHTML = sec

}

function startTimer(){
    interval = setInterval(function () {
    timer()},100)
}
function pauseTimer (){
    clearInterval(interval)
}
function resetTimer(){
    pauseTimer()
    min = 0
    sec = 0
    MiliSecond = 0
    displayMiliSecond.innerHTML = MiliSecond
    displaySec.innerHTML = sec
    displayMin.innerHTML = min

} 