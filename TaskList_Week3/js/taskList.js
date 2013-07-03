var today = new Date();
var dueDate1 = new Date();
dueDate1.setDate(1);
var dueDate2 = new Date();
dueDate2.setDate(2);
var dueDate3 = new Date();
dueDate3.setDate(15);

var taskList = [
{
"taskName": "Realize I am not in Kansas anymore",
"dueDate": dueDate1,
"taskComplete": true
},
{
"taskName": "Enjoy all that the 1960s has to offer",
"dueDate": dueDate2,
"taskComplete": true
},
{
"taskName": "See what this Pantone fuss is all about",
"dueDate": dueDate2,
"taskComplete": false
},
{
"taskName": "Pick up Milk and Bread at the store",
"dueDate": dueDate3,
"taskComplete": false
},
{
"taskName": "See a University of Hawai'i football game",
"dueDate": dueDate3,
"taskComplete": false
},
{
"taskName": "Whistle The Launch Codes to Start World War III!",
"dueDate": dueDate3,
"taskComplete": Error
}
];

function printTask(task) {

	if (typeof task.taskName == 'undefined') {
		throw new TypeError('is missing the name of the task');
	} else if (typeof task.taskComplete == 'undefined') {
		throw new TypeError('is missing a completion status');
	} else if (typeof task.dueDate == 'undefined') {
		throw new TypeError('is missing a due date');
	} 
	
	
	if (task.taskComplete == true) {
	
	$('<li>' + '<div class="greenBlock"></div>' + '<p>' + task.taskName + '</p>' + '</li>').appendTo('#taskListInner').fadeOut();
	
	} else if ((task.taskComplete == false) && (today > task.dueDate)) {
	
	$('<li>' + '<div class="redBlock"></div>' + '<p>' + task.taskName + '</p>' + '</li>').appendTo('#taskListInner');
	
	} else if ((task.taskComplete == false) && (today < task.dueDate)) {
	
	$('<li>' + '<div class="greyBlock"></div>' + '<p>' + task.taskName + '</p>' + '</li>').appendTo('#taskListInner');
	
	}

};


$('<ul>').appendTo('#taskListInner');

for (var i = 0; i < taskList.length; i++) {
	try {
		printTask(taskList[i]);
	} catch (error) {
		console.log(error);
	}
};
	

$('</ul>').appendTo('#taskListInner');































