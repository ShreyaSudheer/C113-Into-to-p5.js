function preload()
{

}
function setup()
{
   canvas = createCanvas(500, 300);
   canvas.position(110, 260);
   video = createCapture(VIDEO);
   video.hide();

   tint_color = "";
}
function draw()
{
   image(video, 0, 0, 500, 300);
   tint(tint_color);
}
function apply_filter(){
    tint_color = document.getElementById("filter_color").value;
}
function take_snapshot(){
    save("Filter_image.png");
}