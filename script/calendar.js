"use strict";

let sessions_date = [];
let date = "";
let add_date = "";

function display_tab_dates(){

    sessions_date = [];

    if (selected_activity.timed_sessions.length > 0){
        for (let s of selected_activity.timed_sessions){

            date = s.date;
            add_date = sessions_date.push(date);
            console.log("sessions_date.length :", sessions_date.length);
            console.log("date :", date);
            console.log("add_date : ", add_date);

        }
    }

}
