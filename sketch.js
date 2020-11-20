  let image;
  let wind;
  let rain;
  let hail;
  let thunder;

function preload(){
  image = loadImage('storm.jpg');
  soundFormats('mp3');
  wind = loadSound('wind.mp3');
  rain = loadSound('rain.mp3');
  hail = loadSound('hail.mp3');
  thunder = loadSound('thunder.mp4');
}

function setup(){
  createCanvas(mouseX, mouseY, 700, 850);
  soundVolume = 0.5;
  wind(setVolume);
  rain(setVolume);
  hail(setVolume);
  thunder(setVolume);
}

function mouseMoved(){
  if (mouseY > 200){
    wind.play();
  }
  if (mouseY > 300){
    rain.play();
  }
  else {
  if (mouseY > 400){
    hail.play();
  }
  else {
    if (mouseY > 500){
      hail.play();
    }
  }
  }
}
