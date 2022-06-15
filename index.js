let elem = document.getElementById('ElemId')
elem.addEventListener("click", function(e){
e.target.innerHTML = "goodby";
})

document.body.addEventListener("click", function(e){
   console.log(`positions: ${e.clientX} ${e.clientY}`);
})