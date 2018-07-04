"use strict";

let btnStart = document.getElementById("startTime");
let btnPause = document.getElementById("pauseTime");
let btnStop = document.getElementById("stopTime");

let time;
let timeTime;
let state;
let timer;
let angle = 0;

btnStart.addEventListener("click", function () {

    if(state === "start" || isNaN(document.getElementById("timeIn").value)){

        // do nothing

    } else if(state === "pause"){

        state = "start";

        timer = window.setInterval(run, 1000);

    }else{

        state = "start";

        time = document.getElementById("timeIn").value;
        console.log("time : ", time);
        time *= 60;
        timeTime = time * 1000;
        console.log("time : ", time);

        timer = window.setInterval(run, 1000);

        let stop = window.setTimeout(function(){

            clearInterval(timer);
        }, timeTime);

    }

});


btnPause.addEventListener("click", function (){

    if(state === "start") {

        state = "pause";
        clearInterval(timer);
    }

});

btnStop.addEventListener("click", function (){

    if(state === "start" || state === "pause") {

        state = "stop";
        angle = 0;
        document.getElementById('imageTime').style.transform = "rotate("+angle+"deg)";
        clearInterval(timer);
        document.getElementById("myTime").innerHTML = "Session terminee";
    }


});

function run() {

    rotationImage();

    time -= 1;

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if(time > 0) {
        document.getElementById("myTime").innerHTML = minutes + "m " + seconds + "s ";
    }else{
        stop;
        outOfTime();
        console.log("stop");
    }


}


function rotationImage(){

    angle += 6;
    document.getElementById('imageTime').style.transform = "rotate("+angle+"deg)";
}

function outOfTime(){

    document.getElementById("myTime").innerHTML = "EXPIRED";
}





