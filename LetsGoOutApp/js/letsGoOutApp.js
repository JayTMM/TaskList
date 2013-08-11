function placePicker (whoComes, howMuch, whatDo) {

	//This is the big honkin' array that houses the choices
	var choiceList = [
	{
	"placeName": "meLowFoodOne",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "food"
	},
	{
	"placeName": "meLowFoodTwo",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "food"
	},
	{
	"placeName": "meLowFoodThree",
	"numPeople": "me",
	"pricePoint": "low",
	"activityType": "food"
	},
	{
	"placeName": "weLowFoodOne",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "food"
	},
	{
	"placeName": "weLowFoodTwo",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "food"
	},
	{
	"placeName": "weLowFoodThree",
	"numPeople": "we",
	"pricePoint": "low",
	"activityType": "food"
	},
	{
	"placeName": "usLowFoodOne",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "food"
	},
	{
	"placeName": "usLowFoodTwo",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "food"
	},
	{
	"placeName": "usLowFoodThree",
	"numPeople": "us",
	"pricePoint": "low",
	"activityType": "food"
	}
	];
	
	//This is the area that choices get pushed to
	//This is also what resets the array, because it lives inside the function
	var deciderArray = [];

	//This is how for loops work
	var i = 0;
	
	for (i=0; i < choiceList.length; i++) {
	
		//This takes the passed variables and passes them through this big fat equation
		if ((choiceList[i].numPeople == whoComes) && (choiceList[i].pricePoint == howMuch) && (choiceList[i].activityType == whatDo)) {
		
		//This is the array that gets populated by the previous equation
		deciderArray.push(choiceList[i].placeName);
		
		
		
		}
	
	}

	//console.log(deciderArray);
	
	//This randomizes your decisions for you
	var decision = deciderArray[Math.floor(Math.random() * deciderArray.length)];
	
	//This returns your decision!
	console.log(decision);
	
};
