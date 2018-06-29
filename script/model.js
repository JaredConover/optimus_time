"use strict";



class Activity  {
    constructor(){
        this.title = "";
        this.description = "";
        this.current_goal = "";
        this.image = "";
        this.color = "";
    }

}

let MyActivities = [];
MyActivities.push({title:"soccer", description: "kickin balss", current_goal:"kick harder"});

class TimedSession  {
    constructor(){
        this.activity = new Activity();
        this.focus = "";
        this.notes = "";
        this.length = 0;
        this.start_time = "";
        this.finish_time = "";
        this.date = "";
    }

}