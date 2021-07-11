let cells = [];
let protection = 0;
let r = 0;
let num;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(random(150,200), 50, 50, 1);
  num = height*0.05;
  }
  
function draw() {
  background(random(150,200), 50, 50, 5);
  while (cells.length < 200){
    var cell = {
      x: random(width),
      y: random(height-80),
      len: 20
    };

    var overlapping = false;
    for (var j = 0; j < cells.length; j++){
      var other = cells[j];
      var d = dist(cell.x, cell.y, other.x, other.y);
      if (d < cell.len + other.len){
        overlapping = true;
      }
    }

    if (!overlapping){
      cells.push(cell);
    }

    protection++;
    if (protection > 10000){
      break;
    }
  }
  honeyComb();
  flower()
  bee();

  }


function honeyComb(){
  for (let i = 0; i < cells.length; i++){
    stroke(random(30,50), 100, 100);
    //strokeWeight(map(mouseX, 0, width, 5, 100));
    fill(random(30,50), random(50), 100, 50);
    beginShape();
    vertex(cells[i].x + random(-2,2), cells[i].y+cells[i].len*0.5 + random(-2,2));
    vertex(cells[i].x + cells[i].len + random(-2,2), cells[i].y + cells[i].len + random(-2,2));
    vertex(cells[i].x + cells[i].len + random(-2,2), cells[i].y + 2*cells[i].len + random(-2,2));
    vertex(cells[i].x + random(-2,2), cells[i].y + cells[i].len*2.5 + random(-2,2));
    vertex(cells[i].x - cells[i].len + random(-2,2), cells[i].y + 2 * cells[i].len + random(-2,2));
    vertex(cells[i].x - cells[i].len + random(-2,2), cells[i].y + cells[i].len + random(-2,2));
    endShape(CLOSE);
  }
}

function bee(){
  for (i = 0; i < 20; i++){
    fill(55, random(100), random(100), random(20))
    circle(mouseX, mouseY,random(100));
  }
}

function flower(){
  fill(random(300,360), random(50), 100, 20);
  stroke(random(300,360), random(50), 100, 20);
  for (i = 0; i < num; i++){
    curveTightness(random(3,6));
    curve(random(width), random(height), mouseX, mouseY, mouseX, mouseY,random(width), random(height));
  } 
}