"use strict";

let btn = document.getElementById("startTime");

btn.addEventListener("click", function () {



    let time = document.getElementById("timeIn").value;
    console.log("time : ", time);
    time *= 60;
    let timeTime= time * 1000;
    console.log("time : ", time);


    let timer = window.setInterval(function() {

        rotationImage();

        time -= 1;

        let minutes = Math.floor((time / 60) % 60);
        let seconds = time % 60;

        if(time > 0) {
            document.getElementById("myTime").innerHTML = minutes + "m " + seconds + "s ";
        }else{
            stop;
            outOfTime();
            console.log("stop");
        }


    }, 1000);

    let stop = window.setTimeout(function(){

        clearInterval(timer);
    }, timeTime);

});

let angle = 0;

function rotationImage(){
    console.log("Hello!");

    angle += 45;
    document.getElementById('imageTime').style.transform = "rotate("+angle+"deg)";
}

function outOfTime(){

    document.getElementById("myTime").innerHTML = "EXPIRED";
}





