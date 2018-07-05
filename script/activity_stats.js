"use strict";


/**************** SECTION title ****************/

let div_title_content = document.getElementById("div_title_content");

/**************** SECTION desc ****************/

let div_desc_content = document.getElementById("div_desc_content");
let div_desc_content_to_edit = document.getElementById("div_desc_content_to_edit");
let new_desc = document.getElementById("stats_desc");

/* DISPLAY DIV TO EDIT desc */
div_desc_content_to_edit.style.display = "none";

/* EDIT BUTTON */
let edit_desc = document.getElementById("edit_desc");
edit_desc.addEventListener("click", function (evt) {
    div_desc_content.style.display = "none";
    div_desc_content_to_edit.style.display = "flex";
});

/* SAVE BUTTON */
let save_desc = document.getElementById("save_desc");
save_desc.addEventListener("click", function (evt) {
    div_desc_content.style.display = "flex";
    div_desc_content_to_edit.style.display = "none";
    window.alert("Your new desc has been saved!");

});

/**************** SECTION GOAL ****************/

let div_goal_content = document.getElementById("div_goal_content");
let div_goal_content_to_edit = document.getElementById("div_goal_content_to_edit");

/* DISPLAY DIV TO EDIT GOAL */
div_goal_content_to_edit.style.display = "none";


/* EDIT BUTTON */
let edit_goal = document.getElementById("edit_goal");
edit_goal.addEventListener("click", function (evt) {
    div_goal_content.style.display = "none";
    div_goal_content_to_edit.style.display = "flex";
});

/* SAVE BUTTON */
let save_goal = document.getElementById("save_goal");
save_goal.addEventListener("click", function (evt) {
    div_goal_content.style.display = "flex";
    div_goal_content_to_edit.style.display = "none";
    window.alert("Your new goal has been saved!");
});




//******************************* Some functions **********************************
function display_selected_activity_info() {
    // console.log(evt.target.textContent);
    // selected_activity = MyActivities.get(evt.target.textContent);
    div_title_content.firstElementChild.textContent = selected_activity.title;
    div_desc_content.firstElementChild.textContent = selected_activity.description;
    div_goal_content.firstElementChild.textContent = selected_activity.current_goal;

    div_desc_content_to_edit.firstElementChild.textContent = selected_activity.description;
    div_goal_content_to_edit.firstElementChild.textContent = selected_activity.current_goal;

    console.log("selected_activity : ", selected_activity);

}

function delete_selected_activity(evt) {
    if (selected_activity !== undefined) {
        MyActivities.delete(selected_activity.title);
        sauvegarde();
        list_activities();
        selected_activity = new Activity();
        display_selected_activity_info();
    }
}

//****************************** some Executions **************************8
let selected_activity;
console.log(selected_activity);

let btn_delete_activity = document.getElementById("delete_activity");
btn_delete_activity.addEventListener("click", delete_selected_activity);


//****************************** SECTION HISTORY **************************//


//****************************** SECTION TIME AVERAGE ********************//


//****************************** SECTION 15 DAYS *************************//



//****************************** SECTION CALENDAR *************************//

