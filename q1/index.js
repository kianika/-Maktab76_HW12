
//
fname.onchange = () => {
    if(fname.value){
        alert("the entered name is valid.");
} else {
    alert("the name is required");
}
}


//
email_address.onchange = () => {
    email_address.value = email.textContent;
}

//
submit_btn.onclick = (e) => {
    e.preventDefault();
}