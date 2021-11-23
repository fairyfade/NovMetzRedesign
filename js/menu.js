function updateDate(){
	var d = new Date;
	var weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

	//update date
	var elDate = document.getElementById('date');
	elDate.textContent = weekDays[d.getDay()] + ' ' + (d.getMonth() + 1) + '/' + d.getDate();
}
var elDate = document.getElementById('date');
elDate.onload = updateDate();								//update date upon page load


var allItems = [];		//store all menu items
function item(name,diets,allergies){
	this.name = name;
	this.diets = diets;
	this.allergies = allergies;
}
item('scrambledEggs',['vegetarian'],['eggs']);
item('waffles',['vegetarian'],['gluten','milk','eggs','soya']);
item('pancakes',['vegetarian'],['gluten','eggs','milk','soya']);
item('turkeySausage',['glutenfree'],[]);
item('cornbread',['vegetarian'],['gluten','eggs','milk','soya']);
item('sgBiscuits',[],['gluten','milk','soya']);



function filter(x){
	document.getElementById('').style.display = "none";		//filter out items
}

function filterAllergies(x){
	for(i=0; i<; i++){

	}
}

document.getElementById('vegetarian').onclick = ;	//only show vegetarian options


function reset(){
	//make all menu items visible
	document.getElementByClass('item').style.display = block;
}
document.getElementById('clear').onclick = reset();	//clear filters on click


