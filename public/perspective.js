console.log('Welcome to Future Driven. Glad to see you fiddling with the code. Have fun!');

function preload() {
  // Load model with normalise parameter set to true
  perspective = loadModel('/perspective.stl', true);
}

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('perspective')
  background(255);
  cam = createCamera();
}

window.rotation = {
  circle: 1.56,
  square: -1.56,
}
window.cameraY = {
  circle: -115,
  square: -240,
}

const initialShape = window.location.hash.split('#')[1]

window.shape = initialShape || 'square'

window.onhashchange = (e) => {
  console.log(e)
  const [, shape] = window.location.hash.split('#')
  window.shape = shape
}

// function mouseMoved(e) {
//   rotation += e.movementX / 100;
// }

function draw() {
  background(255);

  //normalMaterial();
  ambientMaterial(250);

  translate(0, 0, 0);
  push();
  rotateY(window.rotation[window.shape]);
  model(perspective)
  pop();

  console.log()

  orbitControl(10, 0, 0.1);
}
