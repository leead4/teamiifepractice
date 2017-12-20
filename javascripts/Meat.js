// This SandwichMaker IIFE augments the original one
"use strict";
console.log("hello meat");

var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatOptions = ["roastbeef", "salami", "sausage", "pepperoni"];
  var breadOptions = ["rye", "white", "wheat", "french"];
  var veggieOptions = ["pickle", "lettuce", "tomato", "olive"];
  var condimentOptions = ["ketchup", "mustard", "mayo", "sriracha"];
 
 var menu = {

    "meatPrices" : {
          "roastbeef": 1,
          "salami": 1.5,
          "sausage": 2,
          "pepperoni": 1.5, 
      },
    "breadPrices" : {
          "rye": 1,
          "white": 1.5,
          "wheat": 2,
          "french": 1.5, 
      },
    "veggiePrices" : {
          "pickle": 1,
          "lettuce": 1.5,
          "tomato": 2,
          "olive": 1.5, 
      }, 
    "condimentPrices" : {
          "ketchup": 1,
          "mustard": 1.5,
          "mayo": 2,
          "sriracha": 1.5, 
      }

};


  maker.loadOptions = function(topping){
  // this function sends back a list of topping options for our select dropdown

    console.log('look at me im a topping', topping);
    var options;
    switch (topping){
      case "bread":
          options = breadOptions;
          console.log("op", options);
          break;
      case "meat":
          options = meatOptions;
          console.log("op", options);
          break;
      case "veggie":
          options = veggieOptions;
          console.log("op", options);
          break;
      case "condiment":
          options = condimentOptions;
          console.log("op", options);
          break;
      }
    return options;
  }


  maker.addMyTopping = function(toppingType, myTopping){
    console.log("parameters", myTopping, toppingType);
    var findKey = toppingType + 'Prices';
    var pricesObject = menu[findKey]
    var priceForTopping = pricesObject[myTopping];
      SandwichMaker.addTopping(priceForTopping);
      SandwichMaker.setSandwichName(myTopping);

  }

  maker.addSandwichToOrder = function(mySandwhich){

    // I want to be able to add a sandwhich to an order





  }

  maker.removeSandwichFromOrder = function(mySandwhich){


  // I want to remove it too
  
  }

  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker);