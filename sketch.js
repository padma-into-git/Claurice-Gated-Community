//variables for Buildings 
var b0, b1, b2, b3, b4, b5, b7, b8, b9, b10;

//Setup of Border(Canvas) abd Buildings
function setup() {
  
  createCanvas(400, 400);
  
  b0=new Building();
  b0.position=0;
  b0.floors=23;
  
  b1=new Building();
  b1.position=1;
  b1.floors=23;
  
  b2=new Building();
  b1.position=2;
  b2.floors=14;
  
  b3=new Building();
  b3.position=3;
  b3.floors=30;
  
  b4=new Building();
  b4.position=4;
  b4.floors=18;
  
  b5=new Building();
  b5.position=5;
  b5.floors=23;
  
  b6=new Building();
  b6.position=6;
  b6.floors=12;
  
  b7=new Building();
  b7.position=7;
  b7.floors=23;
  
  b8=new Building();
  b8.position=8;
  b8.floors=12;
  
  b9=new Building();
  b9.position=9;
  b9.floors=12;
  
  b10=new Building();
  b10.position=10;
  b10.floors=14;
}

//Background function and Building Display Functions
function draw() {
  
  background(135, 206, 235);
  
  //Sky(Sun)
  fill(255, 204, 0);
  square(312,10,80,100)

  //Building
  fill(128,128,128);
  rect(104,65,200,30);
  fill(255,255,255);
  rect(120,95,15,55);
  fill(255,255,255);
  rect(160,95,15,55);
  fill(255,255,255);
  rect(270,95,15,55);
  fill(255,255,255);
  rect(220,95,15,55);
  fill(255,255,255);
  rect(102,250,210,150);
  fill(255,255,255);
  rect(119,150,170,100);
  
  //Lake
  fill(10,2,0);
  rect(0,340,800,90);
  
  //Grass
  fill(0,255,0);
  rect(0,380,600,30);
  fill(0,255,0);
  rect(0,320,600,30);  
  
  //Building Setup Display Function With Color Fill Fucntion
  fill(105,0,0);
  b0.display();
  fill(255,0,0);
  b1.display();
  fill(50,205,50);
  b2.display();
  fill(255,255,0);
  b3.display();
  fill(255,192,203);
  b4.display();
  fill(0,255,255);
  b5.display();
  fill(20,40,255);
  b6.display();
  fill(255,0,255);
  b7.display();
  fill(139, 0, 255);
  b8.display();
  fill(255,127,0);
  b9.display();
  fill(255,10,243);
  b10.display();

}