"use strict";

let btnStart = document.getElementById("startTime");
let btnPause = document.getElementById("pauseTime");
let btnStop = document.getElementById("stopTime");

let time;
let timeTime;
let state;
let timer;
let dateStart;
let angle = 0;
let secondsDone = 0;
let minutesDone = 0;
let hoursDone = 0;

//let selected_activity = new Activity(); // enelever le let

btnStart.addEventListener("click", function () {

    if(state === "start" || isNaN(document.getElementById("timeIn").value)){

        // do nothing

    } else if(state === "pause"){

        state = "start";

        timer = window.setInterval(run, 1000);

    }else{

        state = "start";

        dateStart = new Date();

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

        saveSession();

    }


});

function run() {

    rotationImage();

    time -= 1;

    secondsDone += 1
    if (secondsDone % 60 === 0) {
        minutesDone += 1;
    }

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
    saveSession();

}

function saveSession(){

    let dateFinish = new Date();
    hoursDone = Math.floor(minutesDone / 60);

    let session = new TimedSession();
    session.focus = document.getElementById("focus").value;
    session.notes = document.getElementById("notes").value;
    session.length = "Heures : " + hoursDone + ", Minutes : " + (minutesDone % 60) + " , Secondes : " + (secondsDone % 60);
    session.date = dateStart.getDay() + " / " + dateStart.getMonth() + " / " + dateStart.getFullYear();
    session.start_time = dateStart.getHours() + " : " + dateStart.getMinutes() + " : " + dateStart.getSeconds();
    session.finish_time = dateFinish.getHours() + " : " + dateFinish.getMinutes() + " : " + dateFinish.getSeconds();
    selected_activity.timed_sessions.push(session);

    showLastSession();
    sauvegarde();
}


function showLastSession(){

    if (selected_activity.timed_sessions.length > 0){

    document.getElementById("lastFocus").innerHTML = selected_activity.timed_sessions[selected_activity.timed_sessions.length - 1].focus;
    document.getElementById("lastNotes").innerHTML = selected_activity.timed_sessions[selected_activity.timed_sessions.length - 1].notes;
    document.getElementById("lastDate").innerHTML = selected_activity.timed_sessions[selected_activity.timed_sessions.length - 1].date;
    document.getElementById("lastStartTime").innerHTML = selected_activity.timed_sessions[selected_activity.timed_sessions.length - 1].start_time;
    document.getElementById("lastFinishTime").innerHTML = selected_activity.timed_sessions[selected_activity.timed_sessions.length - 1].finish_time;
    document.getElementById("lastLength").innerHTML = selected_activity.timed_sessions[selected_activity.timed_sessions.length - 1].length;

    }

}


