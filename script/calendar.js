"use strict";

let selected_activity = new Activity();
let sessions_date = [];
let date;
let add;

if (selected_activity.timed_sessions.length > 0){
for (let d of selected_activity.timed_sessions){

    date = d.date;
    add = sessions_date.push(date);

}
}

console.log(date);
console.log(add);