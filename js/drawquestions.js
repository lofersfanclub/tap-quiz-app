
var color    = ['#dc1478','#54b23e','#0072b5','#3e6c35','#c88225','#f89222','#f16121','#841731','#fcae14','#00a4d4','#ec3726','#ba1c2c','#24903f','#cd9525','#e81929','#17305d','#014b80'];
var slices   = quizQuestions.length;
var sliceDeg = 360/slices;
var deg      = 0;
var ctx    = canvas.getContext('2d');
var width  = canvas.width; // size
var center = width/2;      // center
function deg2rad(deg){ return deg * Math.PI/180; }

function drawSlice(deg, color){
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(center, center);
  ctx.arc(center, center, width/2, deg2rad(deg), deg2rad(deg+sliceDeg));
  ctx.lineTo(center, center);
  ctx.fill();
}

function drawText(deg, text) {
  ctx.save();
  ctx.translate(center, center);
  ctx.rotate(deg2rad(deg));
  ctx.textAlign = "left";
  ctx.textTransform = "uppercase";
  ctx.fillStyle = "#fff";
  ctx.font = 'bold 0.8rem sans-serif';
  ctx.fillText(text.toUpperCase(), 140, 10);
  ctx.restore();
}

for(var i=0; i<slices; i++){
  drawSlice(deg, color[quizQuestions[i]['category']]);
  drawText((deg+sliceDeg/2), quizQuestions[i]['title']);
  deg += sliceDeg;
}

            ctx.beginPath();
            ctx.moveTo(center,center);
            ctx.fillStyle = "#fff";
            ctx.arc(center, center, (width/2)*.40, 0, 2 * Math.PI, false);
            ctx.fill();
