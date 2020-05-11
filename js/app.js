'use strict';

// Get the section where the images will go and place it in a global variable
let parentElement = document.getElementById('image-section');
let parentForm = document.getElementById('rounds');

// Create an array of all image objects
let allImages = [];

// Create a round counter
let userDefinedRounds = 25;

// keep track of the last images viewed
// TODO - figure out how to prevent having the same 3 photos come up again.
let lastViewed = [];

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
new ProductImage('img/pet-sweep.jpg', 'Dog Broom');
new ProductImage('img/scissors.jpg', 'Pizza Scissors');
new ProductImage('img/shark.jpg', 'Husband\'s New Couch');
new ProductImage('img/sweep.png', 'Dirty Baby');
new ProductImage('img/tauntaun.jpg', 'Luke\'s Bed');
new ProductImage('img/unicorn.jpg', 'Never Ending Life');
new ProductImage('img/usb.gif', 'Wiggler');
new ProductImage('img/water-can.jpg', 'Pointless Work');

function generateImages() {
  // Clear the img element
  parentElement.textContent = '';
  let firstIndex = randomNumber(0, allImages.length);
  let secondIndex = randomNumber(0, allImages.length);
  let thirdIndex = randomNumber(0, allImages.length);

  while(secondIndex === firstIndex){
    secondIndex = randomNumber(0, allImages.length);
  }

  while(thirdIndex === secondIndex || thirdIndex === firstIndex){
    thirdIndex = randomNumber(0, allImages.length);
  }

  allImages[firstIndex].imageElementGenerator();
  allImages[firstIndex].views++;

  allImages[secondIndex].imageElementGenerator();
  allImages[secondIndex].views++;

  allImages[thirdIndex].imageElementGenerator();
  allImages[thirdIndex].views++;
}


// Global Random Number Gen (Exclusive)
function randomNumber(min, max) {
  return Math.floor(Math.random()* (max-min));
}

generateImages();

// Event listener for the voting
parentElement.addEventListener('click', function handler() {
  var titleOfLastClickedProduct = event.target.title;
  for(let i = 0; i < allImages.length; i++){
    if(allImages[i].title === titleOfLastClickedProduct){
      allImages[i].votes++;
    }
  }
  // Remove the listener
  userDefinedRounds--;
  if(userDefinedRounds <= 0){
    this.removeEventListener('click', handler);
  }
  generateImages();
});

// Event Listener for the submit button
parentForm.addEventListener('submit', function(event){
  event.preventDefault();
  let rounds = Number(event.target.roundSelect.value);
  userDefinedRounds = rounds;
  console.log(rounds);
});