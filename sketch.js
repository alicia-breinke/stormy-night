function preload(){
  let wind;
  let rain;
  let hail;
  let thunder;
}


function setup(){
  loadImage('storm.jpg');
  createCanvas(700, 850);
  loadSound(0.5);
}

function mouseMoved(){
  if (mouseY > 200){
    play.wind('wind.mp3');
  }
  if (mouseY > 300){
    play.rain('rain.mp3');
  }
  else {
  if (mouseY > 400){
    play.hail('hail.mp3');
  }
  else {
    if (mouseY > 500){
      sound('thunder.mp3');
    }
  }
  }
}
