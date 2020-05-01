drawLines();
for (let t = 0; t < 19; t = t + 0.1) {
    console.log("T:" + t)
    x = velocity * t * Math.cos(Math.PI / 3);
    console.log("X:" + x)
    y = velocity * t * Math.sin(Math.PI / 3) - 0.5 * gravity * t * t;
    y = canvasHeight - y;
    console.log("Y:" + y);
    drawBall();}
