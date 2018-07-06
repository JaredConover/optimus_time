"use strict";

$(".error_msg").hide();

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

let formulaire = $("#form_timer");
console.log(formulaire);

let champs =  formulaire.find("input");
console.log(champs);

//let selected_activity = new Activity(); // enelever le let


function display_timer_activity(){
    let timer_titre_activity = document.getElementById("timer_titre_activity");
    timer_titre_activity.textContent = selected_activity.title;
}


function startTimer(){

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

function valider_form_timer(event) {


    if(state === "start" || isNaN(document.getElementById("timeIn").value)){

        // do nothing

    } else if(state === "pause"){

        state = "start";

        timer = window.setInterval(run, 1000);

    }else{

        let formulaire_valide = true;

        let champ_timeIn = champs.filter("[name=timeIn]");
        let champ_focus = champs.filter("[name=focus]");
        let btn_start = champs.filter("[name=startTime]");

        console.log(parseInt(champ_timeIn.val()));


        if(selected_activity !== undefined){

        }else{
            btn_start.addClass("error");
            btn_start.next("p").show();
            formulaire_valide = false;
        }

        if(!isNaN(parseInt(champ_timeIn.val()))){

        }else{
            champ_timeIn.addClass("error");
            champ_timeIn.next("p").show();
            formulaire_valide = false;
        }

        if(champ_focus.val().length > 0){

        }else{
            champ_focus.addClass("error");
            champ_focus.next("p").show();
            formulaire_valide = false;
        }

        console.log("Tentative de soumission du formulaire :", event.target);

        console.log("formulaire_valide : ", formulaire_valide);

        if (formulaire_valide){

            startTimer();

        }


    }
    event.preventDefault();
}

formulaire.on("submit", valider_form_timer);

btnPause.addEventListener("click", function (event){

    if(state === "start") {

        state = "pause";
        clearInterval(timer);
    }

    event.preventDefault();
});

btnStop.addEventListener("click", function (event){

    if(state === "start" || state === "pause") {

        state = "stop";
        angle = 0;
        document.getElementById('imageTime').style.transform = "rotate("+angle+"deg)";
        clearInterval(timer);
        document.getElementById("myTime").innerHTML = "Session terminee";

        saveSession();

    }

    event.preventDefault();

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

let i = 1;
let j = 10;

function rotationImage(){

    if(i <= 10){
        $("#imageTime").attr("src","images/hourglass_"+i+".png");
        i++;
    }else if(i >= 11 && i <=30){
        angle += 9;
        document.getElementById('imageTime').style.transform = "rotate("+angle+"deg)";
        i++;
    }else if(i >= 31 && i <=40){
        $("#imageTime").attr("src","images/hourglass_"+j+".png");
        j--;
        i++;
    }else if(i >= 41 && i <=60){
        angle -= 9;
        document.getElementById('imageTime').style.transform = "rotate("+angle+"deg)";
        i++;
    }else{
        i = 1;
        j = 10;
    }

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

