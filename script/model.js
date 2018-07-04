"use strict";



class Activity  {
    constructor(){
        this.title = "";
        this.description = "";
        this.current_goal = "";
        this.image = "";
        this.color = "";
        this.timed_sessions = [];
    }

}

class TimedSession  {
    constructor(){
        this.focus = "";
        this.notes = "";
        this.length = 0;
        this.start_time = "";
        this.finish_time = "";
        this.date = "";
    };

    // constructor(focus, notes, length, start, finish, date){
    //     this.focus = focus;
    //     this.notes = notes;
    //     this.length = length;
    //     this.start_time = start;
    //     this.finish_time = finish;
    //     this.date = date;
    // };

}



function init_MyActivities() {
    let MyActivities = new Map();

    let new_activity = new Activity();
    new_activity.title = "soccer";
    new_activity.description = "i kick da balls";

    let soccer_1 = new TimedSession();
    soccer_1.date = "2/2/2018";
    soccer_1.length = 22;
    new_activity.timed_sessions.push(soccer_1);

    let soccer_2 = new TimedSession();
    soccer_2.date = "3/2/2018";
    soccer_2.length = 28;

    MyActivities.set(new_activity.title, new_activity);

    let activity = MyActivities.get("soccer");
    activity.timed_sessions.push(soccer_2);

    return MyActivities;
}



