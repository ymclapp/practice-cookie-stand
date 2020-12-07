'use strict';

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product(`images/coozie.png`, `Coozie`);
  new Product(`images/heartPat`, `I Heart Pat\'s`);
  new Product(`images/homeTonight.png`, `Take Me Home Tonight`);
  new Product(`images/keychain`, `Salmon Keychain`);
  new Product(`images/lapelPin`, `Salmon Lapel Pin`);
  new Product(`images/maroonSalmon`, `Maroon Salmon T-shirt`);
  new Product(`images/sticker`, 'Salmon Sticker');
  new Product(`images/whiteSalmon`, 'White Salmon T-shirt');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();