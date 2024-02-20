

function preload() {
//img2=loadImage("https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'")
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(510, 250);
  camera = createCapture(VIDEO);
  camera.hide();

  tint_color = "";
}

function draw() {
  image(camera, 0, 0, 640, 480);
  fill(255,0,0);
  stroke(0,255,0);
  circle(50,50,80);

  circle(50,430,80);

  circle(590,50,80);

  circle(590,430,80);

  fill(0,128,0);
  stroke(0,128,0);
  rect(90,40,460,20);

  rect(90,420,460,20);

  rect(40,90,20,300);

  rect(580,90,20,300)

  
  tint(tint_color);
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}

