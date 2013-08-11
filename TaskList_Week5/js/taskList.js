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
"dueDate": new Date(2013,6,9),
"taskComplete": false
},
{
"taskName": "Pick up Milk and Bread at the store",
"dueDate": new Date(2013,7,12),
"taskComplete": false
},
{
"taskName": "See a University of Hawai'i football game",
"dueDate": new Date(2013,6,26),
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

function addTask(taskString, taskDueDate) {

taskList.push({taskName: taskString, dueDate: new Date(taskDueDate), taskComplete: false});

$('.complete').fadeOut();

$('.incomplete').fadeOut();



printTask();

return "I rebooted that there task list, hoss!";


};

$('<ul>').appendTo('#taskListInner');

printTask();

$('</ul>').appendTo('#taskListInner');