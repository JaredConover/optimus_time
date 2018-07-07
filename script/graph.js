"use strict";

let sessions_length = [];
let lengthforgraph = 0;
let add_length = 0;

function display_tab_length(){

    sessions_length = [];

    if (selected_activity.timed_sessions.length > 0){
        for (let s of selected_activity.timed_sessions){

            lengthforgraph = (s.lengthgraph === 0 ? 0 : s.lengthgraph);
            add_length = sessions_length.push(lengthforgraph);
            console.log("sessions_date.length :", sessions_length.length);
            console.log("lengthforgraph :", lengthforgraph);
            console.log("add_length : ", add_length);

        }
    }
}


let data = [6, 4, 7, 2, 7, 8, 4];

let x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 300]);

d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
