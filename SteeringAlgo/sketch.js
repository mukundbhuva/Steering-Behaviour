// Mukund Bhuva
// Steering Text Paths
// P5.js

var font;
var vehicles = [];
var points;
var prev = 0;

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(1800, 300);
  background(51);
  getName();
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
  prev = points.length;
}

function getName() {
  var name = document.form.box.value;
  points = font.textToPoints(name, 50, 200, 162, {
    sampleFactor: 0.1
  });

  if (prev < points.length) {
    for (var i = 0; i < points.length - prev; i++) {
      var pt = points[i];
      var vehicle = new Vehicle(pt.x, pt.y);
      vehicles.push(vehicle);
    }
    for (var i = 0; i < points.length; i++) {
      var pt = points[i];
      vehicles[i].setPos(pt.x, pt.y);
    }
    prev = points.length;
  } else {
    for (var i = prev; i > points.length; i--) {
      vehicles.pop();
    }
  }
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    vehicles[i].setPos(pt.x, pt.y);

  }
  prev = points.length;
}


function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}