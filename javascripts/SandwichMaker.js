"use strict";
console.log("hello sandwhich maker");

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;
  var sandwhich = [];

  // this is where are getters and setters are
  // check this explanation out for a little clarity 
  // https://javascriptplayground.com/blog/2013/12/es5-getters-setters/

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      console.log(totalPrice);
    },
    setSandwichName: function(something) {
      	sandwhich.push(something);
        console.log(sandwhich);
     },
    getSandwichName: function() {
      return sandwhich;
     },
    getSandwichPrice: function(){
      return totalPrice;
    }
    // addToOrder: function(item){
      
    //   remember to add a comma after getSandwichPrice() closing curly on line 25
    //   here we want to be able to add a sandwhich to an order 
    //   the order could be an object with key value pairs relating to the 
    //   ingredients and their prices this is just like 
    //   setSandwichName or addTopping


    // },
    // getMyOrder: function(){
    //    return currentOrder

    //     all this function does is give us the most current order
    //    just like getSandwichPrice and getSandwichName

    // }

    }
  
})();