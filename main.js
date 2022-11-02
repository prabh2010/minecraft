var canvas=new fabric.Canvas("myCanvas");
var player_x=10;
var player_y=10;
var blockImage_width=30;
var blockImage_height=30;
var player_object="";
var blockImage_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);
    });
}
function new_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
blockImage_object=Img;
blockImage_object.scaleToWidth(blockImage_width);
blockImage_object.scaleToHeight(blockImage_height);
blockImage_object.set({
top:player_y,
left:player_x
});
canvas.add(blockImage_object);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true&&keyPressed=="80"){
console.log("shift and P");
blockImage_width=blockImage_width+10;
blockImage_height=blockImage_height+10;
document.getElementById("width").innerHTML=blockImage_width;
document.getElementById("height").innerHTML=blockImage_height;
}
if(e.shiftKey==true&&keyPressed=="77"){
console.log("shift and M");
blockImage_width=blockImage_width-10;
blockImage_height=blockImage_height-10;
document.getElementById("width").innerHTML=blockImage_width;
document.getElementById("height").innerHTML=blockImage_height;
}
if(keyPressed=="38"){
    console.log("Up");
    Up();
}
if(keyPressed=="37"){
    console.log("left");
    Left();
}
if(keyPressed=="40"){
    console.log("down");
    Down();
}
if(keyPressed=="39"){
    console.log("right");
    Right();
}
if(keyPressed=="87"){
    console.log("W");
    new_image("wall.jpg");
}
if(keyPressed=="71"){
    console.log("G");
    new_image("ground.png");
}
if(keyPressed=="76"){
    console.log("L");
    new_image("light_green.png");
}
if(keyPressed=="84"){
    console.log("T");
    new_image("trunk.jpg");
}
if(keyPressed=="82"){
    console.log("R");
    new_image("roof.jpg");
}
if(keyPressed=="89"){
    console.log("Y");
    new_image("yellow_wall.png");
}
if(keyPressed=="68"){
    console.log("D");
    new_image("dark_green.png");
}
if(keyPressed=="85"){
    console.log("U");
    new_image("unique.png");
}
if(keyPressed=="67"){
    console.log("C");
    new_image("cloud.jpg");
}
}
function Up(){
if(player_y>=0){
player_y=player_y-blockImage_height;
console.log("block Image height="+blockImage_height);
canvas.remove(player_object);
player_update();
}
}
function Down(){
if(player_y<=500){
player_y=player_y+blockImage_height;
console.log("block Image height="+blockImage_height);
canvas.remove(player_object);
player_update();
}
}
function Left(){
if(player_x>=0){
player_x=player_x-blockImage_width;
console.log("block Image width="+blockImage_width);
canvas.remove(player_object);
player_update();
}
}
function Right(){
if(player_x<=850){
player_x=player_x+blockImage_width;
console.log("block Image width="+blockImage_width);
canvas.remove(player_object);
player_update();
}
}