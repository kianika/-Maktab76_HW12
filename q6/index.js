
// catch on document...
document.addEventListener("goodbye", function(event) { 
   alert(event.target.tagName); 
 });

 // ...dispatch on elem!
 let event = new Event("goodbye", {bubbles: true}); // 
 ElemId.dispatchEvent(event);


 //
document.body.addEventListener("click", function(e){
   console.log(`positions: ${e.clientX} ${e.clientY}`);
})