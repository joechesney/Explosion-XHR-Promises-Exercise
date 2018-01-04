"use strict";
// const productOutput = ;
module.exports.printProducts = function(products){
  let productTable = '<table>';
  productTable += `<tr><td>NAME</td><td>TYPE</td><td>CATEGORY</td><td>PRICE</td>`;
  for(let i = 0; i < products.length; i++){
    for(let prop in products[i]){
      productTable += `<tr>`;
      productTable += `<td>${products[i][prop].name}</td>`;
      productTable += `<td>${products[i][prop].type}</td>`;
      productTable += `<td>${products[i][prop].category}</td>`; 
      productTable += `<td>${products[i][prop].price}</td>`;            
      productTable += `</tr>`;

    }
  }

  productTable += '</table>';
  console.log(productTable);
  // productOutput.innerHTML = productTable;
  $('#productOutput').html(productTable);
};