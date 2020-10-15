'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', `8pm `];
let cookieSum = [];
// let stores = [`Seattle`, `Tokyo`, `Dubai`, `Paris`, `Lima`];
// let value = [];
// let data = [];
// let cookiesSalesPerHour = [];
// let storesCurrent = [
//     {store: `Seattle`, value: 23, vista: 65, avgCookiePerSale: 6.3, hoursOpen: `6:00am - 8:00pm`},
//     {store: `Tokyo`, value: 3, vista: 24, avgCookiePerSale: 1.2, hoursOpen: `6:00am - 8:00pm`},
//     {store: `Dubai`, value: 11, vista: 38, avgCookiePerSale: 3.7, hoursOpen: `6:00am - 8:00pm`},
//     {store: `Paris`, value: 20, vista: 38, avgCookiePerSale: 2.3, hoursOpen: `6:00am - 8:00pm`},
//     {store: `Lima`, value: 2, vista: 16, avgCookiePerSale: 4.6, hoursOpen: `6:00am - 8:00pm`},
// ];
//Gives me the calculation, through mapping for one "hour".  Now need to get it to go for all hours of operation. - works
// let cust = storesCurrent.map (data => (Math.random()*((data.vista - data.value) * data.avgCookiePerSale)).toFixed(2));
//     let diff = cust;
//     console.log (diff);

//Gives me the calculation, through mapping and for loop for the hours of operation.  Now need to get them to be assigned to each store. - works

//Need this function to map over the

// function hourlyCookieSales () {
//     for (let i = 0; i < hours.length; i++) {
//         let cust = storesCurrent.map (data => (Math.random()*((data.vista - data.value) * data.avgCookiePerSale)).toFixed(2));
//         let diff = cust;
//         console.log (diff);
//     }
   
// };
// hourlyCookieSales();

//Need to push the above calculations into each store's array, not just sit on the console.log.


//Constructor function to create new stores - works
//Need to add on to this to calculate the cookies per hour
function Store (store, value, vista, avgCookiePerSale,hoursOpen) {
    this.store = store;
    this.value = value;
    this.vista = vista;
    this.avgCookiePerSale = avgCookiePerSale;
    this.hoursOpen = hoursOpen;
    this.cookiesSalesPerHour = [];
    this.totalDaily = 0;
}

Store.prototype.setCookiesSalesPerHour = function() {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesSalesPerHour[i] = Math.random()*((this.vista - this.value) * this.avgCookiePerSale).toFixed(2);
    }
};

Store.prototype.setCookieSum = function() {
    for (let i = 0; i < this.cookiesSalesPerHour.length; i++) {
        this.totalDaily += this.cookiesSalesPerHour[i];
    }
};

//Change current stores into their own objects - works - moved to the bottom area
// const seattle = new Store (`Seattle`, 23, 65, 6.3, `6:00am - 8:00pm`);
// seattle.setCookiesSalesPerHour();
// seattle.setTotalDaily();

// const tokyo = new Store (`Tokyo`, 3, 24, 1.2, `6:00am - 8:00pm`);
// tokyo.setCookiesSalesPerHour();
// tokyo.setTotalDaily();
    
// const dubai = new Store (`Dubai`, 11, 38, 3.7, `6:00am - 8:00pm`);
// dubai.setCookiesSalesPerHour();
// dubai.setTotalDaily();
    
// const paris = new Store (`Paris`, 20, 38, 2.3, `6:00am - 8:00pm`);
// paris.setCookiesSalesPerHour();
// paris.setTotalDaily();
    
// const lima = new Store (`Lima`, 2, 16, 4.6, `6:00am - 8:00pm`);
// lima.setCookiesSalesPerHour();
// lima.setTotalDaily();

// console.log(seattle);

//Trying to get bullets to work - does NOT work
// const seattleList = document.querySelector(".seattleList");
// let list = document.createElement ("LI");
// seattleList.innerText = `storesCurrent.seattle`;
// document.body.appendChild(seattleList);

//Need to write to the table

//The functions below (down to ** line) worked to create header row, but not other rows
// function generateTable(table, stores) {
//     for(let element of stores) {
//         let row = table.insertRow();
//         for (let key in element) {
//             let cell = row.insertCell();
//             let text = document.createTextNode(element[key]);
//             cell.appendChild(text);
//         }
//     }
//  };

// function generateTableHead(table, hours) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of hours) {
//         let th = document.createElement("th");
//         let text = document.createTextNode(key);
//         th.appendChild(text);
//         row.appendChild(th);
//     }
// };

// let table = document.querySelector("table");
// // let data = hours [0];
// generateTable(table, stores);
// generateTableHead(table, hours);
//********************************************** */

//document is the webpage window and getElementById is "opening" that element to write/create to it.  Have to "open" by layers (ie: main then table then head then row, etc.)

//Legend:
//stores (in html) = main section in html -- locations in old
//storesTable (in JS) - storesTable (in html) = table for the stores data -- locationsTable in old
//storesTHead (in JS) - storesTableHead (in html) = houses the header row data -- locTableHead in old
//storesTHRow (in JS) - storesTableHeadRow (in html) = this will show the times for the cookie sales per hour -- locRow in old
//storesData (in JS) - td (in html) -- locData in old
//Store (in JS) = constructor for adding store -- Loc in old
//storeBody = tbody
//storeRow = tr
//storesData = td - will this work?


let parentElement = document.getElementById(`stores`);
let storesTable = document.getElementById(`storesTable`);


//Adds the header row of hours and Daily Location Total - works
function createHeaderRow() {
    let storesTHead = document.getElementById(`storesTableHead`);
    let storesTHRow = document.getElementById(`storesTableHeadRow`);
    let storesData = document.createElement(`td`);
    storesTHRow.appendChild(storesData);

    for (let i = 0; i < hours.length; i++) {
    let hoursData = document.createElement(`td`);
    hoursData.textContent = hours[i];
    storesTHRow.appendChild(hoursData);
}

storesData.textContent = `Daily Location Total`;
storesTHRow.appendChild(storesData);
storesTHead.appendChild(storesTHRow);
storesTable.appendChild(storesTHead);
}



//Function to add a store to the table
Store.prototype.render = function() {
    let storeBody = document.createElement(`tbody`);
    let storeRow = document.createElement(`tr`);
    let storesData = document.createElement(`td`);
    let cookieSales = [];
    storesData.textContent = this.store;
    storeRow.appendChild(storesData);
    for(let i = 0; i < hours.length; i++) {
        let salesData = document.createElement(`td`);
        salesData.textContent = this.cookiesSalesPerHour[i];
        storesRow.appendChild(salesData);
        cookieSales[i] = this.cookiesSalesPerHour[i];
    }
    cookieSales.push(this.totalDaily);
    cookieSum.push(cookieSales);
    storesData = document.createElement(`td`);
    storesData.textContent = this.totalDaily;
    storeRow.appendChild(storesData);
    storeBody.appendChild(storeRow);
    storesTable.appendChild(storeBody);
    createTotalRow();
};

//Function to create footer row
function createTotalRow() {
    let totalFooter = document.createElement(`tfoot`);
    let totalRow = document.createElement(`tr`);
    let totalData = document.createElement(`td`);
    totalData.textContent = `Totals`;
    totalRow.appendChild(totalData);
    for(let i = 0; i < hours.length+1; i++) {
        let ctData = document.createElement('td');
        ctData.textContent = sumArray(i);
        totalRow.appendChild(ctData);
    }
    totalFooter.appendChild(totalRow);
    storesTable.appendChild(totalFooter);
    parentElement.appendChild(storesTable);
}

function sumArray(i) {
    let total = 0;
    for (let j = 0; j < cookieSum.length; j++) {
        total += cookieSum[j][i];
    }
    return total;
}

const seattleStore = new Store (`Seattle`, 23, 65, 6.3, `6:00am - 8:00pm`);
seattle.setCookiesSalesPerHour();
seattle.setTotalDaily();

const tokyoStore = new Store (`Tokyo`, 3, 24, 1.2, `6:00am - 8:00pm`);
tokyo.setCookiesSalesPerHour();
tokyo.setTotalDaily();
    
const dubaiStore = new Store (`Dubai`, 11, 38, 3.7, `6:00am - 8:00pm`);
dubai.setCookiesSalesPerHour();
dubai.setTotalDaily();
    
const parisStore = new Store (`Paris`, 20, 38, 2.3, `6:00am - 8:00pm`);
paris.setCookiesSalesPerHour();
paris.setTotalDaily();
    
const limaStore = new Store (`Lima`, 2, 16, 4.6, `6:00am - 8:00pm`);
lima.setCookiesSalesPerHour();
lima.setTotalDaily();

let createStore = [`seattleStore`, `tokyoStore`, `dubaiStore`, `parisStore`, `limaStore`];

createHeaderRow();

for(let i = 0; i < createStore.length; i++) {
    createStore[i].render();
};

