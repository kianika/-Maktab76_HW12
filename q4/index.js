let rl = document.querySelector('ul');
console.log(rl);
rl.onclick = function (event) {
    console.log("mona");
    event.target.style.textDecoration = "line-through";
}