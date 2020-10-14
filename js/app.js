'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', `8pm `];
let stores = [`Seattle`, `Tokyo`, `Dubai`, `Paris`, `Lima`];
let value = [];
// let data = [];
let cookiesSalesPerHour = [];
let storesCurrent = [
    {store: `Seattle`, value: 23, vista: 65, avgCookiePerSale: 6.3, hoursOpen: `6:00am - 8:00pm`},
    {store: `Tokyo`, value: 3, vista: 24, avgCookiePerSale: 1.2, hoursOpen: `6:00am - 8:00pm`},
    {store: `Dubai`, value: 11, vista: 38, avgCookiePerSale: 3.7, hoursOpen: `6:00am - 8:00pm`},
    {store: `Paris`, value: 20, vista: 38, avgCookiePerSale: 2.3, hoursOpen: `6:00am - 8:00pm`},
    {store: `Lima`, value: 2, vista: 16, avgCookiePerSale: 4.6, hoursOpen: `6:00am - 8:00pm`},
];
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

Store.prototype.setCookieSalesPerHour = function() {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesSalesPerHour[i] = Math.random()*((this.vista - this.value) * this.avgCookiePerSale).toFixed(2);
    }
};

Store.prototype.setTotalDaily = function() {
    for (let i = 0; i < this.cookiesSalesPerHour.length; i++) {
        this.totalDaily += this.cookiesSalesPerHour[i];
}
};

//Change current stores into their own objects - works
const seattle = new Store (`Seattle`, 23, 65, 6.3, `6:00am - 8:00pm`);
seattle.setCookieSalesPerHour();
seattle.setTotalDaily();

const tokyo = new Store (`Tokyo`, 3, 24, 1.2, `6:00am - 8:00pm`);
tokyo.setCookieSalesPerHour();
tokyo.setTotalDaily();
    
const dubai = new Store (`Dubai`, 11, 38, 3.7, `6:00am - 8:00pm`);
dubai.setCookieSalesPerHour();
dubai.setTotalDaily();
    
const paris = new Store (`Paris`, 20, 38, 2.3, `6:00am - 8:00pm`);
paris.setCookieSalesPerHour();
paris.setTotalDaily();
    
const lima = new Store (`Lima`, 2, 16, 4.6, `6:00am - 8:00pm`);
lima.setCookieSalesPerHour();
lima.setTotalDaily();

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
//stores (in html) = main section in html
//storesTable (in JS) - storesTable (in html) = table for the stores data
//storesTHead (in JS) - storesTableHead (in html) = houses the header row data
//storesTHRow (in JS) - storesTableHeadRow (in html) = this will show the times for the cookie sales per hour
//storesData (in JS) - td (in html)


let parentElement = document.getElementById(`stores`);
let storesTable = document.getElementById(`storesTable`);

function createHeaderRow() {
    let storesTHead = document.getElementById(`storesTableHead`);
    let storesTHRow = document.getElementById(`storesTableHeadRow`);
    let storesData = document.createElement(`td`);
    storesTHRow.appendChild(storesData);


//create rows of stores data
    for (let i = 0; i < hours.length; i++) {
    let hourData = document.createElement(`td`);
    hourData.textContent = hours[i];
    storesTHRow.appendChild(hourData);
}

storesData.textContent = `Daily Location Total`;
storesTHRow.appendChild(storesData);
storesTHead.appendChild(storesTHRow);
storesTable.appendChild(storesTHead);
};
