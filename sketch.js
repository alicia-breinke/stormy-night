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
    sound.play('thunder.mp3');
  }
  else {
  if (mouseY > 600){
    sound.play('hail.mp3');
  }
  else {
    if (mouseY > 500){
      sound.play('rain.mp3');
    }
    else {
      if (mouseY > 400){
        sound.play('rain.mp3');
      }
      else {
        if (mouseY > 300){
          sound.play('wind.mp3');
        }
      }
    }
  }
}
}
