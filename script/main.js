"use strict";
let d = document;
let btn_add_activity = d.getElementById("btn_add_activity");
let btn_cancel_new_activity = d.getElementById("cancel_new_activity");
let activities = d.getElementById("activities");
let create_new_activity = d.getElementById("create_new_activity");

//********display*************
list_activities();

//********Functions************
function add_activity(){

    create_new_activity.style.display = "block";
    let new_title = d.getElementById("title");
    let new_desc = d.getElementById("desc");
    let new_goal = d.getElementById("goal");
    let confirm_new_activity = d.getElementById("confirm_new_activity");

    function confirm() {
        let newActivity = new Activity();
        newActivity.title = new_title.value;
        newActivity.description = new_desc.value;
        newActivity.current_goal = new_goal.value;

        new_title.value = "";
        new_desc.value = "";
        new_goal.value = "";

        create_new_activity.style.display = "none";
        MyActivities.push(newActivity);
        list_activities();
    }
    confirm_new_activity.addEventListener('click', confirm);
}

function list_activities() {
    while(activities.hasChildNodes()){
        activities.removeChild(activities.lastChild);
    }
    for (let a of MyActivities.keys()) {
        let item = d.createElement("div");
        item.innerText = a;
        activities.appendChild(item);
    }
}
//********Listeners************
btn_add_activity.addEventListener('click', add_activity);
btn_cancel_new_activity.addEventListener('click', function () { create_new_activity.style.display = "none";});