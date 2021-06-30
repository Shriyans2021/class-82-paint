var mouseEvent = "empty"; 
var last_position_of_x, last_position_of_y;
 canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext("2d"); color = "black";
 width_of_line = 1;

 canvas.addEventListener("mousedown", my_mousedown);
 function my_mousedown(e)
 {
     mouseEvent = "mouseDown";
 }
 canvas.addEventListener("mouseleave", my_mouseLeave);
 function my_mouseLeave(e)
 {
     mouseEvent = "mouseLeave";
 }
 canvas.addEventListener("mouseup", my_mouseUp);
 function my_mouseUp(e)
 {
     mouseEvent = "mouseUp";
 }
 canvas.addEventListener("mousemove", my_mouseMove);
 function my_mouseMove(e)
 {
     currentx = e.clientX - canvas.offsetLeft;
     currentY = e.clientY - canvas.offsetTop;
     if (mouseEvent == "mouseDown") {
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width_of_line;
         ctx.moveTo(last_position_of_x, last_position_of_y) ;
        ctx.lineTo(currentx,currentY);
        ctx.stroke();
     }
     last_position_of_x = currentx;
     last_position_of_y = currentY;
 }


 
 