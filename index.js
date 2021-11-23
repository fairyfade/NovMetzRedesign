// Create a variable to hold a new Date object (defaults to now)
var today = new Date();

//get day of week
var dayOfWeek = today.getDay();

//get hour and minute
var hrOfDay = today.getHours();
var minOfDay = today.getMinutes();

//if weekend (0 or 6) then weekend hours, if weekday (1 - 5) then weekday hours
if(dayOfWeek == 0 || dayOfWeek == 6){

	//if between brunch hours (10:30-1)
	if(hrOfDay > 10 && hrOfDay < 13){
		//change text to brunch menu
		var brunchHrs = document.getElementById('bfast');
		brunchHrs.innerHTML = 'Brunch: \n' + "-Pancakes, omelets, hashbrowns";
	}

	//if between dinner hours (4:30-6:30)
	else if(hrOfDay > 16 && hrOfDay < 18){
		if(hrOfDay == 16 || hrOfDay == 18){
			if(minOfDay >= 30){
				//change text 
				var dinnerHrs = document.getElementById('dinner');
				dinnerHrs.innerHTML = 'Dinner: \n ' + "-Salad Bar, Burgers, Grilled Cheese";
			}
		}
		else{
			//change text
			var dinnerHrs = document.getElementById('dinner');
			dinnerHrs.innerHTML = 'Dinner: \n ' + "-Salad Bar, Burgers, Grilled Cheese";
		}

	}
	else{
		//change text content depending on time of day
		var bfastHrs = document.getElementById('bfast');
		bfastHrs.innerHTML = 'Breakfast: \n' + "-Pancakes, omelets, hashbrowns";

		var lunchHrs = document.getElementById('lunch');
		lunchHrs.innerHTML = 'Lunch: \n ' + "-Pizza, Pasta, Baked Potato Bar";

		var dinnerHrs = document.getElementById('dinner');
		dinnerHrs.innerHTML = 'Dinner: \n ' + "-Salad Bar, Burgers, Grilled Cheese";

	}
	

}

else{
	//if between bfast hours (8:00-10:30)
	if(hrOfDay > 8 && hrOfDay < 10){
		if(hrOfDay == 10){
			if(minOfDay > 30){
				var bfastHrs = document.getElementById('bfast');
				bfastHrs.innerHTML = 'Breakfast: \n' + "-Pancakes, omelets, hashbrowns";

			}
		}
		else{
			var bfastHrs = document.getElementById('bfast');
			bfastHrs.innerHTML = 'Breakfast: \n' + "-Pancakes, omelets, hashbrowns";
		}
	}



	//if between lunch hours (11:00 -2:00)
	else if(hrOfDay > 11 && hrOfDay < 14){
		//change text to brunch menu
		var lunchHrs = document.getElementById('lunch');
		lunchHrs.innerHTML = 'Lunch: \n ' + "-Pizza, Pasta, Baked Potato Bar";
	}

	//if between dinner hours (4:30-7)
	else if(hrOfDay > 16 && hrOfDay < 18){
		if(hrOfDay == 16){
			if(minOfDay >= 30){
				//change text 
				var dinnerHrs = document.getElementById('dinner');
				dinnerHrs.innerHTML = 'Dinner: \n ' + "-Salad Bar, Burgers, Grilled Cheese";
			}
		}
		else{
			//change text
			var dinnerHrs = document.getElementById('dinner');
			dinnerHrs.innerHTML = 'Dinner: \n ' + "-Salad Bar, Burgers, Grilled Cheese";
		}

	}
	else{
		//change text content depending on time of day
		var bfastHrs = document.getElementById('bfast');
		bfastHrs.innerHTML = 'Breakfast: \n' + "-Pancakes, omelets, hashbrowns";

		var lunchHrs = document.getElementById('lunch');
		lunchHrs.innerHTML = 'Lunch: \n ' + "-Pizza, Pasta, Baked Potato Bar";

		var dinnerHrs = document.getElementById('dinner');
		dinnerHrs.innerHTML = 'Dinner: \n ' + "-Salad Bar, Burgers, Grilled Cheese";

	}
	


}
