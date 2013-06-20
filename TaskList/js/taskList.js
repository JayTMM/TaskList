document.write('<ul>');

var taskList = ["Realize I am not in Kansas anymore", "Enjoy all that the 1960s has to offer", "See what this Pantone fuss is all about", "Pick up Milk and Bread at the store", "See a University of Hawai'i football game"];

for (t=0; t < taskList.length; t++) {

	document.write('<li>' + '<div class="colorBlock"></div>' + '<p>' + taskList[t] + '</p>' + '</li>');

};

document.write('</ul>');


