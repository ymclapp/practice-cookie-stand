'use strict';

const merchandise = [
    {design: `Maroon Salmon`, price: 20, item: `101`, available: true},
    {design: `White Salmon`, price: 20, item: `102`, available: true},
    {design:`Take Me Home Tonight`, price: 25, item: `103`, available: true},
    {design:`I Heart Pat\'s`, price: 20, item: `104`, available: false},
    {design: `Salmon Keychain`, price: 5, item: `201`, available: true},
    {design: `Salmon Lapel Pin`, price: 7, item: `202`, available: true},
    {design: `Got Cookies Sticker`, price: 3, item: `203`, available: false},
    {design: `Cookies for Every One Coozie`, price: 4, item: `204`, available: true}
];

const merchAvailable = merchandise.filter (merch => merch.available === true);



var shirtSizes = [`X Small`, `Small`, `Medium`, `Large`, `X Large`, `XX Large`, `XXX Large`];

var subscription = [
    {plan: `Just this once please`, price: 40}, 
    {plan: `Can only handle them every six months`, price: 80},
    {plan: `Gotta have them every month`, price: 350},
];

var quantity = [`1`, `2`, `3`, `4`, `5`];

//To do:  create a function to map through the merchandise and show what is available in a drop down menu

// function merchAvailable() {
//     // Establish the array which acts as a data source for the list
//     let listData = merchandise[0],
//     // Make a container element for the list
//     listContainer = document.createElement('div'),
//     // Make the list
//     listElement = document.createElement('ul'),
//     // Set up a loop that goes through the items in listItems one at a time
//     numberOfListItems = listData.length,
//     listItem,
//     i;

//     // Add it to the page
//     document.getElementsByTagName('body')[0].appendChild(listContainer);
//     listContainer.appendChild(listElement);

//     for (i = 0; i < numberOfListItems; ++i) {
//         // create an item for each one
//         listItem = document.createElement('li');

//         // Add the item text
//         listItem.innerHTML = listData[i];

//         // Add listItem to the listElement
//         listElement.appendChild(listItem);
//     }
// }

// // Usage
// makeList();

//To do:  build a function to accept the on click and write the order info to the shipping page or something

function handleFormSubmit(event) {
    event.preventDefault();
    
    var storeInput = document.getElementById(`name`);
    var storeValue = storeInput [`value`];
    var custMinInput = document.getElementById(`custMin`);
    var custMinValue = custMinInput [`value`];
    var custMaxInput = document.getElementById(`custMax`);
    var custMaxValue = custMaxInput [`value`];
    var saleAvgInput = document.getElementById(`saleAvg`);
    var saleAvgValue = saleAvgInput[`value`];
var newStore = new Store (storeValue, custMinValue, custMaxValue,saleAvgValue);
newStore.setHourlyCookies();
newStore.setCookieSum();
newStore.render();
}

var formEvent = document.getElementById (`storeForm`);
formEvent.addEventListener(`submit`, handleFormSubmit);
//To do:  build a function to create the subtotal for the page
//To do:  build a function to show the number of items selected near subtotal
//To do:  create an event when Order is clicked then it will go to the shipping page
//To do:  shows another line to order from when the previous has been used
//To do:  only shows sizes option when a shirt is selected


// function random (custMin, custMax, hourlyCookies) {
//     return Math.floor(Math.random() * ((custMax - custMin) + custMin) * hourlyCookies);
// }

// var parentElement = document.getElementById(`stores`);

// var storesTable = document.getElementById(`storesTable`);

// //Adds the header row of hours and Daily Location Total - works
// function createHeaderRow() {
//     var tableHead = document.getElementById(`storesTableHead`);
//     var tableHeaderRow = document.getElementById(`storesTableHeadRow`);
//     var storesData = document.createElement(`td`);
//     tableHeaderRow.appendChild(storesData);

//     for (var i = 0; i < hours.length; i++) {
//     var hoursData = document.createElement(`td`);
//     hoursData.textContent = hours[i];
//     tableHeaderRow.appendChild(hoursData);
// }

// storesData.textContent = `Daily Location Total`;
// tableHeaderRow.appendChild(storesData);
// tableHead.appendChild(tableHeaderRow);
// storesTable.appendChild(tableHead);
// }

// //Function to add a store to the table
// Store.prototype.render = function() {
//     var storesBody = document.createElement(`tbody`);
//     var storesRow = document.createElement(`tr`);
//     var storesData = document.createElement(`td`);
//     var cookieSales = [];
//     storesData.textContent = this.store;
//     storesRow.appendChild(storesData);
//     for(var i = 0; i < hours.length; i++) {
//         var salesData = document.createElement(`td`);
//         salesData.textContent = this.hourlyCookies[i];
//         storesRow.appendChild(salesData);
//         cookieSales[i] = this.hourlyCookies[i];
//     }
//     cookieSales.push(this.totalDaily);
//     cookieSum.push(cookieSales);
//     storesData = document.createElement(`td`);
//     storesData.textContent = this.totalDaily;
//     storesRow.appendChild(storesData);
//     storesBody.appendChild(storesRow);
//     storesTable.appendChild(storesBody);
//     createTotalRow();
// };

// //Function to create footer row
// function createTotalRow() {
//     var totalFooter = document.createElement(`tfoot`);
//     var totalRow = document.createElement(`tr`);
//     // var storesData = document.createElement(`td`);
//     // storesData.textContent = `Totals`;
//     // totalRow.appendChild(storesData);
//     // for(var i = 0; i < hours.length+1; i++) {
//     //     var ctData = document.createElement('td');
//     //     ctData.textContent = sumArray(i);
//     //     totalRow.appendChild(ctData);
//     // }
//     // totalRow.appendChild(storesData);
//     totalRow.textContent = `Totals`;
//     totalFooter.appendChild(totalRow);
//     storesTable.appendChild(totalFooter);
//     parentElement.appendChild(storesTable);
// }

// function sumArray(i) {
//     var total = 0;
//     for (var j = 0; j < cookieSum.length; j++) {
//         total += cookieSum[j][i];
//     }
//     return total;
// };



// createHeaderRow();


// function handleFormSubmit(event) {
//     event.preventDefault();
    
//     var storeInput = document.getElementById(`name`);
//     var storeValue = storeInput [`value`];
//     var custMinInput = document.getElementById(`custMin`);
//     var custMinValue = custMinInput [`value`];
//     var custMaxInput = document.getElementById(`custMax`);
//     var custMaxValue = custMaxInput [`value`];
//     var saleAvgInput = document.getElementById(`saleAvg`);
//     var saleAvgValue = saleAvgInput[`value`];
// var newStore = new Store (storeValue, custMinValue, custMaxValue,saleAvgValue);
// newStore.setHourlyCookies();
// newStore.setCookieSum();
// newStore.render();
// }

// var formEvent = document.getElementById (`storeForm`);
// formEvent.addEventListener(`submit`, handleFormSubmit);




