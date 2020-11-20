let imgOne;
let thunderSound;
let windSound;
let hailSound;
let rainSound;
let soundVolume;
function preload(){
  imgOne = loadImage('storm.jpg');
  soundFormats('mp3');
  thunderSound = loadSound('thunder.mp3');
  windSound = loadSound('wind.mp3');
  hailSound = loadSound('hail.mp3');
  rainSound = loadSound('rain.mp3');
 }

function setup(){
  createCanvas(700, 850);
  noFill();
  soundVolume = 0.5;
  thunderSound.setVolume(soundVolume);
  windSound.setVolume(soundVolume);
  hailSound.setVolume(soundVolume);
  rainSound.setVolume(soundVolume);
  }

function draw(){
  image(img, 75, 75);
}

function mouseMoved(){
  if (mouseY > 700){
    thunderSound.play();
  }
  else {
  if (mouseY > 600){
    windSound.play();
  }
  else {
    if (mouseY > 500){
      hailSound.play();
    }
    else {
      if (mouseY < 400){
        rainSound.play();
      }
    }
  }
}
}
