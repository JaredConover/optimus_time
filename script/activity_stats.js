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

edit_goal.addEventListener("click", function(evt){

    /* get div and add style display none */
    div_goal_content.style.display = "none";

    /* get form and remove display none  */
    div_goal_content_to_edit.style.display = "flex";

});

/* SAVE BUTTON */
let save_goal = document.getElementById("save_goal");

save_goal.addEventListener("click", function(evt){

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


