'use strict';

var shirts = [
    {design: `Maroon Salmon`, price: 20, available: true},
    {design: `White Salmon`, price: 20, available: true},
    {design:`Take Me Home Tonight`, price: 25, available: true},
    {design:`I Heart Pat\'s`, price: 20, available: true}
];
var shirtSizes = [`X Small`, `Small`, `Medium`, `Large`, `X Large`, `XX Large`, `XXX Large`];
var bling = [
    {item: `Salmon Keychain`, price: 5, available: true},
    {item: `Salmon Lapel Pin`, price: 7, available: true},
    {item: `Got Cookies Sticker`, price: 3, available: true},
    {item: `Cookies for Every One Coozie`, price: 4, available: true}
];
var subscription = [
    {plan: `Just the once please`, price: 40}, 
    {plan: `Can only handle them every six months`, price: 80},
    {plan: `Gotta have them every month`, price: 350},
];

var quantity = [`1`, `2`, `3`, `4`, `5`];

//To do:  create a function to map through the merchandise and show what is available in a drop down menu

//To do:  build a function to calculate the item and price based on selection
//To do:  build a function to create the subtotal for the page
//To do:  build a function to show the number of items selected near subtotal
//To do:  create an event when Order is clicked then it will go to the shipping page
//To do:  shows another line to order from when the previous has been used
//To do:  only shows sizes option when a shirt is selected


function random (custMin, custMax, hourlyCookies) {
    return Math.floor(Math.random() * ((custMax - custMin) + custMin) * hourlyCookies);
}

var parentElement = document.getElementById(`stores`);

var storesTable = document.getElementById(`storesTable`);

//Adds the header row of hours and Daily Location Total - works
function createHeaderRow() {
    var tableHead = document.getElementById(`storesTableHead`);
    var tableHeaderRow = document.getElementById(`storesTableHeadRow`);
    var storesData = document.createElement(`td`);
    tableHeaderRow.appendChild(storesData);

    for (var i = 0; i < hours.length; i++) {
    var hoursData = document.createElement(`td`);
    hoursData.textContent = hours[i];
    tableHeaderRow.appendChild(hoursData);
}

storesData.textContent = `Daily Location Total`;
tableHeaderRow.appendChild(storesData);
tableHead.appendChild(tableHeaderRow);
storesTable.appendChild(tableHead);
}

//Function to add a store to the table
Store.prototype.render = function() {
    var storesBody = document.createElement(`tbody`);
    var storesRow = document.createElement(`tr`);
    var storesData = document.createElement(`td`);
    var cookieSales = [];
    storesData.textContent = this.store;
    storesRow.appendChild(storesData);
    for(var i = 0; i < hours.length; i++) {
        var salesData = document.createElement(`td`);
        salesData.textContent = this.hourlyCookies[i];
        storesRow.appendChild(salesData);
        cookieSales[i] = this.hourlyCookies[i];
    }
    cookieSales.push(this.totalDaily);
    cookieSum.push(cookieSales);
    storesData = document.createElement(`td`);
    storesData.textContent = this.totalDaily;
    storesRow.appendChild(storesData);
    storesBody.appendChild(storesRow);
    storesTable.appendChild(storesBody);
    createTotalRow();
};

//Function to create footer row
function createTotalRow() {
    var totalFooter = document.createElement(`tfoot`);
    var totalRow = document.createElement(`tr`);
    // var storesData = document.createElement(`td`);
    // storesData.textContent = `Totals`;
    // totalRow.appendChild(storesData);
    // for(var i = 0; i < hours.length+1; i++) {
    //     var ctData = document.createElement('td');
    //     ctData.textContent = sumArray(i);
    //     totalRow.appendChild(ctData);
    // }
    // totalRow.appendChild(storesData);
    totalRow.textContent = `Totals`;
    totalFooter.appendChild(totalRow);
    storesTable.appendChild(totalFooter);
    parentElement.appendChild(storesTable);
}

function sumArray(i) {
    var total = 0;
    for (var j = 0; j < cookieSum.length; j++) {
        total += cookieSum[j][i];
    }
    return total;
};



createHeaderRow();


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




