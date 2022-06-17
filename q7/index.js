
function event_function(e){
let posx = e.clientX;
let posy = e.clientY;
document.getElementById("show_position").innerHTML = `position x is ${posx} and position y is ${posy}`;
}