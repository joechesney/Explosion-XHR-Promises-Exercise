"use strict";

// Make XHRs to get the datas

module.exports.getCategories = function() {
  return new Promise(function (resolve, reject){
    $.ajax({
      url: '../data/categories.json'
    })
    .done( function(cats){
      resolve(cats.categories);
    })
    .fail(function(error){
      reject(error.statusText);
    });
  });
};

module.exports.getProducts = function() {
  return new Promise(function (resolve, reject){
    $.ajax({
      url: '../data/products.json'
    })
    .done( function(prods){
      resolve(prods.products);
    })
    .fail(function(error){
      reject(error.statusText);
    });
  });
};

module.exports.getTypes = function() {
  return new Promise(function (resolve, reject){
    $.ajax({
      url: '../data/types.json'
    })
    .done( function(types){
      resolve(types.types);
    })
    .fail(function(error){
      reject(error.statusText);
    });
  });
};