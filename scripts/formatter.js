"use strict";

// format the data

module.exports.formatData = function (data){
  console.log("data!!!", data);
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
  let revisedProds = data[1].map(function(prod){
    for(let prop in prod){
      prod[prop].category = "new thing";
      prod[prop].type = "blowy up thing";

    }
    return prod;

  });
 console.log("revise prods: ", revisedProds);

};

