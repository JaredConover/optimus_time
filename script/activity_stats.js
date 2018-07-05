"use strict";


/**************** SECTION GOAL ****************/

let div_goal_content = document.getElementById("div_goal_content");

/*
let p_goal = div_goal_content.firstElementChild; // get p
let p_goaltext = p_goal.textContent; // get p text

let textarea_goal = div_goal_content_to_edit.firstElementChild; // get textarea
let textarea_goaltext = textarea_goal.textContent; // get textarea text
*/

let div_goal_content_to_edit = document.getElementById("div_goal_content_to_edit");


/* DISPLAY DIV TO EDIT GOAL */
div_goal_content_to_edit.style.display = "none";

/* AFFICHER GOAL
if(p_goaltext === "" || p_goaltext === " "){
    p_goal.textContent = "My Goal is...";
    console.log("p_goal : ", p_goaltext);
} else {
    console.log(" *** afficher le goal de l'utilisateur ***");
}*/

/* EDIT BUTTON */
let edit_goal = document.getElementById("edit_goal");

edit_goal.addEventListener("click", function (evt) {

    /* get div and add style display none */
    div_goal_content.style.display = "none";

    /* get form and remove display none  */
    div_goal_content_to_edit.style.display = "flex";

});

/* SAVE BUTTON */
let save_goal = document.getElementById("save_goal");

save_goal.addEventListener("click", function (evt) {

    /* AFFICHER GOAL
    if(textarea_goaltext === "" || textarea_goaltext === " "){
        p_goal.textContent = "My Goal is...";
        textarea_goal.textContent = "My Goal is...";
    } else {
        console.log(" *** afficher le goal de l'utilisateur ***");
    }*/

    /* get div and remove display none  */
    div_goal_content.style.display = "flex";

    /* get form and add display none  */
    div_goal_content_to_edit.style.display = "none";

    /* popup confirmation new goal */
    window.alert("Your new goal has been saved!");

});

/**************** SECTION title ****************/

let div_title_content = document.getElementById("div_title_content");


let p_title = div_title_content.firstElementChild; // get p
let p_titletext = p_title.textContent; // get p text

// let textarea_title = div_title_content_to_edit.firstElementChild; // get textarea
// let textarea_titletext = textarea_title.textContent; // get textarea text


let div_title_content_to_edit = document.getElementById("div_title_content_to_edit");


/* DISPLAY DIV TO EDIT title */
div_title_content_to_edit.style.display = "none";

/* AFFICHER title
if(p_titletext === "" || p_titletext === " "){
    p_title.textContent = "My title is...";
    console.log("p_title : ", p_titletext);
} else {
    console.log(" *** afficher le title de l'utilisateur ***");
}*/

/* EDIT BUTTON */
let edit_title = document.getElementById("edit_title");

edit_title.addEventListener("click", function () {

    /* get div and add style display none */
    div_title_content.style.display = "none";

    /* get form and remove display none  */
    div_title_content_to_edit.style.display = "flex";

});

/* SAVE BUTTON */
let save_title = document.getElementById("save_title");

save_title.addEventListener("click", function () {

    /* AFFICHER title
    if(textarea_titletext === "" || textarea_titletext === " "){
        p_title.textContent = "My title is...";
        textarea_title.textContent = "My title is...";
    } else {
        console.log(" *** afficher le title de l'utilisateur ***");
    }*/

    /* get div and remove display none  */
    div_title_content.style.display = "flex";

    /* get form and add display none  */
    div_title_content_to_edit.style.display = "none";

    /* popup confirmation new title */
    window.alert("Your new title has been saved!");

});


/**************** SECTION desc ****************/

let div_desc_content = document.getElementById("div_desc_content");

/*
let p_desc = div_desc_content.firstElementChild; // get p
let p_desctext = p_desc.textContent; // get p text

let textarea_desc = div_desc_content_to_edit.firstElementChild; // get textarea
let textarea_desctext = textarea_desc.textContent; // get textarea text
*/

let div_desc_content_to_edit = document.getElementById("div_desc_content_to_edit");


/* DISPLAY DIV TO EDIT desc */
div_desc_content_to_edit.style.display = "none";

/* AFFICHER desc
if(p_desctext === "" || p_desctext === " "){
    p_desc.textContent = "My desc is...";
    console.log("p_desc : ", p_desctext);
} else {
    console.log(" *** afficher le desc de l'utilisateur ***");
}*/

/* EDIT BUTTON */
let edit_desc = document.getElementById("edit_desc");

edit_desc.addEventListener("click", function (evt) {

    /* get div and add style display none */
    div_desc_content.style.display = "none";

    /* get form and remove display none  */
    div_desc_content_to_edit.style.display = "flex";

});

/* SAVE BUTTON */
let save_desc = document.getElementById("save_desc");

save_desc.addEventListener("click", function (evt) {

    /* AFFICHER desc
    if(textarea_desctext === "" || textarea_desctext === " "){
        p_desc.textContent = "My desc is...";
        textarea_desc.textContent = "My desc is...";
    } else {
        console.log(" *** afficher le desc de l'utilisateur ***");
    }*/

    /* get div and remove display none  */
    div_desc_content.style.display = "flex";

    /* get form and add display none  */
    div_desc_content_to_edit.style.display = "none";

    /* popup confirmation new desc */
    window.alert("Your new desc has been saved!");

});

//******************************* Some functions **********************************
function display_selected_activity_info() {
    // console.log(evt.target.textContent);
    // selected_activity = MyActivities.get(evt.target.textContent);
    div_title_content.firstElementChild.textContent = selected_activity.title;
    div_desc_content.firstElementChild.textContent = selected_activity.description;
    div_goal_content.firstElementChild.textContent = selected_activity.current_goal;
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


