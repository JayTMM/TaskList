/*

"use strict";

var taskList = [
{
"taskName": "Realize I am not in Kansas anymore",
"dueDate": new Date(2013,5,15),
"taskComplete": true
},
{
"taskName": "Enjoy all that the 1960s has to offer",
"dueDate": new Date(2013,5,15),
"taskComplete": true
},
{
"taskName": "See what this Pantone fuss is all about",
"dueDate": new Date(2013,7,19),
"taskComplete": false
},
{
"taskName": "Pick up Milk and Bread at the store",
"dueDate": new Date(2013,6,12),
"taskComplete": false
},
{
"taskName": "See a University of Hawai'i football game",
"dueDate": new Date(2013,7,1),
"taskComplete": false
},
{
"taskName": "Whistle The Launch Codes to Start World War III!",
"dueDate": new Date(1989,8,1),
"taskComplete": true
}
];

function printTask() {

	var today = new Date();
	
	var close = new Date();
	
	close.setDate(close.getDate() + 6);
	
	var t = 0;

	for (t=0; t < taskList.length; t++) {


		if (taskList[t].taskComplete === true) {
	
				$('<li class="complete">' + '<div class="greenBlock"></div>' + '<p>' + taskList[t].taskName + '</p>' + '</li>').appendTo('#taskListInner');
	
			} else if ((taskList[t].taskComplete === false) && (today.getTime() > taskList[t].dueDate.getTime())) {
	
				$('<li class="incomplete">' + '<div class="redBlock"></div>' + '<p>' + taskList[t].taskName + '</p>' + '</li>').appendTo('#taskListInner');
				
			} else if ((taskList[t].taskComplete === false) && (close.getTime() > taskList[t].dueDate.getTime())) {
	
				$('<li class="incomplete">' + '<div class="yellowBlock"></div>' + '<p>' + taskList[t].taskName + '</p>' + '</li>').appendTo('#taskListInner');
	
			} else if ((taskList[t].taskComplete === false) && (today.getTime() < taskList[t].dueDate.getTime())) {
	
				$('<li class="incomplete">' + '<div class="greyBlock"></div>' + '<p>' + taskList[t].taskName + '</p>' + '</li>').appendTo('#taskListInner');
				

	
		}

	}
	

};

function clearFinishedTasks() {

	$('.complete').fadeOut();
	
	return "I cleaned that list up, hoss!";

};

function addTask(taskString, taskDueDate, taskStatus) {

taskList.push({taskName: taskString, dueDate: new Date(taskDueDate), taskComplete: taskStatus});

$('.complete').fadeOut();

$('.incomplete').fadeOut();

printTask();

return "I rebooted that there task list, hoss!";

};

$('<ul>').appendTo('#taskListInner');

printTask();

$('</ul>').appendTo('#taskListInner');


*/


// Look at the Add function

// Look at Display and Init

//Look at the Task function at the end

var taskApp;

$(document).ready(function(){

    taskApp = {
        
        'tasks' : {
            'list' : [],
            'render' : function(task) {
                if(typeof task.name === 'undefined') {
                    throw 'The name of this task is missing! Help!';
                } else if (typeof task.complete === 'undefined') {
                    throw 'The completion status of this task is gone. OH NO';
                }
                
                if(task.complete) {
                    return '<li class="complete">' + task.name + '</li>';
                } else {
                    if(task.urgent()) {
                        return '<li class="urgent">' + task.name + '</li>';

                    } else {
                        return '<li>' + task.name + '</li>'; 
                    }
                }
            }
            
        },
        'add' : function(name, due) {
            this.tasks.list.push(new Task(name, due));
        },
        'remove' : function() {
            $('.complete').remove();
            
        },
        'display' : function() {
                var tasks = this.tasks;
                var html = '<h2>My Tasks</h2>'; // contain our HTML as a string
    
                    html +='<ol>';

                    for(var i= 0; i < tasks.list.length; i++) {
                        try {
                            html += tasks.render(tasks.list[i]);
                        } catch (msg) {
                            console.log('There is a problem: ' + msg);
                        }
                    }
                    
                    html += '</ol>';
                    $('#taskListInner').html(html); 
        },
        'init' : function() {
            this.add('Take out the garbage', moment('2013-07-15'));
            this.add('Fold the laundry', moment());
            this.add('Feed the dog');
            this.add('Do week 7 slides');
            this.display();
        }
         
    }
    taskApp.init();
});

var Task = function(name, due) {
    // generate a task
    
    this.name = name || 'Generic task';
    this['complete'] = false;
    this.due = due || moment().add('days', 10);
    this.urgent = function() {
        var oneWeekFromNow = moment().add('days', 7);
        console.log(oneWeekFromNow);

        if(this.due.isBefore(oneWeekFromNow)) {
            return true;
        } 
        return false;
    };
}











