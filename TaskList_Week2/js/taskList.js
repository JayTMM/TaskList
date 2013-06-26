document.write('<ul>');

var today = new Date();
var dueDate1 = new Date();
dueDate1.setDate(5);
var dueDate2 = new Date();
dueDate2.setDate(15);
var dueDate3 = new Date();
dueDate3.setDate(30);

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



for (t=0; t < taskList.length; t++) {

	if (taskList[t].taskComplete == true) 
	
	document.write('<li>' + '<div class="greenBlock"></div>' + '<p>' + taskList[t].taskName + '</p>' + '</li>');
	
	else if ((taskList[t].taskComplete == false) && (today > taskList[t].dueDate))
	
	document.write('<li>' + '<div class="redBlock"></div>' + '<p>' + taskList[t].taskName + '</p>' + '</li>');
	
	else if ((taskList[t].taskComplete == false) && (today < taskList[t].dueDate))
	
	document.write('<li>' + '<div class="greyBlock"></div>' + '<p>' + taskList[t].taskName + '</p>' + '</li>');
		
	else
	
	alert("Something is wrong with the task: '" + taskList[t].taskName +"'. You should check it out.");

};


document.write('</ul>');





