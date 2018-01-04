"use strict";

const factory = require("./factory");
const formatter = require('./formatter');
const printer = require('./printer');
const acmeData = [];


// factory.getCategories()
// .then( function(categories){
//   console.log("categories: ", categories);
//   acmeData.push(categories);
//   return factory.getTypes();
// }).then( function(types){
//   console.log("types: ", types);
//   acmeData.push(types);  
//   return factory.getProducts();
// }).then(function(products){
//   console.log("products: ",products);
//   acmeData.push(products);  
//   console.log("acmeData",acmeData);
// })
// .catch(function(error){
//   console.log(error.status, error.statusText);
// }); // end of getCategories function


let promiseArray = [
  factory.getCategories(),
  factory.getProducts(),
  factory.getTypes()
];
let formattedData;
Promise.all(promiseArray)
.then(function(dataArray){
  console.log("promiseArray: ",promiseArray);
  formattedData = formatter.formatData(dataArray);
  console.log('formattedData: ', formattedData);
  
})
.catch(function(error){
  console.log(error);
}); // end of getCategories function

$('#selection').on('change', function(){
  
  printer.printProducts(formattedData);
});









