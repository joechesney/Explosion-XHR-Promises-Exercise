"use strict";


// format the data
module.exports.formatData = function (data){
  // mutate the products objects and change the type to the matching string from the string json file, and add a property calledd 'category' on each product that has the value of the matching string from the categories json file
/*
FROM THIS:
{
  "fairy_sparklers": {
    "id": 0,
    "type": 0,
    "name": "Fairy Sparklers",
    "description": "Multi-colored sparklers that are safe for any age."
  }
},
TO THIS:
{
  "fairy_sparklers": {
    "id": 0,
    "type": "personal",
    "name": "Fairy Sparklers",
    "description": "Multi-colored sparklers that are safe for any age.",
    "category": "Fireworks"
  }
},
  */
  // MY ARRAYS DO NOT MATCH THE SAME ORDER AS JOES
  // MY PRODUCTS ARE IN data[1] INSTEAD OF data[2] LIKE HIS
  let products = data[1];
  let types = data[2];
  let categories = data[0];
  
  // products is the entire products object, which is an array of objects
  // prod is each individual index in the products array, a product object
  let revisedProds = products.map(function(prod){
    console.log('prod: ',prod);
    let currentProd = Object.keys(prod)[0];
    console.log('currentProd: ',currentProd);

    // this will read the first (and only) property of each product object
    for(let prop in prod){
      for(let i = 0; i < types.length; i++){
        if(prod[prop].type === types[i].id){
          prod[prop].type = types[i].name;
          prod[prop].category = types[i].category;
        }
      }
      for(let k = 0; k < categories.length; k++){
        if(prod[prop].category === categories[k].id){
          prod[prop].category = categories[k].name;
        }
      }
    }
    return prod;
  });
 console.log("revise prods: ", revisedProds);
 return revisedProds;
};

