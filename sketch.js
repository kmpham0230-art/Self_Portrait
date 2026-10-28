
function setup() {
  createCanvas(600, 600);
  background(220, 200, 230);

  // Hair
  fill(30, 25, 30);
  ellipse(300, 260, 220, 280);

  // Face
  fill(240, 190, 160);
  ellipse(300, 260, 160, 200);

  // Hair bangs
  fill(30, 25, 30);
  arc(300, 195, 160, 100, PI, TWO_PI);

  // Eyes
  fill(30);
  circle(270, 250, 12);
  circle(330, 250, 12);

  // Nose
  line(300, 255, 295, 275);

  // Mouth
  noFill();
  arc(300, 290, 40, 20, 0, PI);

  // Neck
  fill(240, 190, 160);
  rect(280, 340, 40, 50);

  // Shirt
  fill(80, 70, 120);
  triangle(240, 380, 360, 380, 400, 520);

  // Blush
  fill(240, 130, 140);
  circle(260, 280, 20);
  circle(340, 280, 20);

  // Flowers
  fill(255, 180, 200);
  circle(220, 200, 20);
  circle(235, 190, 20);
  circle(235, 210, 20);
  circle(250, 200, 20);

  fill(255, 220, 100);
  circle(235, 200, 12);
}
