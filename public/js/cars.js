"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageCounter = 1;
var carsCounter = 2;


function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
    var result = '<div class="row">'
    carsJSON.forEach(x => {
        result += '<div class="col-md-4 car">'
        result += `<h2>${x.Make}</h2>`
        result += `<p><strong>Model: </strong>${x.Model}</p>`
        result += `<p><strong>Year: </strong> ${x.Year}</p>`
        result += '</div>'
    })
    result += '</div>'
    return result
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
    var x = formatCars(carsJSON)
    $('#cars').append(x)
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  $.ajax({
    url: `${baseUrl}${pageCounter}/${carsCounter}`,
    dataType : 'jsonp',
    success: function(data) {
        addCarsToDOM(carsJSON)
    }
  })
  pageCounter++
}
