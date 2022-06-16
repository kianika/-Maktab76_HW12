let item = document.querySelector('div');
item.onclick = function(e){
    console.log(`the node name is : ${item.nodeName}`);
    // console.log(`the node name is : ${e.target.parentElement.nodeName}`);
}


let btn = document.querySelector('button');
btn.onclick = function(e){
    console.log(`the node name is : ${e.target.nodeName}`);
}
