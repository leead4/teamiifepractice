
// Variable to hold the final price. Default to 0.

var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
// var meatChooser = document.getElementById("meat-chooser");
var sandChooser = document.getElementById("sandwich");
var showPriceBtn = document.getElementById("showPrice");
var showSandwichBtn = document.getElementById("showSandwich");
var sandwichOutput = document.getElementById('sandwichOutput');
var sandwichCostOutput = document.getElementById('sandwichCostOutput');
var x = document.getElementById("targetSelect");




sandChooser.addEventListener("change", function(event) {
	console.log("suuup", SandwichMaker);
  // Get the value chosen from the DOM
  // clear out any old selections 
	while (x.firstChild) {
    	x.removeChild(x.firstChild);
	}
// populate our second dropdown
  	selectedTopping = event.target.value;
  	console.log(selectedTopping);
  	var selectlist = SandwichMaker.loadOptions(selectedTopping);
  		console.log("my return", selectlist);
	  	for (var i =0; i < selectlist.length; i++){
			var option = document.createElement("option");
			option.text = selectlist[i];
			x.add(option);  		
	  	}

});

x.addEventListener("change", function(){
		var selectedMyTopping = event.target.value;
		SandwichMaker.addMyTopping(selectedTopping, selectedMyTopping);
	});


showPriceBtn.addEventListener('click', function(){
	var price_name = SandwichMaker.getSandwichPrice();
	console.log(price_name);
	var price_nameNode = document.createTextNode(price_name);
	var price_nameElement = document.createElement('H3');
		price_nameElement.appendChild(price_nameNode);

	sandwichCostOutput.appendChild(price_nameElement);
});

showSandwichBtn.addEventListener("click", function(){
	var s_name = SandwichMaker.getSandwichName();
	console.log(s_name);
	var s_nameNode = document.createTextNode(s_name);
	var s_nameElement = document.createElement('H3');
		s_nameElement.appendChild(s_nameNode);

	sandwichOutput.appendChild(s_nameElement);
});







