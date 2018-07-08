"use strict";

let sessions_length = [];
let lengthforgraph = 0;
let add_length = 0;

let div_15days = document.getElementById("div_15days");

function display_tab_length(){

    sessions_length = [];

    if (selected_activity.timed_sessions.length > 0){

        for(let i = selected_activity.timed_sessions[selected_activity.timed_sessions.length -1]; i > selected_activity.timed_sessions[selected_activity.timed_sessions.length - 5]; i--){

        for (let s of selected_activity.timed_sessions[i]){

            lengthforgraph = (s.lengthgraph === undefined ? 0 : s.lengthgraph);

            if(lengthforgraph > 0){
            add_length = sessions_length.push(lengthforgraph);
            }
            console.log("sessions_date.length :", sessions_length.length);
            console.log("lengthforgraph :", lengthforgraph);
            console.log("****************************************")

            }

        }
    }

    while (div_15days.hasChildNodes()) {
        div_15days.removeChild(div_15days.lastChild);
    }

    let x = d3.scale.linear()
        .domain([0, d3.max(sessions_length)])
        .range([0, 100]);

    d3.select(".chart")
        .selectAll("div")
        .data(sessions_length)
        .enter().append("div")
        .style("width", function(d) { return x(d) + "px"; })
        .text(function(d) { return d; });

}




