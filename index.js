let c = document.getElementById("myCanvas2");
let ctx = c.getContext("2d");

let canvasWidth = c.width;
let canvasHeight = c.height;

let startPointX = 100;
let startPointY = canvasHeight - 100;

let x = startPointX;
let y = startPointY;

let gravity = 9.8;
let velocity = 100;

let t = 0;

let radain = Math.PI/3;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawLines() {
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, canvasHeight);
    ctx.stroke();
    ctx.moveTo(0, startPointY);
    ctx.lineTo(canvasWidth, canvasHeight - 100);
    ctx.stroke();
}

function draw() {
    x = velocity * t * Math.sin(radain);
    x = x + startPointX;
    y = velocity * t * Math.cos(radain) - 0.5 * gravity * t * t;
    y = canvasHeight - y;
    y = y - (canvasHeight-startPointY);
    drawBall(); 
    console.log(t);   
    if (y > startPointY){
        console.log("Done");        
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        // return;
        t = 0;

    }
    t+=0.09;
    requestAnimationFrame(draw);
    // setInterval(draw(),5000);
}
// drawLines();
draw();