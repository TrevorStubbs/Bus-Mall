'use strict';

// Get the section where the images will go and place it in a global variable
let parentElement = document.getElementById('image-section');

// Create an array of all image objects
let allImages = [];

// Image object constructor
function ProductImage(fileName, name){
  this.fileName = fileName;
  this.name = name;
  //Set alt and title from filename
  let splitFile1 = this.fileName.split('/')[1];
  let splitFile2 = splitFile1.split('.')[0];
  this.id = splitFile2;
  // I know this is redundant but it's more descriptive
  this.title = this.id;
  this.alt = this.id;
  // votes and views properties
  this.votes = 0;
  this.views = 0;
  // Push this object into the big array
  allImages.push(this);
}

// Method to generate and place an image
ProductImage.prototype.imageElementGenerator = function() {
  //create an img element
  let imageElement = document.createElement('img');
  // Assign the element these properties
  imageElement.id = this.id;
  imageElement.src = this.fileName;
  imageElement.alt = this.alt;
  imageElement.title = this.title;
  // append this new element to the parent element
  parentElement.appendChild(imageElement);
};



// Instantiate each image
new ProductImage('img/bag.jpg', 'Droid Bag');
new ProductImage('img/banana.jpg', 'Banana Slicer');
new ProductImage('img/bathroom.jpg', 'Toilet Tablet Holder');
new ProductImage('img/boots.jpg', 'Toeless Gumboots');
new ProductImage('img/breakfast.jpg', 'Breakfast Alarm Clock');
new ProductImage('img/bubblegum.jpg', 'Meatball Gum');
new ProductImage('img/chair.jpg', 'Arousal Chair');
new ProductImage('img/cthulhu.jpg', 'Elder God');
new ProductImage('img/dog-duck.jpg', 'Howard the Dog');
new ProductImage('img/dragon.jpg', 'Magic Dragon Meat');
new ProductImage('img/pen.jpg', 'Ink Mouth');
new ProductImage('img/pet-sweeper.jpg', 'Dog Broom');
new ProductImage('img/scissors.jpg', 'Pizza Scissors');
new ProductImage('img/shark.jpg', 'Husband\'s New Couch');
new ProductImage('img/sweep.jpg', 'Dirty Baby');
new ProductImage('img/tauntaun.jpg', 'Luke\'s Bed');
new ProductImage('img/unicorn.jpg', 'Never Ending Life');
new ProductImage('img/usb.jpg', 'Wiggler');
new ProductImage('img/water-can.jpg', 'Pointless Work');

allImages[0].imageElementGenerator();
allImages[1].imageElementGenerator();
allImages[2].imageElementGenerator();


// Global Random Number Gen (Exclusive)
function randomNumber(min, max) {
  return Math.floor(Math.random()* (min-max));
}

console.log(allImages);

