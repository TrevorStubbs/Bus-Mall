'use strict';

// Voting Variable to hide images till the user selects how many rounds they want.
let votingStarted = false;

// Get the section where the images will go and place it in a global variable
let parentElement = document.getElementById('image-section');
let parentForm = document.getElementById('rounds');

// Create an array of all image objects
let allImages = [];

// Create a round counter
let userDefinedRounds = 25;

// keep track of the last images viewed
let lastViewed = [];

// Arrays to populate the chart
var names = [];
var votes = [];
var views = [];

// Image object constructor
function ProductImage(name, extension){
  this.fileName = `img/${name}${extension}`;
  this.name = name;
  this.id = name;
  // I know this is redundant but it's more descriptive
  this.title = name;
  this.alt = name;
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
new ProductImage('bag','.jpg');
new ProductImage('banana','.jpg');
new ProductImage('bathroom','.jpg');
new ProductImage('boots','.jpg');
new ProductImage('breakfast','.jpg');
new ProductImage('bubblegum','.jpg');
new ProductImage('chair','.jpg');
new ProductImage('cthulhu','.jpg');
new ProductImage('dog-duck','.jpg');
new ProductImage('dragon','.jpg');
new ProductImage('pen','.jpg');
new ProductImage('pet-sweep','.jpg');
new ProductImage('scissors','.jpg');
new ProductImage('shark','.jpg');
new ProductImage('sweep','.png');
new ProductImage('tauntaun','.jpg');
new ProductImage('unicorn','.jpg');
new ProductImage('usb','.gif');
new ProductImage('water-can','.jpg');
new ProductImage('wine-glass', '.jpg');

// Image Generator
function generateImages() {
  // Clear the img element
  parentElement.textContent = '';
  // Get 3 images
  let firstIndex = getRandomIndex();
  let secondIndex = getRandomIndex();
  let thirdIndex = getRandomIndex();

  // Generate the images and count up the views
  allImages[firstIndex].imageElementGenerator();
  allImages[firstIndex].views++;

  allImages[secondIndex].imageElementGenerator();
  allImages[secondIndex].views++;

  allImages[thirdIndex].imageElementGenerator();
  allImages[thirdIndex].views++;
}

// Random Index Helper Function
function getRandomIndex(){
  let index = randomNumber(0, allImages.length);

  while(lastViewed.includes(index)){
    index = randomNumber(0, allImages.length);
  }
  lastViewed.push(index);

  if(lastViewed.length > 6){
    lastViewed.shift();
  }
  return index;
}

//Output the data in list form.
function outputChartData(){
  let parentSelector = document.getElementById('chart');
  let listParent = document.createElement('ul');
  parentSelector.appendChild(listParent);

  for(let i = 0; i < allImages.length; i++){
    let listItem = document.createElement('li');
    listItem.textContent = `${allImages[i].name} had ${allImages[i].votes} votes and was shown ${allImages[i].views} times.`;
    listParent.appendChild(listItem);
  }
}

// Functions to fill the chart arrays
function fillChartArrays(){
  for(let i = 0; i < allImages.length; i++){
    names.push(allImages[i].title);
    votes.push(allImages[i].votes);
    views.push(allImages[i].views);
  }
  generateChart();
}

// Global Random Number Gen (Exclusive)
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max-min));
}

// Event listener for the voting
parentElement.addEventListener('click', function handler() {
  var titleOfLastClickedProduct = event.target.title;

  for(let i = 0; i < allImages.length; i++){
    if(allImages[i].title === titleOfLastClickedProduct){
      allImages[i].votes++;
    }
  }
  // Remove the listener when the rounds are finished
  userDefinedRounds--;
  if(userDefinedRounds <= 0){
    fillChartArrays();
    outputChartData();
    this.removeEventListener('click', handler);
    // Remove images to reduce user confusion
    parentElement.textContent = ''; // Maybe Remove this.
    return; // Maybe Remove this.
  }
  generateImages();
});

// Event Listener for the submit button
parentForm.addEventListener('submit', function(event){
  event.preventDefault();
  // Check to see if the voting has started if not start it.
  if(votingStarted === false){
    let pElement = document.getElementById('start');
    pElement.textContent = '';
    generateImages();
    votingStarted = true;
  }
  // Set the rounds
  let rounds = Number(event.target.roundSelect.value);
  userDefinedRounds = rounds;
});
