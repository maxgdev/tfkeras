/* ===
ml5 Example
Image classification using MobileNet and p5.js
This example uses a callback pattern to create the classifier
=== */

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;
// A variable to hold the image we want to classify
let imageToClassify;

function preload() {
    // load MobileNet model
  console.log("Loading...MobileNet model")
  classifier = ml5.imageClassifier('MobileNet');
//   imageToClassify = loadImage('images/bird.jpg');
  imageToClassify = loadImage('images/kitten.jpg');
}

// p5 setup
function setup() {
  createCanvas(400, 400);
  classifier.classify(imageToClassify, gotResult);
  image(imageToClassify, 0, 0);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log("MobileNet loaded and classifying...")
  console.log(results);
  createDiv(`Label: ${results[0].label}`);
  createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
}