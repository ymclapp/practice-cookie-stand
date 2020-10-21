'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', `8pm `];

var cookieSum = [];

//Constructor function
function Store (name, custMin, custMax, saleAvg) {
    this.store = name;
    this.custMin = custMin;
    this.custMax = custMax;
    this.saleAvg = saleAvg;
    this.hourlyCookies = [];
    this.totalDaily = 0; 
}

Store.prototype.setHourlyCookies = function() {
    for (var i = 0; i < hours.length; i++) {
        this.hourlyCookies[i] = random(this.custMin, this.custMax, this.saleAvg);
    }
};

Store.prototype.setCookieSum = function() {
    for (var i = 0; i < this.hourlyCookies.length; i++) {
        this.totalDaily += this.hourlyCookies[i];
    }
};

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


var seattleStore = new Store (`Seattle`, 23, 65, 6.3);
seattleStore.setHourlyCookies();
seattleStore.setCookieSum();

var tokyoStore = new Store (`Tokyo`, 3, 24, 1.2);
tokyoStore.setHourlyCookies();
tokyoStore.setCookieSum();
    
var dubaiStore = new Store (`Dubai`, 11, 38, 3.7);
dubaiStore.setHourlyCookies();
dubaiStore.setCookieSum();
    
var parisStore = new Store (`Paris`, 20, 38, 2.3);
parisStore.setHourlyCookies();
parisStore.setCookieSum();
    
var limaStore = new Store (`Lima`, 2, 16, 4.6);
limaStore.setHourlyCookies();
limaStore.setCookieSum();

var createStore = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];

createHeaderRow();

for(var i = 0; i < createStore.length; i++) {
    createStore[i].render();
}

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

