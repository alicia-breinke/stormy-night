function preload(){
  let imgOne;
  let soundVolume;
}


function setup(){
  imgOne = loadImage('storm.jpg');
  createCanvas(700, 850);
  soundVolume = loadSound(0.5);
}

function mouseMoved(){
  if (mouseY > 700){
    sound('thunder.mp3');
  }
  else {
  if (mouseY > 600){
    sound('hail.mp3');
  }
  else {
    if (mouseY > 500){
      sound('rain.mp3');
    }
    else {
      if (mouseY > 400){
        sound('rain.mp3');
      }
      else {
        if (mouseY > 300){
          sound('wind.mp3');
        }
      }
    }
  }
}
}
