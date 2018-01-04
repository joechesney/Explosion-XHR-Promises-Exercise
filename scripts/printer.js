"use strict";

module.exports.printProducts = function(products){
  let selection = $('#selection').val();
  let productTable = '<table>';
  productTable += `<tr><td>NAME</td><td>TYPE</td><td>CATEGORY</td><td>PRICE</td>`;
  for(let i = 0; i < products.length; i++){
    for(let prop in products[i]){
      if(selection === products[i][prop].category){
    
        productTable += `<tr>`;
        productTable += `<td>${products[i][prop].name}</td>`;
        productTable += `<td>${products[i][prop].type}</td>`;
        productTable += `<td>${products[i][prop].category}</td>`; 
        productTable += `<td>${products[i][prop].price}</td>`;            
        productTable += `</tr>`;
      }

    }
  }

  productTable += '</table>';
  $('#productOutput').html(productTable);
};