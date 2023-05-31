
function setup() {
  createCanvas(windowWidth,windowHeight); 
  //背景大小設定為和視窗一樣大
}

function draw() {
  background(300);//背景為白色
  ctx = canvas.getContext('2d');
	ctx.lineWidth = 3;
	
  gradientLine(ctx, 60, 60, 300, 380, 'red','blue')
  //線條的顏色
  
  
  
  translate(width/2, height/2);//設定座標中心點(0,0)在視窗正中間
  scale(scale);
  
  textSize(32);
  



  line(0, -100, 50, 50);
  line(50, 50, 200, 50);
  line(200, 50, 100, 150);
  line(100, 150, 150, 300);
  line(150, 300, 0, 200);
  line(0, 200, -150, 300);
  line(-150, 300, -100, 150);
  line(-100, 150, -200, 50);
  line(-200, 50, -50, 50);
  line(-50, 50, 0, -100);

  line(0, -50, 25, 25);
  line(25, 25, 100, 25);
  line(100, 25, 50, 75);
  line(50, 75, 75, 150);
  line(75, 150, 0, 100);
  line(0, 100, -75, 150);
  line(-75, 150, -50, 75);
  line(-50, 75, -100, 25);
  line(-100, 25, -25, 25);
  line(-25, 25, 0, -50);

  line(0, -50, 12.5, 12.5);
  line(12.5, 12.5, 50, 12.5);
  line(50, 12.5, 25, 37.5);
  line(25, 37.5, 37.5, 75);
  line(37.5, 75, 0, 50);
  line(0, 50, -37.5, 75);
  line(-37.5, 75, -25, 37.5);
  line(-25, 37.5, -50, 12.5);
  line(-50, 12.5, -12.5, 12.5);
  line(-12.5, 12.5, 0, -50);

line(0, -75, 37.5, 37.5);
  line(37.5, 37.5, 150, 37.5);
  line(150, 37.5, 75, 112.5);
  line(75, 112.5, 112.5, 225);
  line(112.5, 225, 0, 150);
  line(0, 150, -112.5, 225);
  line(-112.5, 225, -75, 112.5);
  line(-75, 112.5, -150, 37.5);
  line(-150, 37.5, -37.5, 37.5);
  line(-37.5, 37.5, 0, -75);

  line(0, -65, 32.5, 32.5);
  line(32.5, 32.5, 130, 32.5);
  line(130, 32.5, 65, 97.5);
  line(65, 97.5, 97.5, 195);
  line(97.5, 195, 0, 130);
  line(0, 130, -97.5, 195);
  line(-97.5, 195, -65, 97.5);
  line(-65, 97.5, -130, 32.5);
  line(-130, 32.5, -42.5, 32.5);
  line(-42.5, 32.5, 0, -65);


  function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, c1);
    gradient.addColorStop(1, c2);
    ctx.strokeStyle = gradient;
  
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  text("大家好",0,100)

  
  
  
  //設置一條線從(x1,y1)到(x2,y2)打法是line(x1,y1,x2,y2)
  //以下是星星線條的程式碼
  
}

