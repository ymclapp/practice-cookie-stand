'use strict';
// use strict is almost always the first line of our js files
console.log('It is working!');

// Some elements of coding adapted from Justin's code review

//  var locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookieSum = [];

// Constructor function
function Loc(name, custMin, custMax, cookieAvgSale) {
  this.location = name;
  this.custMin = custMin;
  this.custMax = custMax;
  this.cookieAvgSale = cookieAvgSale;
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
}
Loc.prototype.setCookiesEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.cookiesEachHour[i] = random(this.custMin, this.custMax, this.cookieAvgSale);
  }
};

Loc.prototype.setCookieSum = function() {
  for (var i= 0; i < this.cookiesEachHour.length; i++) {
    this.totalDailyCookies += this.cookiesEachHour[i];

  }
};


function random(custMin, custMax, cookiesEachHour) {
  return Math.floor(Math.random() * ((custMax - custMin) + custMin) * cookiesEachHour);
}

// ******--------------^^^^^^Everything ABOVE is complete - this is the code to create the stores and calculations^^^^^^-------------------******

// **----------Everything BELOW is to create the table of sales data-------------**

var parentElement = document.getElementById('locations');

var locationsTable = document.getElementById('locationsTable');

function createHeaderRow() {
  var locTableHead = document.getElementById('locationsHead');
  var locRow = document.getElementById('locationsHeadRow');
  var locData = document.createElement('td');
  locRow.appendChild(locData);

  // Create rows of location data
  for (var i = 0; i < hours.length; i++) {
    var hourData = document.createElement('td');
    hourData.textContent = hours[i];
    locRow.appendChild(hourData);
  }
  locData.textContent = 'Daily Location Total';
  locRow.appendChild(locData);
  locTableHead.appendChild(locRow);
  locationsTable.appendChild(locTableHead);
}

// function to add a store to the table
Loc.prototype.render = function() {
  var locBody = document.createElement('tbody');
  var locRow = document.createElement('tr');
  var locData = document.createElement('td');
  var cookieSales = [];
  locData.textContent = this.location;
  locRow.appendChild(locData);
  for (var i = 0; i < hours.length; i++) {
    var salesData = document.createElement('td');
    salesData.textContent = this.cookiesEachHour[i];
    locRow.appendChild(salesData);
    cookieSales[i] = this.cookiesEachHour[i];
  }
  cookieSales.push(this.totalDailyCookies);
  cookieSum.push(cookieSales);
  locData = document.createElement('td');
  locData.textContent = this.totalDailyCookies;
  locRow.appendChild(locData);
  locBody.appendChild(locRow);
  locationsTable.appendChild(locBody);
  createTotalRow();
};




// function to create footer row
function createTotalRow() {
  var totalFooter = document.createElement('tfoot');
  var totalRow = document.createElement('tr');
  var totalData = document.createElement('td');
  totalData.textContent = 'Totals';
  totalRow.appendChild(totalData);
  for (var i = 0; i < hours.length+1; i++) {
    var ctData = document.createElement('td');
    ctData.textContent = sumArray(i);
    totalRow.appendChild(ctData);
  }
  totalFooter.appendChild(totalRow);
  locationsTable.appendChild(totalFooter);
  parentElement.appendChild(locationsTable);
}

function sumArray(i) {
  var total = 0;
  for (var j = 0; j <cookieSum.length; j++) {
    total += cookieSum[j][i];
  }
  return total;
}

var seattleLoc = new Loc ('Seattle Store', 23,65, 6.3);
seattleLoc.setCookiesEachHour();
seattleLoc.setCookieSum();

var tokyoLoc = new Loc ('Tokyo Store', 3,24, 1.2);
tokyoLoc.setCookiesEachHour();
tokyoLoc.setCookieSum();

var dubaiLoc = new Loc ('Dubai Store', 11, 38, 3.7);
dubaiLoc.setCookiesEachHour();
dubaiLoc.setCookieSum();

var parisLoc = new Loc ('Paris Store', 20, 38, 2.3);
parisLoc.setCookiesEachHour();
parisLoc.setCookieSum();

var limaLoc = new Loc ('Lima Store', 2, 16, 4.6);
limaLoc.setCookiesEachHour();
limaLoc.setCookieSum();

var createLoc = [seattleLoc, tokyoLoc, dubaiLoc, parisLoc, limaLoc];

createHeaderRow();

for(var i = 0; i < createLoc.length; i++){
  createLoc[i].render();
}


function handleFormSubmit(event) {
event.preventDefault();

    var nameInput = document.getElementById('name');
    var nameValue = nameInput['value'];
    var custMinInput = document.getElementById('custMin');
    var custMinValue = custMinInput['value'];
    var custMaxInput = document.getElementById('custMax');
    var custMaxValue = custMaxInput['value'];
    var cookieAvgSaleInput = document.getElementById('cookieAvgSale');
    var cookieAvgSaleValue = cookieAvgSaleInput['value'];
var newLoc = new Loc(nameValue, custMinValue, custMaxValue, cookieAvgSaleValue);
newLoc.setCookiesEachHour();
newLoc.setCookieSum();
newLoc.render();


}  

var formEvent = document.getElementById ('formElement');
formEvent.addEventListener('submit', handleFormSubmit);
