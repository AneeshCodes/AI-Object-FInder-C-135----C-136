find = ''

function setup(){
  canvas = createCanvas(600, 500)
  canvas.center()
  video  = createCapture()
}

function draw(){
  image(video, 0, 0, 600, 500)
  video.hide()
}

function start(){
  objectDetected = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById('status').innerHTML = 'Detecting Objects';
  video.play()
  find = document.getElementById('object_name').value
}

function modelLoaded() {
  console.log('model is loaded');
  status = true;
}